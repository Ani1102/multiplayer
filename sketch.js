var hypnoticBall, database;
var position;
var canvas;
var gamestate=0;
var database;
var playerCount;
var form, game, player;


function setup(){
  canvas = createCanvas
  database = firebase.database();
  console.log(database);

   game = new Game();
   game.getstate();
  game.start();


}

function draw(){

  
}
