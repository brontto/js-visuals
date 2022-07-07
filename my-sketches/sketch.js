const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [600, 600]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);

    context.lineWidth = width * 0.005

    context.strokeStyle = 'white'

    const boxWidth = width * 0.1
    const boxHeight = height * 0.1
    const gap = width * 0.03
    const initialX = width * 0.17
    const initialY = height * 0.17
    const offSet = height * 0.02
    let x, y

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        x = initialX + (boxWidth + gap) * i
        y = initialY + (boxHeight + gap) * j

        context.beginPath()
        context.rect(x, y, boxWidth, boxHeight)
        context.stroke()

        if (Math.random() < 0.5) {
          context.beginPath()
          context.rect(x + offSet/2, y +offSet/2, boxWidth - offSet, boxHeight - offSet)
          context.stroke()
        }
      }
    }
  };
};

canvasSketch(sketch, settings);
