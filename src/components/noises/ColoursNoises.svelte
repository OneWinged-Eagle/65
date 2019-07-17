<script>
  import P5 from "../P5.svelte";

  let rectSize = 20;
  let noiseMultX = 55;
  let noiseMultY = 55;
  let noiseMultZ = 55;
  let mode = "HSB";

  function setup(sketch) {
    sketch.createCanvas(400, 400);
    sketch.noStroke();
    sketch.frameRate(24);
  }

  function draw(sketch) {
    sketch.colorMode(sketch.RGB);
    const violet = sketch.color(255, 0, 255);
    const turquoise = sketch.color(0, 255, 255);
    const now = new Date().getTime();

    if (mode === "HSB") {
      sketch.colorMode(sketch.HSB);
    }

    for (let x = 0; x < sketch.width; x += rectSize) {
      for (let y = 0; y < sketch.height; y += rectSize) {
        if (mode === "HSB") {
          sketch.fill(
            360 *
              sketch.noise(
                (noiseMultX * x) / 10000,
                (noiseMultY * y) / 10000,
                (noiseMultZ * now) / 100000
              ),
            100,
            100
          );
        } else if (mode === "lerp") {
          sketch.fill(
            sketch.lerpColor(
              violet,
              turquoise,
              sketch.noise(
                (noiseMultX * x) / 10000,
                (noiseMultY * y) / 10000,
                (noiseMultZ * now) / 100000
              )
            )
          );
        }
        sketch.rect(x, y, rectSize, rectSize);
      }
    }
  }
</script>

<P5 id="ColoursNoises" {setup} {draw} />
