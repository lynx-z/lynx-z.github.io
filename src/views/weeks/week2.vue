<template>
  <div >
    <br><br>
    <h1>Week 1 (2023/6/5 - 2023/6/11)</h1><br>


    <!--  -->
    <br>
    <h2> Development Records</h2>
    <br>
    <ul>
      Card Game:
      <li>Add option: Prover can show the card directly.</li>
      <li>Set cards not clickable when the animation is running.</li>
      <li>Fix: card keep jittering when mouse in some specfic position (when in down card but not in up card, it will casuse animation loop)</li>

      3-colorable Map:
      <li>script: drag color and fill</li>
      <li>fix: ignore collisions on the same layer, Edit->Project Settings-> Physics and set up the proper layer collisions.</li>



    </ul>


    <!--  -->
    <br>
    <h2> To Do </h2>
    <br>
    <ul>
      <li> dissertation template</li>
      <li> ethic application : https://web.inf.ed.ac.uk/infweb/research/ethics-and-integrity/ethics-procedure</li>

    </ul> 


    <!--  -->
    <br>
    <h2> Thoughts & Ideas</h2>
    3-colorable map design:
    <ul> 
      <li>Prover first color the map, with several combinations.</li>
      <li>Verifier keeps reveal the neighborhood color, if different color, add the confidence.</li>
      <li>If the confidence over a threshold, </li>

    </ul>

    
    <!--  -->
    <br>
    <h2> 3-color Map Game UI draft</h2>
    <br>
    <img :src="imageUrl" alt="Image" width="500">



    





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