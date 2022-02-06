const bntDecrement = document.querySelector('button[data-action="decrement"]');
const bntIncrement = document.querySelector('button[data-action="increment"]');
const counterValue = document.querySelector("#value");

counterValue.textContent = 0;

bntDecrement.addEventListener("click", () => {
  counterValue.textContent = Number(counterValue.textContent) - 1;
});

bntIncrement.addEventListener("click", () => {
  counterValue.textContent = Number(counterValue.textContent) + 1;
});