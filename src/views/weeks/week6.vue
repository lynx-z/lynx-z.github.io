<template>
  <div >
    <br><br>
    <h1>Week 6 (2023/7/3 - 2023/7/9)</h1><br>


    <!--  -->
    <br>
    <h2> Development Records</h2>
    <br>
      Dissertation draft writing

    <ul>
      <ul> Introduction
        <li> Project Overview  </li>
        <li> Motivation</li>
        <li> Document Stru</li>
      </ul>

      <ul>Background and Related Works
        <li> Cryptography and ZKPs </li>
        <li> ZKPs Visualisation </li>
        <li> Cryptography Games and Education</li>

      </ul>
      <li> Background and Related Works</li>
      <li> Project Description </li>



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
    <ul> 
      
    </ul>

    <br>
    <ul>
      <li></li>
    </ul>

    
    <!--  -->
    <br>
    <h2> Game UI draft</h2>
    <br>

    <!-- <img :src="imageUrl" alt="Image" width="500"> -->

    <div class = "video">
        <video-player
          src="https://github-production-user-asset-6210df.s3.amazonaws.com/85024355/245098526-5e1b84e0-03dc-4017-9167-b4e706dfb492.mp4"
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