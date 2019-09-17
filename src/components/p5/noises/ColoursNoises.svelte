<script>
  import P5 from "../P5.svelte";

  let nbSquare = 20,
    noiseMultX = 55,
    noiseMultY = 55,
    noiseMultZ = 55,
    mode = "HSB";

  function setup(sketch) {
    sketch.createCanvas(333, 333);
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

    for (let x = 0; x < sketch.width; x += sketch.width / nbSquare) {
      for (let y = 0; y < sketch.height; y += sketch.height / nbSquare) {
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
        sketch.rect(x, y, sketch.width / nbSquare, sketch.height / nbSquare);
      }
    }
  }
</script>

<P5 {setup} {draw} />
