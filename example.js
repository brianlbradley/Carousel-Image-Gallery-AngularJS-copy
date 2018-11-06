angular.module('ui.bootstrap.demo', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('CarouselDemoCtrl', function ($scope) {

  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.currentIndex=0;
  $scope.active = 0;
   var currentIndex =0;
   var id=currentIndex++;

$scope.isCurrentSlideIndex = function (index) {
            return $scope.currentIndex === index;
        };

  $scope.uri = "slides";
    $scope.folders = ['cats','dogs'];
    $scope.slides = ["1.jpg","2.jpg","3.jpg"];
    $scope.currentFolder = $scope.folders[0];
    $scope.selectFolder = function (folder) {
      $scope.currentFolder = folder;
    };
    $scope.activeFolder = function (folder) {
      return (folder === $scope.currentFolder);
    };

  // Randomize logic below

});
