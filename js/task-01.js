const categoriesEl = document.querySelectorAll(".item");

console.log("Number of categories:", categoriesEl.length);

categoriesEl.forEach((category) => {
  console.log("Category: ", category.firstElementChild.textContent);
  console.log("Element: ", category.lastElementChild.children.length);
});
