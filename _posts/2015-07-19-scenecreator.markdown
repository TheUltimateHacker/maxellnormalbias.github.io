---
layout: post
category: software
title: Make scenes with video game sprites!
---

<script src="/files/scene-creator/sc.min.js"></script>

Hello, I'm maxell. I'm not dead. Well...if you're on the IRC you'd know I'm not dead, but I'm not necessarily alive either. This is a scene creator, which has been done time and time again on sites like Newgrounds and even Scratch. Well, this is the last time. This scene creator allows you to import your own sprites, so you can make scenes of your favourite game or even your own original characters. [This is the JSON for a Mario sprite set that I made.](/files/scene-creator/imagesets/mario1.json) Select it all by pressing Ctrl+A (or Command+A if you're using Mac), and then copy it, and paste it into the text area.

Just beware...some things might not work on old browsers, Safari, or IE. If you're not using the latest version of [Firefox](https://www.mozilla.org/en-GB/firefox/new/) or [Chromium](https://download-chromium.appspot.com/)/[Chrome](http://www.google.com/chrome/) update now.

<style>
  .draggy {
    box-sizing: border-box;
  }

  .box {
    font-family: sans-serif;
    font-size: 10pt;
  	margin-top: 5px;
  	margin-bottom: 5px;
    background-color: #CDF;
    border-width: thin;
    border-color: #369;
    border-style: solid;
  }

  .sprite {
    position: absolute;
  }

  .background {
    position: relative;
  }

  .bubble {
    font-family: sans-serif;
    font-size: 10pt;
    padding: 2px;
    box-sizing: border-box;
    position: absolute;
    border: 1px solid black;
    background-color: white;
  }
</style>

<div id="view"></div>

Thanks to Babel, browserify, and to Facebook for making React, the library I used. Also thanks to Matt Zabriskie for making react-draggable, the library I used to get things to drag. And, a **huge** thanks to phillips1012 (AKA Lord &#124;) who helped me a lot and kinda taught me React.

If you want to see the original JSX file, [here it is.](/files/scene-creator/sc.jsx) If you notice any bugs, [email me.](mailto:0087yugbocaj@gmail.com)
