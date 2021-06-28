import p5 from "p5";

const myp5 = new p5((s: p5) => {
  s.setup = function setup() {
    s.createCanvas(600, 800);
    s.background("#FF6347");
  };

  s.draw = function () {
    s.background("#FF6347");
  };

  s.keyPressed = function () {
    if (s.keyCode == s.ENTER) {
      s.save("screenshot.png");
    }
  };

  function w(val: number): number {
    return val * s.width;
  }

  function h(val: number): number {
    return val * s.height;
  }
});
