<template>
  <div >
    <br><br>
    <h1>Week 5 (2023/6/26 - 2023/7/2)</h1><br>


    <!--  -->
    <br>
    <h2> Development Records</h2>
  
    <br>3 - colorable map
    <li> Add leakage (use Square difference, check how euqal the prover select the map)</li>

    <br>color blind
    <li> Add table texture, button texture, avader texture, dialog texture。</li>
    
    <br>Where is wally
    <li> Add function: prover should find the puffin position first, and then save it</li>
    <li> If the position ist incorrect, the verifier cannot find the puffin.</li>



    <ul>



    </ul>


    <!--  -->
    <br>
    <h2> To Do </h2>
    <br>
    <ul>
      <li>start writing dissertation </li>

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
    <h2> Game </h2>
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