function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnEl = document.querySelector(".change-color");
const text = document.querySelector(".color");
const body = document.body

btnEl.addEventListener("click", changeColor);

function changeColor (){
  let color = getRandomHexColor()
body.style.backgroundColor = color;
text.textContent = color
}
