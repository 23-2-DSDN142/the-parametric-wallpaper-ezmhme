//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;
let circlex = 100;
let circley = 100;
let circledia = 75;
let c = color(153, 199, 255);

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(255); //
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  let c = color(153, 199, 255);
  
  fill(c);
  noStroke();
  circle(circlex-60,circley,circledia);
  circle(circlex+60,circley,circledia);
  circle(circlex,circley-60,circledia)
  circle(circlex,circley+60,circledia);

  fill(255);
  beginShape();
  vertex(100, 180);
  vertex(180, 100);
  vertex(100, 20);
  vertex(20, 100);
  endShape(CLOSE);

  noFill();
  strokeWeight(2);
  stroke(c);
  beginShape();
  vertex(100, 170);
  vertex(170, 100);
  vertex(100, 30);
  vertex(30, 100);
  endShape(CLOSE);

  fill(c);
  circle(100,100,50);
}