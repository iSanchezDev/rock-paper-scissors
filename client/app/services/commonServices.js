
appTest.service('MathService', function( ){

  // Get randomly some number from 1 to 3
  var getRandomOneToThree = function(status){

    return Math.round(Math.random() * (2 - 0));
  }

  return {
    GetRandomOneToThree: getRandomOneToThree,
  }
});

appTest.service('CommonService', function( ){

  // By boolean we get the game's result
  var doesUserWinner = function(u, m){

    if (u == 'rock' && m == 'paper'){
      return false;
    } else if (u == 'rock' && m == 'scissors'){
      return true;
    } else if (u == 'paper' && m == 'scissors'){
      return false;
    } else if (u == 'paper' && m == 'rock'){
      return true;
    } else if (u == 'scissors' && m == 'rock'){
      return false;
    } else if (u == 'scissors' && m == 'paper'){
      return true;
    }
  }

  return {
    DoesUserWinner: doesUserWinner,
  }
});
