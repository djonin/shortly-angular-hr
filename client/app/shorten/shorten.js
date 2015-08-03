angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = function(link){
    Links.newLink()
      .then(function (status) {
        if(status) {
          // add it to HTML
        } else {
          // report error
          console.log('Failed to post the link');
        }
      })
      .catch(function (error) {
        console.error(error);
      });
    };
});
