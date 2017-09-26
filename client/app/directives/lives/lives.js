appTest.directive('lives', ['CONFIG', function( CONFIG ){

  return {
    restrict: 'E',
    templateUrl: 'app/directives/lives/lives.html',
    scope: {
      amount: '='
    },
    link: function(scope){

      function getAllLives(){
        // Lives per game defined
        scope.lives = new Array(CONFIG.Plays);
      }

      getAllLives();
    }
  }
}]);
