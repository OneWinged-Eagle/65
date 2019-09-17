<script>
  import { randomInt } from "../utils/random.ts";

  const names = ["bird", "cat", "dog", "fox", "koala", "panda", "red_panda"];
  const animals = [];

  function getRandom() {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://some-random-api.ml/img/${
        names[randomInt(names.length)]
      }`
    )
      .then(response => {
        return response.json();
      })
      .then(json => {
        animals[animals.length] = json.link;
      })
      .catch(error => {
        console.error(error);
      });
  }

  getRandom();
</script>

<svelte:head>
  <title>Randanimals</title>
</svelte:head>

<section>
  <button on:click={getRandom}>MOAR CUTIES!</button>

  {#each animals as animal, i (animal)}
    <img src={animal} alt={animal} />
  {:else}
    <p>Where are the cute animals? :'(</p>
  {/each}
</section>
