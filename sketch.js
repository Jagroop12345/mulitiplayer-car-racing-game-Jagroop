var canvas;
var backgroundImage;
var bgImg;
var database;

//my objects
var myform, myplayer, mygame;

function preload() {
  backgroundImage = loadImage("./assets/background.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  //database = firebase.database();
  mygame = new Game()
  mygame.start()
  
}

function draw() {
  background(backgroundImage);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
