// Enemies our player must avoid
class Enemy {
  constructor(x, y, speed){
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

  }
  // Update the enemy's position, required method for game
  // Parameter: dt, a time delta between ticks

  update(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    //requestAnimationFrame????? to keep it close to the 60 sec speed?
  }
  // Draw the enemy on the screen, required method for game
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
};

//Old JS code
//Enemy.prototype.update = function(dt) {};
/*Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};*/

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-horn-girl.png';
  }

  update(dt) {}

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}

// Now instantiate your objects.
const enemyOne = new Enemy(0, 62, 50);
const enemyTwo = new Enemy(0, 145, 50);
const enemyThree = new Enemy(-100, 228, 50);
const player = new Player(203, 405);

// Place all enemy objects in an array called allEnemies
let allEnemies = [
  enemyOne,
  enemyTwo,
  enemyThree
];
// Place the player object in a variable called player
const thePlayer = {};


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
