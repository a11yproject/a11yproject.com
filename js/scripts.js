/*
  Using object literal notation we can keep our JS organized and easy
  to maintain. Functions are comma separated, well named parameter values,
  and triggered by calling them like this Engine.ui.functionName();
*/

$(document).ready(function(){

  "use strict";

  var Engine = {

    ui : {

      footerContributors : function(){
        function gitHubContributors(){

          var
            howMany = 42,
            baseUrl = 'https://api.github.com/repos/a11yproject/a11yproject.com/contributors?per_page='+howMany+'&callback=?',
            $contributorsOutput = $("#contributors-list"),
            $paginationOutput = $(".contributors-pagination"),
            paginationClass = "contributors-pagination-link",
            $pager = $(".pager");

          function _listContributors(data) {
            $contributorsOutput.html("");
            var html = '';
            $(data).each(function(i, user){
              html += '<li><a href="'+ user.url.replace('api.','').replace('users/','') +'"><img src="'+ user.avatar_url +'" alt="'+ user.login +'" class="contributor-avatar"></a></li>';
            });
            $contributorsOutput.html(html);
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

          function _paginationTriggers(){
            $("."+paginationClass).click(function(e){
              e.preventDefault();
              var url = $(this).attr("href");
              _getContributors(url);
            });
          }

          function _getContributors(apiUrl){
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
                console.log(e.message);
              }
            });
          }

          function _throwError(data){
            $contributorsOutput.text("Error");
            console.log(data);
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

            function _outputData(target,data){
              $(target).text(data);
            }

            // contributors
            function _grabContributors(url){
              $.ajax({
                type: "GET",
                url: url,
                async: true,
                contentType: "application/json",
                dataType: "jsonp",
                success: function(data){
                  var data = data.data;
                 _outputData($dataContributors,data.length);
                },
                error: function(e) {
                  console.log(e.message);
                }
              });
            } // _grabContributors()

            //  stars
            function _grabStars(url){
              $.ajax({
                type: "GET",
                url: url,
                async: true,
                contentType: "application/json",
                dataType: "jsonp",
                success: function(data){
                  var data = data.data;
                  _outputData($dataStars,data.stargazers_count);
                },
                error: function(e) {
                  console.log(e.message);
                }
              });
            } // _grabStars()

            //  open issues
            function _grabOpenIssues(url){
              $.ajax({
                type: "GET",
                url: url,
                async: true,
                contentType: "application/json",
                dataType: "jsonp",
                success: function(data){
                  var data = data.data;
                  _outputData($dataOpenIssues,data.open_issues_count);
                },
                error: function(e) {
                  console.log(e.message);
                }
              });
            } // _grabOpenIssues()

            // init
            _grabContributors(contribUrl);
            _grabStars(starsUrl);
            _grabOpenIssues(openIssuesUrl);

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

  Engine.ui.footerContributors();
  Engine.ui.footerCopyright();
  Engine.ui.toc();

});
