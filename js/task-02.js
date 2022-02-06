const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulList=document.getElementById("ingredients");

ingredients.forEach((element)=>{

  const elementLi = document.createElement("li");

  elementLi.classList.add("item");

  elementLi.textContent = element;

  ulList.append(elementLi);

});