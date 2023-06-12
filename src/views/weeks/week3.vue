<template>
  <div >
    <br><br>
    <h1>Week 1 (2023/6/12 - 2023/6/18)</h1><br>


    <!--  -->
    <br>
    <h2> Development Records</h2>
    <br>
    <ul>

      3-colorable Map:
      <li> </li>
      <li> </li>
      <li></li>



    </ul>


    <!--  -->
    <br>
    <h2> To Do </h2>
    <br>
    <ul>
      Color Blind game
      <li>When black screen, set unclickable</li>


    </ul> 


    <!--  -->
    <br>
    <h2> Thoughts & Ideas</h2>

    <br>
    color-blind map design:
    <ul>
      <li>Prover is blindfolded when verfier is operating</li>
    </ul>


    Where is wally design:
    <ul>
      <li>A big box, which restrict the picture and the board position</li>
      <li>Prover can move the picture; move or resize the board(free or fixed?)</li>
      <li>Auto create a hole? Grid position?</li>
    </ul>

    
    <!--  -->
    <br>
    <h2> 3-color Map Game UI draft</h2>
    <br>

    <img :src="imageUrl" alt="Image" width="500">

    <!-- <div class = "video">
        <video-player
          src="https://github-production-user-asset-6210df.s3.amazonaws.com/85024355/245098526-5e1b84e0-03dc-4017-9167-b4e706dfb492.mp4"
          :width = 500
          :muted = "true"
          :autoplay = "true"
          :loop="true"
        />
    </div> -->



    





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
      imageUrl: 'https://raw.githubusercontent.com/lynx-z/lynx-z.github.io/main/src/assets/pictures/wally_design.jpg' // Replace with the URL of your image
    };
  }
}
</script>