// Definerer variabler
const categoriesURL = "https://kea-alt-del.dk/t7/api/categories";
let categoryTemplate;
let categories;
let categoryClone;

// Fetcher dataen fra URL'en
fetch(categoriesURL)
.then((response) => response.json())
.then(showCategories);

function showCategories(categories) {
    console.log("Categories", categories);

    // Looper og kalder funktionen showCategory
    categories.forEach(showCategory);
}

function showCategory(category) {
    console.log(category);

    // Fang element 
    categoryTemplate = document.querySelector(".categoryTemplate").content;

    // Lav en kopi
    categoryClone = categoryTemplate.cloneNode(true);

    // Ændre indhold


    // Appende
    categories = document.querySelector(".categories");
    categories.appendChild(productClone);
}