appTest.directive('trophies', function(){

  return {
    restrict: 'E',
    templateUrl: 'app/directives/trophies/trophies.html',
    scope: {
      trophies: '='
    }
  }
});
