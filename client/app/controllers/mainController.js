appTest.controller('MainController', ['$scope', '$filter', '$timeout', 'MathService', 'CommonService', 'CONFIG',

function($scope, $filter, $timeout, MathService, CommonService, CONFIG) {

  // Shared methods ////////
  $scope.init = function(){

    newGame();
    $scope.newGame = true;
    $scope.historical = [];
    $scope.userOption = '';
    $scope.machineOption = '';
    $scope.trophiesUser = [];
    $scope.trophiesMachine = [];
  }

  $scope.onUserSelect = function (option){

    // Adding view values
    $scope.message = '';
    $scope.gameStop = true;
    $scope.machineOption = '';
    $scope.userOption = option;

    // This makes to think that the machine is still thinking
    $timeout(function(){

      // Generate random value and translation
      var machineOption = MathService.GetRandomOneToThree();
      $scope.machineOption = $filter('option')(machineOption);

      // We compare all cases
      checkResult($scope.userOption, $scope.machineOption);

      // View Actions
      $scope.gameStop = false;
    }, 500);
  }

  // Local methods ////////
  function newGame(){

    $scope.userScore = 0;
    $scope.machineScore = 0;
    $scope.gameStop = false;
  }

  function checkResult(user, machine){

    if (user == machine){
      $scope.message = 'Tie';
    } else {

      // Service checks game's results
      result = CommonService.DoesUserWinner(user, machine);

      // Incrementing scores
      if (result){
          $scope.userScore += 1;
      } else {
          $scope.machineScore += 1;
      }
    }
  }

  // Watcher of points
  $scope.$watch('userScore', function(newVal){
    prizes(newVal, true);
  });

  $scope.$watch('machineScore', function(newVal){
    prizes(newVal, false);
  });

  function prizes(score, user){

    // When somebody wins
    if (score == CONFIG.Plays && CONFIG.Plays != 0){

      // We save all scores for each one
      var game = ({
          user: $scope.userScore,
          machine: $scope.machineScore,
          perfect: false,
      });

      // Trophies defined by CONFIG constants
      if ($scope.trophiesUser.length < CONFIG.maxTrophies
        && $scope.trophiesMachine.length < CONFIG.maxTrophies
        || CONFIG.maxTrophies == 0){

        if (user){
          $scope.message = 'User win';

          // When player get a perfect game wins a trophy
          if ($scope.userScore == CONFIG.Plays && $scope.machineScore == 0 && CONFIG.maxTrophies >= 1){
              game.perfect = true;
              $scope.trophiesUser.push(game); // TODO show score as tooltip above of icon
          }

          modal('User', 'Good Luck!', 'You win', 'success', game.perfect);
        } else {
          $scope.message = 'User Lose';

          if ($scope.machineScore == CONFIG.Plays && $scope.userScore == 0 && CONFIG.maxTrophies >= 1){
              game.perfect = true;
              $scope.trophiesMachine.push(game);
          }

          modal('Machine', 'Bad Luck!', 'Sorry Machine wins', 'error', game.perfect);
        }
        // Save the game
        $scope.historical.push(game);

        // New game starts
        newGame();

      } else {
        // Game finished - After CONFIG trophies you can try just one game more.
        $scope.gameStop = true;
        $scope.message = 'Game finished'
      }
    }
  }

  function modal(player, title, description, type, perfect){

    if (perfect){
      swal({
        html: true,
        title: "Perfect",
        text: "<h3>" + player + " wins a trophy</h3>'" +
              "</p><i class='fa fa-trophy' style='font-size: 45px; color: #d4df1f;'></i>"
      });
    } else {
        // Maintenable modal
        swal(title, description, type);
    }
  }

  $scope.init();
}]);
