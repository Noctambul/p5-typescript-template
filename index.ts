import p5 from "p5";

const myp5 = new p5((sketch: p5) => {
  sketch.setup = function setup() {
    sketch.createCanvas(600, 800);
    sketch.background("#FF6347");
  };

  sketch.draw = function () {
    sketch.background("#FF6347");
  };

  function w(val: number): number {
    return val ? val * sketch.width : sketch.width;
  }

  function h(val: number): number {
    return val ? val * sketch.height : sketch.height;
  }
});
