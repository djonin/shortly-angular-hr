angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $state, Links) {
  $scope.link = {};
  $scope.message = "";
  $scope.addLink = function(){
    Links.newLink($scope.link.text)
    .then(function (res) {
      if((res.status / 100) === 2) {
        $state.go('links');
      } else {
        // report error
        $scope.message = "There was an error processing your request. Please try again.";
      }
    })
    .catch(function (error) {
      console.error(error);
    });
  };
});
