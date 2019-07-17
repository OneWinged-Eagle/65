<script>
  import { onMount } from "svelte";

  export let id, setup, draw;

  onMount(async () => {
    const { default: p5 } = await import("p5/lib/p5.min");

    new p5(sketch => {
      sketch.setup = (...args) => {
        setup(sketch, ...args);
      };

      sketch.draw = (...args) => {
        draw(sketch, ...args);
      };
    }, id);
  });
</script>

<figure {id} class="mx-auto" />
<!-- TODO: small screens -->
