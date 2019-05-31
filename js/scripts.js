/*
  Using object literal notation we can keep our JS organized and easy
  to maintain. Functions are comma separated, well named parameter values,
  and triggered by calling them like this Engine.ui.functionName();
*/

$(document).ready(function(){

  "use strict";

  function setupWaypoints(element, offset) {
    // waypoint classes that need to be added
    $(element).addClass('waypoint-section');

    // get the ID of the section
    var id = $(element).attr('id');

    // Create the waypoint
    var waypoint = new Waypoint({
      element: $('#'+id),
      handler: function(direction) {
        // pass it to our function to keep things cleaner in here
        toc_class(direction, id);
      },
      group: 'toc-group',
      offset: offset
    });
  }

  function removeWaypoints(element) {
    // destroys all active waypoints
    Waypoint.destroyAll();
  }

  function toc_class(direction, element) {
    // remove the active class from all of them
    $('.toc a').removeClass('active');

    if(direction == 'down') {
      // we're arriving here from above it. Add active to this element
      $('.toc a.'+element).addClass('active');
    } else {
      // when we hit the top of the element while scrolling up, we're actually
      // arriving at the one before it, so let's make that one active instead.
      $('.toc a.'+element).parent().prev('li').find('a').addClass('active');
    }
  }


  function tocPageSemantics() {
    // get window width in EMs
    var windowWidth = $(window).width() / parseFloat($("html").css("font-size"));

    if(windowWidth < 53) { // accordion view

      // remove waypoints and waypoint semantics
      removeWaypoints();

    } else { // desktop view

      $('.article-section').each( function(i, element) {

        // find out if we're on a short TOC or long TOC
        var offset;
        if($('.toc-wrap').hasClass('toc-long')) {
          offset = '30%'; // larger offset for long TOC lists feels better
        } else {
          offset = '20%'; // this offset feels right for short TOC lists
        }

        // add waypoints and waypoint classes
        setupWaypoints(element, offset);

      }); // article-section each

    }// if windowWidth < 55

  }


  // Resize delay
  var fireResize;

  window.addEventListener('resize', function(event){
      clearTimeout(fireResize);
      // what to do when the resize is finished - fire our resizeWindow function
      fireResize = setTimeout(tocPageSemantics, 300);
  });


  var Engine = {

    ui : {

      toc : function(){

        // had to move this function outside of the if($('.toc').length) statement bc I was getting this error:
        // [Error] SyntaxError: Strict mode does not allow function declarations in a lexically nested statement.
        // (anonymous function) (scripts.js, line 30)

        if($('.toc').length) {
          // if we have a toc, add a body class
          $('body').addClass('has-toc');

          // add the accordion / waypoints semantics
          tocPageSemantics();

          if($('.post-content').length) {
            var tocWrapElem = $('.post-content');
            var tocOffset = '-10px';
          } else {
            var tocWrapElem = $('.post');
            var tocOffset = '10px';
          }

          var sticky_waypoint = new Waypoint({
            element: tocWrapElem,
            handler: function(direction) {
              // pass it to our function to keep things cleaner in here
              if(direction == 'down') {
                $('.toc-wrap').addClass('stick');
              } else {
                $('.toc-wrap').removeClass('stick');
              }
            },
            offset: tocOffset
          });



          var sticky_waypoint_footer = new Waypoint({
            element: $('.footer'),
            handler: function(direction) {
              // pass it to our function to keep things cleaner in here
              if(direction == 'down') {
                $('.toc-wrap').addClass('stick-footer');
              } else {
                $('.toc-wrap').removeClass('stick-footer');
              }
            },
            offset: function() {
                    return this.element.outerHeight(true);
                  }
          });
        }
      }, // toc

      lazyLoadFooter : function(target,offset){

        var $target = $(target),
            targetLoc = $target.offset().top,
            contribsHaveLoaded = localStorage.getItem("contribsLoaded"),
            footerLazyLoadTriggered = false,
            $window = $(window);

            if(!contribsHaveLoaded){

              $window.on('scroll.lazyLoadFooter', function(e){

                var scrollPos = $window.scrollTop(),
                    targetScroll = targetLoc - offset;

                    if(targetScroll <= scrollPos && !footerLazyLoadTriggered){
                      localStorage.setItem("hasLoadedFooter",true);
                      Engine.ui.footerContributors(); // run custom footer
                      //footerLazyLoadTriggered = true;
                      $window.off('scroll.lazyLoadFooter');
                    }

              });

            }else{
              Engine.ui.footerContributors(); // run custom footer
            }

      }, // lazyLoadFooter()

      footerContributors : function(){

        function gitHubContributors(){

          var
            howMany = 18,
            baseUrl = 'https://api.github.com/repos/a11yproject/a11yproject.com/contributors?per_page='+howMany+'&callback=?',
            $contributorsOutput = $("#contributors-list"),
            $paginationOutput = $(".contributors-pagination"),
            paginationClass = "contributors-pagination-link",
            $pager = $(".pager");

            if(!localStorage.getItem("pageLoads")){
              localStorage.setItem("pageLoads",0); // page load count
            }else{
              localStorage.setItem("pageLoads", parseInt(localStorage.getItem('pageLoads')) + 1);
            }

            // console.log(localStorage.getItem("pageLoads"));

            function _listContributors(data) {
              $contributorsOutput.html("");
              var html = '';
              $(data).each(function(i, user){
                html += '<li><a href="'+ user.url.replace('api.','').replace('users/','') +'"><img src="'+ user.avatar_url +'&s=50" alt="'+ user.login +'" class="contributor-avatar"></a></li>';
              });
              $contributorsOutput.html(html);
              localStorage.setItem("contribsHtml",html);
              localStorage.setItem("contribsLoaded",true);
            }

            function _listContributorsLocalStorage(){
              // console.log("loading contribs from local storage");
              $contributorsOutput.html(localStorage.getItem("contribsHtml"));
            }

            function _contribPagination(meta){
              var
                link = meta.Link,
                $output = $paginationOutput;
                $output.html("");

                $(link).each(function(i,item){
                  var text = item[1].rel,
                      url = item[0],
                      html = "<li><a href="+url+" class='"+paginationClass+"'>"+text+"</a></li>";
                      $output.prepend(html);
                });

                _simplifyPager(); // cut down pager
            }

            function _contribPaginationLocalStorage(){
              // console.log("loading pagination from");
              $paginationOutput.html(localStorage.getItem("contribsPagination"));
            }

            function _paginationTriggers(){
              $("."+paginationClass).click(function(e){
                e.preventDefault();
                localStorage.removeItem("contribsLoaded");
                var url = $(this).attr("href");
                _getContributors(url);
              });
            }

            function _getContributors(apiUrl){

              if(localStorage.getItem("contribsLoaded") && localStorage.getItem("pageLoads") <= 20){
                _listContributorsLocalStorage(); // output contribs from localStorage
                _contribPaginationLocalStorage(); // output contrib pagination from localStorage
                _paginationTriggers(); // handle pagination clicks
              }else{
                // console.log("loading from API");
                localStorage.removeItem("pageLoads");
                $.ajax({
                  type: 'GET',
                  url: apiUrl,
                  async: false,
                  contentType: "application/json",
                  dataType: 'jsonp',
                  success: function(data){
                    if(data.meta.status != "200"){
                      _throwError(data.meta);
                    }else{
                      _listContributors(data.data); // output contribs
                      _contribPagination(data.meta); // draw pagination
                      _paginationTriggers(); // handle pagination clicks
                    }
                  },
                  error: function(e) {
                    // console.log(e.message);
                  }
                });
              }
            }

            function _throwError(data){
              $contributorsOutput.text("Error Loading Contributors...");
              // console.log(data);
            }

            function _simplifyPager(){
              $pager.find("li").each(function(){
                var $itemText = $(this).find("a").text();
                // hide unwanted pagination items
                // replace default text next/prev
                switch($itemText) {
                  case "first":
                    $(this).hide();
                    break;
                  case "last":
                    $(this).hide();
                    break;
                  case "next":
                    $(this).find("a").text("Next");
                    break;
                  case "prev":
                    $(this).find("a").text("Previous");
                    break;
                  default:
                }
              });

              localStorage.setItem("contribsPagination",$pager.html())

            }

            // get contributors on landing
            if(window.matchMedia('(min-width: 480px)').matches) {
              _getContributors(baseUrl);
            }

          }

          function gitHubStats(){

            var
              $parent = $(".github-data"),
              $dataContributors = $parent.find(".data.contributors"),
              $dataStars = $parent.find(".data.stars"),
              $dataOpenIssues = $parent.find(".data.open-issues"),
              baseUrl = "https://api.github.com/repos/a11yproject/a11yproject.com",
              contribUrl = baseUrl+"/contributors?per_page=5000&callback=?",
              starsUrl = baseUrl,
              openIssuesUrl = baseUrl;

              function _outputData(target,data,localStorageVar){
                $(target).text(data);
                if(localStorageVar){
                  localStorage.setItem(localStorageVar,data);
                }
              }

              // contributors count
              function _grabContributors(url){
                $.ajax({
                  type: "GET",
                  url: url,
                  async: true,
                  contentType: "application/json",
                  dataType: "jsonp",
                  success: function(data){
                    var data = data.data;
                   _outputData($dataContributors,data.length,"contribStat");
                  },
                  error: function(e) {
                    console.log(e.message);
                  }
                });
              } // _grabContributors()

              //  stars count
              function _grabStars(url){
                $.ajax({
                  type: "GET",
                  url: url,
                  async: true,
                  contentType: "application/json",
                  dataType: "jsonp",
                  success: function(data){
                    var data = data.data;
                    _outputData($dataStars,data.stargazers_count,"starStat");
                  },
                  error: function(e) {
                    console.log(e.message);
                  }
                });
              } // _grabStars()

              //  open issues count
              function _grabOpenIssues(url){
                $.ajax({
                  type: "GET",
                  url: url,
                  async: true,
                  contentType: "application/json",
                  dataType: "jsonp",
                  success: function(data){
                    var data = data.data;
                    _outputData($dataOpenIssues,data.open_issues_count,"openIssueStat");
                  },
                  error: function(e) {
                    console.log(e.message);
                  }
                });
              } // _grabOpenIssues()

              // init
              if(localStorage.getItem("contribsLoaded") && localStorage.getItem("pageLoads") <= 20){
                // localStorage
                // console.log('firing stats from local storage');
                _outputData($dataContributors,localStorage.getItem("contribStat"));
                _outputData($dataStars,localStorage.getItem("starStat"));
                _outputData($dataOpenIssues,localStorage.getItem("openIssueStat"));
              }else{
                _grabContributors(contribUrl);
                _grabStars(starsUrl);
                _grabOpenIssues(openIssuesUrl);
              }

          } // gitHubStats

          gitHubContributors();
          gitHubStats();

      }, // footerContributors

      footerCopyright : function(){
        $('.a11y-copyright').text(new Date().getFullYear())
      }, // footerCopyright

      activeNav : function(el,activeClass){
        /* Loops over nav and adds .active class to parent + visually hidden current page text */
        $(el).find("li:not('.logo') a").each(function(){
          var path = document.location.pathname,
              current_href = this.getAttribute("href");
              if (path == current_href) {
                $(this).html($(this).text()+"<span class='screen-reader-text-inline'>, current page</span>");
                $(this)
                  .addClass(activeClass)
                  .parents("li").addClass(activeClass);
              }
        });
      }, // activeNav

      pastEvents : function(){
        /* Make the current time Jekyll friendly */
        var now = Date.now() / 1000;

        function findPastEvents() {
          /* Snag everything with a `data-date` attribute, puts it into a node list */
          var events = [].slice.call(document.querySelectorAll('[data-date]'));
          /* Loops through event array, returns past that occured after current date */
          var eventTimes = events.filter(function (el) {
            return el.dataset.date < now - 86400; // `86400` is 24 hours in Unix time (60 * 60 * 24)
          })
          return eventTimes;
      }

      // Reverses past event list so oldest is placed last
      var pastEventList = findPastEvents();
      pastEventList = pastEventList.reverse();

      // Moves an event list to the targeted container
      function moveEventsList(container, arr) {
        arr.map(function (el) {
          container.appendChild(el);
        })
      }
      moveEventsList(document.querySelector('#past-events'), pastEventList);

      // Reveal ToC and past events once filled
      function unhide(el) {
        if (el) {
          el.removeAttribute("hidden");
        }
      }
      unhide(document.querySelector('#past-events'));
      unhide(document.querySelector('#toc-events'));

      if (document.querySelector('#event-list')) {
        document.querySelector('#event-list').textContent = "Upcoming";
      }
    } // pastEvents
    } // ui

  } // Engine

  Engine.ui.toc();
  Engine.ui.lazyLoadFooter("footer[role='contentinfo']",800);
  Engine.ui.footerCopyright();
  Engine.ui.activeNav("#main-navigation","active");
  Engine.ui.pastEvents();

});
