# How to use the parametric wallpaper code 
This document contains everything you need to work with the wallpaper framework. All of the functions mentioned here can be found in [my_wallpaper.js]

 In the setup_wallpaper function you will find a few functions that can take various parameters this file lists the options for each.

## pWallpaper.output_mode(....);
the .... can be replaced with:

   1. DEVELOP_GLYPH
      develop glyph is for prototyping your glyph by its self. it only shows one copy
      and the bounding box of the tile. everything is scaled up so you can see it easier.

    2. GRID_WALLPAPER
      this does a basic grid. the grid_settings will affect how big the tiles are
      and the offset of every second row.

   3. GLIDE_WALLPAPER
      glide_wallpaper does a glide reflection grid. every second column is mirrored
      and offset by the grid_settings offset.


## pWallpaper.resolution(....);
the .... can be replaced with:

   1. FIT_TO_SCREEN
      this will make the image the same size as the window you're viewing it in.
      this is useful for when you're just testing.

   2. NINE_LANDSCAPE
      this will make the image the correct size for your hand-in of the 9 images
      but in landscape (2000 x 1000)

   3. NINE_PORTRAIT
      this will make the image the correct size for your hand-in of the 9 images
      but in portrait (1000 x 2000)

   4. A4
      this will make an A4 300 dpi image. you'll notice everything is scaled up
      a lot. This is so everything isn't tiny when you print it. The scale factor
      is based on going from 72dpi(screens) to 300dpi(high quality print).

   5. A3
      this will make an A3 300 dpi image. you'll notice everything is scaled up
      a lot. This is so everything isn't tiny when you print it. The scale factor
      is based on going from 72dpi(screens) to 300dpi(high quality print).
      This will be the one to use for your FINAL chosen hand-in.


## pWallpaper.show_guide(....);
the .... can be replaced with either:

   1. true
      if true, this will show you the grid guides. This will help you as you
      prototype your wallpaper. DO NOT LEAVE THIS ON FOR SUBMISSION.

   2. false
      if false the guides are turned off. **Make sure to set your show_guide setting to false when you are preparing your submission images.**

When entering true of false values into pWallpaper.show_guide(....); make sure that they are lowercase, so no capital T or F. 
