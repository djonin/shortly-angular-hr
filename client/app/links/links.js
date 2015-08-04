angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  console.log('Links' + Links);
  $scope.data = {};
  $scope.getLinks = function(){
    Links.links()
      .then(function (links) {
		console.log($scope.data);
      	console.log(links);
        $scope.data.links = links;
      })
      .catch(function (error) {
        console.error(error);
    });
  };
  $scope.getLinks();
});
