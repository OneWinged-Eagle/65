<script>
  import ColoursNoises from "../../components/p5/noises/ColoursNoises.svelte";
  import RadialNoises from "../../components/p5/noises/RadialNoises.svelte";
</script>

<svelte:head>
  <title>Noises</title>
</svelte:head>

<section class="lg:flex">
  <div class="flex-initial mx-auto">
    <ColoursNoises />
  </div>

  <div class="flex-initial mx-auto">
    <RadialNoises />
  </div>
</section>
