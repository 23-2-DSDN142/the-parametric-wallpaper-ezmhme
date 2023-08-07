//your parameter variables go here!
let circledia = 75; //75 //circle size
let petalwidth = 25; //25 //width of petal
let strokeW = 2; //2 //strokeWeight
let petallength = 70; //70 //length of petal
let squaresize = 130; //130 //size of centre white square
let squarecentre = 35; //35 //placement of square //when squaresize+10, squarecentre-5

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_LANDSCAPE);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  let cc = color(153,199,255); //(255,254,219) //cream
  background(cc);
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  let c = color(255); //light blue colour
  let cc = color(153,199,255); //(255,254,219) //cream
  if(petallength < 70){
    fill(c);
    noStroke();
    square(28,28,20);
    square(28,152,20);
    square(152,28,20);
    square(152,152,20); //corner blue squares drawn in when statement is true
  }
  
  fill(c);
  noStroke();
  circle(40,100,circledia); //left centre circle
  circle(160,100,circledia); //right centre circle
  circle(100,40,circledia); //top centre circle
  circle(100,160,circledia); //bottom centre circle

  fill(c);
  square(squarecentre,squarecentre,squaresize);

  fill(cc);
  beginShape();
  vertex(100,180);
  vertex(180,100);
  vertex(100,20);
  vertex(20,100);
  endShape(CLOSE); //centre white diamond

  noFill();
  strokeWeight(strokeW);
  stroke(c);
  beginShape();
  vertex(100,170);
  vertex(170,100);
  vertex(100,30);
  vertex(30,100);
  endShape(CLOSE); //centre blue outline diamond

  fill(c);
  noStroke();
  circle(100,100,circledia-25); //centre blue circle

  strokeWeight(strokeW);
  stroke(c);
  line(5,5,5,40);
  line(5,5,40,5); //top left corner

  line(160,5,195,5);
  line(195,5,195,40); //top right corner
  
  line(195,195,195,160);
  line(195,195,160,195); //bottom right corner
   
  line(5,195,5,160);
  line(5,195,40,195); //bottom left corner

  noFill();
  strokeWeight(strokeW);
  ellipse(100,75,petalwidth,petallength+5); //top petal
  noFill();
  ellipse(75,100,petallength,petalwidth); //left petal
  noFill();
  ellipse(125,100,petallength,petalwidth); //right petal
  noFill();
  ellipse(100,125,petalwidth,petallength+5); //bottom petal

  fill(c);
  noStroke();
  circle(25,25,30); //blue top left circle
  circle(175,25,30); //blue top right cirlce
  circle(25,175,30); //blue bottom left circle
  circle(175,175,30); //blue bottom right circle

  fill(cc);
  noStroke();
  circle(35,35,20); //white top left circle
  circle(165,35,20); //white top right circle
  circle(165,165,20); //white bottom right circle
  circle(35,165,20); //white bottom left circle
}