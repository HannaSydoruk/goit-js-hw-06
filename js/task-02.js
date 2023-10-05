const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const arrayOfItems = [];

ingredients.forEach((ingredient) => {
  const newItem = document.createElement('li');
  newItem.classList.add("item");
  newItem.textContent = ingredient;
  arrayOfItems.push(newItem);

})

ingredientsList.append(...arrayOfItems);
