import p5 from "p5";

const sketch = (p: p5) => {
  p.setup = () => {
    p.pixelDensity(1);
    p.createCanvas(1080, 1080);
    p.background(220);
  };

  p.draw = () => {
    if (p.mouseIsPressed) {
      p.stroke(50);
      p.strokeWeight(4);
      p.line(p.pmouseX, p.pmouseY, p.mouseX, p.mouseY);
    }
  };
};

new p5(sketch, document.getElementById("sketch-container") as HTMLElement);
