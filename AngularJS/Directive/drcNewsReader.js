angular.module('appNewsReader', []);

angular.module('appNewsReader')
  .directive('uiNewsreader', function ($http) {
    return {
      restrict: 'E',
      scope: {
        url: "@"
      },
      templateUrl: 'Directive/drcNewsReader.html',
      link: function(scope, elem, attrs) {
        scope.news = [];
        scope.isRendered = false;
        scope.isLoaded = false;

        scope.newsDetail = {};
        scope.newsDetail.title = "";
        scope.newsDetail.image = {};
        scope.newsDetail.image.url = "";
        scope.newsDetail.image.width = "";
        scope.newsDetail.image.height = "";
        scope.newsDetail.description = "";
        scope.newsDetail.link = "";

        scope.showDetails = function(news, $event) {
          $event.preventDefault();

          scope.newsDetail.title = news.title;
          scope.newsDetail.image = scope.getImage(news);
          scope.newsDetail.description = scope.getDescription(news.description);
          scope.newsDetail.link = news.link;
          scope.isRendered = true;
        };

        scope.getImage = function(model) {
          if(model["media:thumbnail"]) {
            return {
              url: model['media:thumbnail'].url,
              width: model['media:thumbnail'].width,
              height: model['media:thumbnail'].height
            };
          } else if(model["media:content"]) {
            return {
              url: model['media:content'].url,
              width: model['media:content'].width,
              height: model['media:content'].height
            };
          }

          return {};
        };

        scope.getDescription = function(html) {
          var regex = /(<([^>]+)>)/ig
            ,body = html
            ,result = body.replace(regex, "");

          return result.replace(/[&]nbsp[;]/gi, " ");
        };

        $http({method: 'GET', url: scope.url}).
          success(function(data) {
            scope.isLoaded = true;
            var items = data.value.items.filter(function(item) {
              return (item["media:thumbnail"] || item["media:content"]) && (item["description"])
            });

            items = (items.length > 10) ? items.slice(0, 10) : items;
            scope.newsList = items;
          });
      }
    };
  });