// workaround for animations not running on page load
(function () {
  angular.module('APP', ['ngAnimate', 'irn.TargetWatch'])
  .directive('fadeInWatcher', ['$animate', '$rootElement', 'IrnTargetWatch', function ($animate, $rootElement, IrnTargetWatch) {
    var link = function (scope, element) {
      // because $rootElement.data('$$ngAnimateState').running is modified outside of the digest cycle
      // watching it with $scope.$watch does not work
      IrnTargetWatch.watch($rootElement.data('$$ngAnimateState'), 'running', false)
        .then(function () {
          $animate.addClass(element, 'colorize-red');
        });
    };

    return {
      restrict: 'A',
      link: link
    };
  }])
  .directive('fadeIn', ['$animate', function ($animate) {
    var link = function (scope, element) {
      $animate.addClass(element, 'colorize-red');
    };

    return {
      restrict: 'A',
      link: link
    };
  }]);
}());
