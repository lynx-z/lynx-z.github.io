<template>
  <div >
    <br><br>
    <h1>Week 3 (2023/6/12 - 2023/6/18)</h1><br>


    <!--  -->
    <br>
    <h2> Development Records</h2>
    <br>
    <ul>

      Color Blind game:
      <li>Set  a black screen to simulate the prover is blindfolded</li>
      <li>Randomly show balls are switched or not</li>
      <li>If the prover's answer is correct, increase the confidence, else confidence is 0%</li>

      <br>Where is wally:
      <li>Game scene build</li>
      <li>Add a transparent auto hole in the board (actually on the picture, when board enter, show it; Use sprite mask)</li>
      <li>Add three options to change the scale of the board</li>
      <li>Use the collider (Collider2D) to check if an object is inside another object</li>
      <li>When prover click show, upadte the verifier text.</li>

      <br>Server Deploy
      <li> <a href="https://learn.unity.com/tutorial/creating-and-publishing-webgl-builds#62a05565edbc2a1471677a82" target="_blank" rel="noopener">How to deploy games on Unity Play based on WebGL</a></li>
      <li> Deploying test: <a href="https://play.unity.com/mg/other/webgl-builds-353720" target="_blank" rel="noopener">ZKP Game Server Test</a></li>



    </ul>


    <!--  -->
    <br>
    <h2> To Do </h2>
    <br>
    <ul>


      <li>Create a main menu</li>
      <li>Test server</li>
      <li>Review ethic form</li>

      Color Blind game
      <li>When black screen, set unclickable</li>

      Where is Wally
      <li>when change small to larger, the board may outside the box</li>
、



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
    <h2> Color Blind game, Where is Wally UI draft</h2>
    <br>

    <img :src="imageUrl" alt="Image" width="500">

    <div class = "video">
        <video-player
          src="https://github-production-user-asset-6210df.s3.amazonaws.com/85024355/246380918-c48fb89c-a28c-40c1-9c87-a05ad0d2fe82.mp4"
          :width = 500
          :muted = "true"
          :autoplay = "true"
          :loop="true"
        />
    </div>

    <br>
    <div class = "video">
        <video-player
          src="https://github-production-user-asset-6210df.s3.amazonaws.com/85024355/246380942-68909d18-28e0-4812-95ca-44b2d1c3fab0.mp4"
          :width = 500
          :muted = "true"
          :autoplay = "true"
          :loop="true"
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
      imageUrl: 'https://raw.githubusercontent.com/lynx-z/lynx-z.github.io/main/src/assets/pictures/wally_design.jpg' // Replace with the URL of your image
    };
  }
}
</script>