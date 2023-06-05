<template>
    <div >
      <br><br>
      <h1>Week 1 (2023/5/29 - 2023/6/4)</h1><br>


      <!--  -->
      <br>
      <h2> Development Records</h2>
      <br>
      <ul>
        <li>Fix pixel image blur error: </li>
          <ul>
            <li>Aseprite with Unity: first change to sprite mode; set pixels per unit as 32 (same as pixel camera) </li>
            <li>Fixed: set SpriteAtlas compression as none (If use SpriteAtlas, the image will be blur, dont know why) </li>
          </ul>

        <li>Add cards movement animation</li>
        <li>Refector the structure</li>

      </ul>


      <!--  -->
      <br>
      <h2> To Do </h2>
      <br>
      <ul>
        <li>Set unclickable when cards are moving </li>
        <li>Add guide screen (start screen, select screen)</li>
        <li>Set card not unobstructed when showing the card</li>
        <li>Set selected card also clickable (player can show the card directly)</li>



      </ul> 


      <!--  -->
      <br>
      <h2> Thoughts & Ideas</h2>

      <br>Art Style
      <ul>
        <li>2D game</li>
        <li>Pixel? hard to draw, but easy to uniform. Pixel Tool: Aseprite</li>
        <li>Other art style: may be use AI generated element</li>
      </ul>

      <br>Game Mode
      <ul>
        <li>Sepreate Game, select which one to play</li>
        <li>Story Mode, may be set a simple story to connect all story</li>
      </ul>

      
      <!--  -->
      <br>
      <h2> Card Game UI draft</h2>
      <br>
      <img :src="imageUrl" alt="Image" width="500">

      <div class = "video">
        <video-player
          src="https://user-images.githubusercontent.com/85024355/243330281-ae4538a0-e328-438e-8ead-b17f05e0f5ff.mp4"
          :width = 500
          :muted = "true"
          :autoplay = "true"
        />
      </div>








    </div>
  </template>
  
  <style>
  h1,h2, h3 {
    color:white;
  }

  </style>


<script>
export default {
  name: 'App',
  data() {
    return {
      imageUrl: 'https://raw.githubusercontent.com/lynx-z/lynx-z.github.io/main/src/assets/pictures/card_design.jpg' // Replace with the URL of your image
    };
  }
}
</script>