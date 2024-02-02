window.addEventListener("DOMContentLoaded", init);

const productsURL = "https://kea-alt-del.dk/t7/api/products";

let productTemplate;
let productList;

function init() {
  console.log("init");

  productTemplate = document.querySelector(".productTemplate");
  console.log("productTemplate", productTemplate);

  productList = document.querySelector(".productList");
  console.log("productList", productList);

  fetch(productsURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      showProducts(json);
    });
}

function showProducts(productJSON) {
    let productClone;
  
    productJSON.forEach((product) => {
      console.log("Product", product);
      productClone = productTemplate.cloneNode(true).content;
      productClone.querySelector(".productlistName").textContent = product.productdisplayname;
    //   beerClone.querySelector(".beer_image").src = beer.image_url;
    //   beerClone.querySelector(".beer_image").alt = `Picture of a ${beer.name} beer`;
    //   beerClone.querySelector(".beer_tagline").textContent = beer.tagline;
    //   beerClone.querySelector(".beer_description").textContent = beer.description;
      productList.appendChild(productClone);
    });
  }