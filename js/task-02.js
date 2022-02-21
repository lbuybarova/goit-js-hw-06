const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


onst ingredientsEl = document.querySelector("#ingredients");

const makeItem = (ingredient) => {
  return ingredient.map((element) => {
    const itemEl = document.createElement("li");
    itemEl.textContent = element;
    itemEl.classList.add("item");

    return itemEl;
  });
};

const ingredient = makeItem(ingredients);
ingredientsEl.append(...ingredient);


// const ulList=document.getElementById("ingredients");

// ingredients.forEach((element)=>{

//   const elementLi = document.createElement("li");

//   elementLi.classList.add("item");

//   elementLi.textContent = element;

//   ulList.append(elementLi);

// });