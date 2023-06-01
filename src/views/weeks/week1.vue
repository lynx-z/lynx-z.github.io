<template>
    <div >
      <br><br>
      <h1>Week 1 (2023/5/29 - 2023/6/4)</h1><br>

      <!--  -->
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
      <h2> UI draft</h2>
      <br>
      <img :src="imageUrl" alt="Image" width="500">






    </div>
  </template>
  
  <style>

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