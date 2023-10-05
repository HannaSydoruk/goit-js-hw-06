const arrayOfCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${arrayOfCategories.length}`);

arrayOfCategories.forEach((element) => {
    console.log(`Category: ${element.firstElementChild.textContent}`)
    console.log(`Elements: ${element.lastElementChild.children.length}`);
});
