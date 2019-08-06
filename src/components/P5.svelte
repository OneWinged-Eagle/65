<script>
  import { onMount } from "svelte";

  export let setup, draw;
  let sketchHolder;

  onMount(async () => {
    const { default: p5 } = await import("p5/lib/p5.min");

    new p5(sketch => {
      sketch.setup = (...args) => {
        setup(sketch, ...args);
      };

      sketch.draw = (...args) => {
        draw(sketch, ...args);
      };
    }, sketchHolder);
  });
</script>

<style>
  div :global(canvas) {
    @apply w-full h-auto !important;
  }
</style>

<div bind:this={sketchHolder} />
