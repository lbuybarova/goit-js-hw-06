function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const size = {
  INITIAL: 30,
  STEP: 10,
};

function createBoxes(amount) {
  if (!amount) return;

  const boxes = [];
  let prevBoxSize = getLastBoxSize();
  for (let i = 0; i < amount; i += 1) {
    prevBoxSize += prevBoxSize === 0 ? size.INITIAL : size.STEP;
    const box = createBox(prevBoxSize);
    boxes.push(box);
  }

  renderBoxes(boxes);
}

function getLastBoxSize() {
  return parseInt(refs.boxes.lastElementChild?.style.width) || 0;
}