var btn_red;
var btn_green;
var btn_blue;
var btn_orange;
var btn_yellow;
var btn_purple;
var btn_pink;
var btn_cyan;


var r = 255;
var g = 0;
var b = 0;



function setup() {
  createCanvas(400, 400);  

  btn_red = createButton("RED");
  btn_red.position(100,50,);
  btn_red.mousePressed(red_bg);

  btn_green = createButton("GREEN");
  btn_green.position(250,50);
  btn_green.mousePressed(green_bg);

  btn_blue = createButton("BLUE");
  btn_blue.position(100,150);
  btn_blue.mousePressed(blue_bg);

  btn_orange = createButton("ORANGE");
  btn_orange.position(250,150);
  btn_orange.mousePressed(orange_bg);

  btn_yellow = createButton("YELLOW");
  btn_yellow.position(95,250);
  btn_yellow.mousePressed(yellow_bg);

  btn_purple = createButton("PURPLE");
  btn_purple.position(252,250);
  btn_purple.mousePressed(purple_bg);

  btn_pink = createButton("PINK");
  btn_pink.position(100,350);
  btn_pink.mousePressed(pink_bg);

  btn_cyan = createButton("CYAN");
  btn_cyan.position(252,350);
  btn_cyan.mousePressed(cyan_bg);

  


}

function red_bg()
{
  r = 255;
  g = 0;
  b = 0;
  
 
}

function green_bg()
{
  r = 0;
  g = 255;
  b = 0;
 
 
}

function blue_bg()
{
  r = 0;
  g = 0;
  b = 255;
 
  
}

function orange_bg()
{
  r = 255;
  g = 165;
  b = 0;
 
}

function yellow_bg()
{
  r = 255;
  g = 255;
  b = 0;

}

function purple_bg()
{
  r = 128
  g = 0;
  b = 128;
  
}

function pink_bg()
{
  r = 255
  g = 102
  b = 178
}

function cyan_bg()
{
  r = 0
  g = 255
  b = 255
}

function draw() {
  background(r,g,b);
}

