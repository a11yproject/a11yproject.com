/*
  Using object literal notation we can keep our JS organized and easy
  to maintain. Functions are comma separated, well named parameter values,
  and triggered by calling them like this Engine.ui.functionName();
*/

$(document).ready(function(){

  "use strict";

  $('form').garlic(); // persistent checkboxes for checklist section

  var Engine = {

    ui : {

      lazyLoadFooter : function(target,offset){

        var $target = $(target),
            targetLoc = $target.offset().top,
            footerLazyLoadTriggered = false;

            if(!footerLazyLoadTriggered){

              $(window).scroll(function(e){

                var scrollPos = $(this).scrollTop(),
                    offSet = offset,
                    targetScroll = targetLoc - offSet;

                    if(targetScroll <= scrollPos && !footerLazyLoadTriggered){
                      Engine.ui.footerContributors(); // run custom footer
                      footerLazyLoadTriggered = true;
                    }

              });

            }else{
              Engine.ui.footerContributors(); // run custom footer
            }

      }, // lazyLoadFooter()

      footerContributors : function(){

        function gitHubContributors(){

          var
            howMany = 42,
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
                html += '<li><a href="'+ user.url.replace('api.','').replace('users/','') +'"><img src="'+ user.avatar_url +'" alt="'+ user.login +'" class="contributor-avatar"></a></li>';
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
                      $output.append(html);
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

      toc : function(){
        var toc = $('#toc');

        if(toc.length) {
          toc.prepend('<li class="nav-header">Archive Categories</li>');
          $('.category-title').each(function(){
            toc.append('<li><a href=#'+this.id+'>'+$(this).text()+'</a>');
          });
        }
      } // toc

    } // ui

  } // Engine

  Engine.ui.lazyLoadFooter("footer[role='contentinfo']",800);
  Engine.ui.footerCopyright();
  Engine.ui.toc();

});
