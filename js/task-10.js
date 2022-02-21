const createBoxes = (amount) => {
  amount = input.value;

  const arr = [];
  arr.length = amount;

  arr.fill(amount).map((item, index) => {
    const baseSize = 30;
    const biggestSize = baseSize + index * 10;
    const box = document.createElement('div');
    box.setAttribute(
      'style',
      `width:${biggestSize}px ;height:${biggestSize}px; background-color:${getRandomHexColor()}`
    );

    boxes.append(box);
  });
};

const destroyBoxes = () => {
  input.value = '';
  boxes.innerHTML = '';
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

renderBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);