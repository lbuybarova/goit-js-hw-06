const fontController = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fontController.addEventListener("input", (event) => {
  text.style.fontSize = `${event.currentTarget.value}px`;
});
