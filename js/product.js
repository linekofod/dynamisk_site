// Definerer variabler, der giver mig data på de forskellige produkter.
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const productsURL = `https://kea-alt-del.dk/t7/api/products/${id}`;

// Fetcher dataen fra url'en
fetch(productsURL)
.then((response) => response.json())
.then(showProduct);

function showProduct(product) {
  console.log(product);

  // Ændre indhold
  document.querySelector(".productBrand").textContent = product.brandname;
  document.querySelector(".productName").textContent = product.productdisplayname;
  document.querySelector(".productPrice").textContent = `${product.price} DKK`;
  document.querySelector(".productColor p:nth-child(2)").textContent = product.basecolour;
  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  document.querySelector(".colorImg img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  // Ændre indhold i breadcrumbs
  document.querySelector(".breadcrumbs li:nth-child(3)").textContent = product.brandname;

}