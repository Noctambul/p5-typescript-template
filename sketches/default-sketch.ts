import p5 from "p5";

export default function defaultSketch() {
  return new p5((s: p5) => {
    s.setup = function setup() {
      s.createCanvas(800, 800);
    };

    s.draw = function () {
      s.fill(0, 255, 0);
      s.circle(s.width / 2, s.height / 2, 50);
    };

    s.keyPressed = function () {
      if (s.keyCode == s.ENTER) {
        s.save("screenshot.png");
      }
    };
  });
}
