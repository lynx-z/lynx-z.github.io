<template>
    <div class="about">
      <br><br>
      <h1>Works Before June 2023</h1><br>

      <h2>ZKP Games compare</h2>

      <!-- table -->
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

      <br>
      <h2>ZKP Games compare</h2>

      
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
    width: 90px;
    padding: 8px;
    border: 1px solid #979797;
  }

  th {
    color: white;
  }

  h1,h2, h3 {
    color:white;
  }



</style>