import p5 from "p5";

const sketch = (p: p5) => {
  p.setup = () => {
    p.pixelDensity(1);
    p.createCanvas(1080, 1080);
  };

  p.draw = () => {
    p.background(220);
  };
};

new p5(sketch, document.getElementById("sketch-container") as HTMLElement);
