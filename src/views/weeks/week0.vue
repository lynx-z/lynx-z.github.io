<template>
    <div class="about">
      <br><br>
      <h1>Works Before June 2023</h1><br>

      <h2>ZKP Games Compare</h2>

      <!-- table -->
      <div>
        <br>
        <table>
          <thead>
            <tr>
              <th v-for="column in columns" :key="column">{{ column }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in rows" :key="row.id">
              <td v-for="i in columns.length" :key="i">{{ row[i-1] }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Design -->
      <div>
        <br>
        <h2>Card Game Design</h2>
        Simple:
        <ul>
          <li>Prover has two options, show the card or show the rest color card</li>
          <li>Verifier: believe or question</li>
        </ul>


        <br>Challenge:<br>
        Prover : 
        <ul>
          <li>Select one card and one statement</li>
          <ul>
            <li>Can be Bluffing (for example, pick a black card but say it is red)</li>
            <li>Get bonus points if bluffing is successful</li>
          </ul>
          <li>Select one card and one statement</li>
          <li>Select one card and one statement</li>
          <li>Select which cards to show, not just two options</li>
          <li>The computer(verifier) chooses to believe or question (The more information the prover presents, the higher the probability that the computer will choose to believe it. The final score is determined by the number of pieces of information presented by the prover)</li>

        </ul>

        Verifier:
        <ul>
          <li>The computer(prover) will select one card and show one statement</li>
          <li>Believe or question. </li>
        </ul>
      </div>


      <!-- Prototype -->

      <br>
      <h2>Prototype Design</h2>
      <br>

      <div class = "video">
        <video-player
          src="https://user-images.githubusercontent.com/85024355/242028446-e7a45d56-bfa7-4eec-8433-e69020dcf7f8.mp4"
          :width = 500
          :muted = "true"
          :autoplay = "true"
        />
      </div>




    

      <br><br>
    </div>
  </template>
  

<script>
export default {
  name: 'Week0',
  data() {
    return {
      columns: ['Name', 'Commitments', 'Prover actions', 'Verifier actions', 'Variant games', 'note'],
      rows: [
        [ "Card game", "The cards are complete and not cheating", "Select which card(s) to reveal", "Question or believe", " ", " "],
        [ "Combination lock game", "The Combination lock box", "Unlock the box. Tell the secret message", "Write the secret message, and then verify it", "", "Might be no choices for player?"],
        ["Find puffin game", "? (maybe the painting not be changed)", "Choose different size of opaque divider", "See if there is a puffin in the hole", "Where is Waldo, Where is Wally", ""],
        ["Color blind people game", "? ( maybe the apples, they are not changed)", "Point out if verifier switch apples or not", "Switch the apples or not.", "The Ali Baba cave game.(prover gets a 50% chance of right each time, and close to 100% accuracy after multiple repetitions)", "Require repeating several times"],
        ["Color map game", "Envelops, so when verifier revealing, no color in envelops can be changed", "Color the map with different color combinations.", "Reveal two neighbor envelops, check if they are different color", "Sudoku game, a prover uses colors to hide numbers. Each time a verifier reveals a row, a column, or a 3*3 section.", "Require repeating several times"],
        ["Candy game","he locked box", "Write “+” or “-”, put them in the locked box", "Reveal one box, and show it to the prover. ", "Yao's Millionaires' problem", "Prover and verifier can be switched"],
      ],
    };
  },
}
</script>

<style>
  table {
    width: 100%;
    border-collapse: collapse;
  }

  th, td {
    /* width: 90px; */
    padding: 8px;
    border: 1px solid #979797;
  }

  th {
    color: white;
  }

  h1,h2, h3 {
    color:white;
  }

  .video{
    width: 10%;
  }



</style>