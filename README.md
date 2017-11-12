# Rock, paper and scissors

### Description
Rock, paper and scissors is the common game which allows you play with your browser. The purpose is to show you how to create a simple web game with AngularJS and some animations libraries.

#### How to start:
  1. When the app starts you can play instantly
  2. As user player click in your buttons
  3. The machine randomly will give you an answer

#### Game:
  1. By default, each player has eight lives.
  2. A play means eight lives
  3. You can earn trophies doing perfect plays
  4. When some player will get the maximum of trophies the game is finished
  5. After 4 trophies (by default) you could try to raise the match with one play more

### Installation

  * Download the project from GitHub

  - ##### Requirements
    - node ^8.0.0
    - npm ^5.0.0

  - ##### Open a terminal

  1. Client folder:
  ```sh
    npm install
  ```

  2. On your project:
  ```sh
    npm install
    $ npm start
  ```

### Configuration Game
  By default the game has eight lives and four trophies.

  You could configure these static params to create your custom game.

    1. Go to: app/constant/
    2. Edit the file: gameConfig.js
    3. Change 'Plays' and 'maxTrophies' constants as you want.

    Suggested games:

      1. Infinite: Plays = 0 and maxTrophies = 0.
      2. Earning trophies: Plays = 3 and maxTrophies = 10.

### Technologies
  - Node
  - Express
  - AngularJS
  - Bootstrap
  - Animated css
  - Font-Awesome
  - Sweet Alert
  - Hover css


### License

 [Apache](http://www.apache.org/licenses/LICENSE-2.0)
