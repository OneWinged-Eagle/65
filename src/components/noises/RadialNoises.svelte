<script>
  import P5 from "../P5.svelte";

  let refreshRate = 550;
  let noiseMultX = 55;
  let noiseMultY = 55;
  let noiseMultZ = 55;

  function setup(sketch) {
    sketch.createCanvas(400, 400);
    sketch.background(255);
    sketch.stroke(0, 15);
    sketch.noFill();
    sketch.frameRate(24);
  }

  function draw(sketch) {
    const now = new Date().getTime();
    let t = 0;

    sketch.translate(sketch.width / 2, sketch.height / 2);
    sketch.beginShape();
    for (let i = 0; i < 200; i++) {
      const ang = sketch.map(i, 0, 200, 0, sketch.TWO_PI);
      const rad =
        200 *
        sketch.noise(
          (noiseMultX * i) / 1000,
          (noiseMultY * t) / 10000,
          (noiseMultZ * now) / 100000
        );
      const x = rad * sketch.cos(ang);
      const y = rad * sketch.sin(ang);
      sketch.curveVertex(x, y);
    }
    sketch.endShape(sketch.CLOSE);

    t += 1;

    if (sketch.frameCount % refreshRate === 0) {
      sketch.background(255);
    }
  }
</script>

<P5 id="RadialNoises" {setup} {draw} />
