import p5 from "p5";

const sketch = (p: p5) => {
  p.setup = () => {
    p.pixelDensity(1);
    p.createCanvas(1080, 1080);
  };

  p.draw = () => {
    p.background(220);
    p.fill(255, 100, 150);
    p.noStroke();
    p.rectMode(p.CENTER);
    p.rect(p.width / 2, p.height / 2, 400, 400);
  };
};

new p5(sketch, document.getElementById("sketch-container") as HTMLElement);
