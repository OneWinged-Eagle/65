<script>
  import P5 from "../P5.svelte";

  let num = 2000,
    range = 6;
  const ax = [],
    ay = [];

  function setup(sketch) {
    sketch.createCanvas(710, 400);
    for (let i = 0; i < num; i++) {
      ax[i] = sketch.width / 2;
      ay[i] = sketch.height / 2;
    }
    sketch.frameRate(24);
  }

  function draw(sketch) {
    sketch.background(51);

    // Shift all elements 1 place to the left
    for (let i = 1; i < num; i++) {
      ax[i - 1] = ax[i];
      ay[i - 1] = ay[i];
    }

    // Put a new value at the end of the array
    ax[num - 1] += sketch.random(-range, range);
    ay[num - 1] += sketch.random(-range, range);

    // Constrain all points to the screen
    ax[num - 1] = sketch.constrain(ax[num - 1], 0, sketch.width);
    ay[num - 1] = sketch.constrain(ay[num - 1], 0, sketch.height);

    // Draw a line connecting the points
    for (let j = 1; j < num; j++) {
      let val = (j / num) * 204.0 + 51;
      sketch.stroke(val);
      sketch.line(ax[j - 1], ay[j - 1], ax[j], ay[j]);
    }
  }
</script>

<P5 {setup} {draw} />
