import p5 from "p5";

const sketch = (p: p5) => {
  let x = 540;
  let y = 540;
  let vx = 5;
  let vy = 7;

  p.setup = () => {
    p.pixelDensity(1);
    p.createCanvas(1080, 1080);
  };

  p.draw = () => {
    p.background(220);

    x += vx;
    y += vy;

    if (x < 50 || x > p.width - 50) vx *= -1;
    if (y < 50 || y > p.height - 50) vy *= -1;

    p.fill(100, 200, 150);
    p.noStroke();
    p.circle(x, y, 100);
  };
};

new p5(sketch, document.getElementById("sketch-container") as HTMLElement);
