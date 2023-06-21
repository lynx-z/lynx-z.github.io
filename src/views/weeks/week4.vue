<template>
  <div >
    <br><br>
    <h1>Week 4 (2023/6/19 - 2023/6/25)</h1><br>


    <!--  -->
    <br>
    <h2> Development Records</h2>
    <br>
    <ul>
      Card Game:
      <li>Add table texture, button texture, avader texture, dialog texture</li>
      <li>Add highlight behind the selected card</li>
      <li>Rewrite Prover text</li>
      <li>Add help screen</li>
      <li>Redesign the game interface</li>



    </ul>


    <!--  -->
    <br>
    <h2> To Do </h2>
    <br>
    <ul>

    </ul> 


    <!--  -->
    <br>
    <h2> Thoughts & Ideas</h2>
    Card game
    <ul> 
      <li> Pixel Avader:  https://8bitpix.com/</li>
      
    </ul>

    <br>
    <ul>
      <li></li>
    </ul>

    
    <!--  -->
    <br>
    <h2> Game Live Demo</h2>
    <br>

    <img :src="imageUrl" alt="Image" width="500">

    <div class = "video">
        <video-player
          src="https://github-production-user-asset-6210df.s3.amazonaws.com/85024355/247510813-c733df44-ac80-4a3c-b8b4-256e4045fb2f.mp4"
          :width = 500
          :muted = "true"
          :autoplay = "true"
          :loop="true"
        />
    </div>

    <br><br>



    





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
      imageUrl: 'https://raw.githubusercontent.com/lynx-z/lynx-z.github.io/main/src/assets/pictures/map_design.jpg' // Replace with the URL of your image
    };
  }
}
</script>