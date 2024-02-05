const productsURL = "https://kea-alt-del.dk/t7/api/products";

// Definerer variabler
let productTemplate;
let productList;
let productClone;

// Fetcher dataen fra url'en
fetch(productsURL)
.then((response) => response.json())
.then(showProducts);

function showProducts(products) {
  // Looper og kalder funktion showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  // Fang element 
  productTemplate = document.querySelector(".productTemplate").content;

  // Lav en kopi
  productClone = productTemplate.cloneNode(true);

  // Ændre indhold
  productClone.querySelector(".productlistBrand").textContent = product.brandname;
  productClone.querySelector(".productlistName").textContent = product.productdisplayname;
  productClone.querySelector(".productlistPrice").textContent = `${product.price} DKK`;

  if (product.soldout) {
    // Produktet er udsolgt
    productClone.querySelector("article").classList.add("soldOut");
  }

  // Appende
  productList = document.querySelector(".productList");
  productList.appendChild(productClone);
}



{/* <article class="productCard" href="produkt.html">
    <img src="https://kea-alt-del.dk/t7/images/webp/640/1532.webp" alt="" />
    <p class="productlistBrand">Puma</p>
    <p class="productlistName">Grey Leaping Cat T-shirt</p>
    <p class="productPrice">899 DKK</p>
  </article> */}

// {
//   "id": 1533,
//   "gender": "Men",
//   "category": "Apparel",
//   "subcategory": "Topwear",
//   "articletype": "Tshirts",
//   "season": "Fall",
//   "productionyear": 2010,
//   "usagetype": "Casual",
//   "productdisplayname": "Cat Red T-shirt",
//   "price": 899,
//   "discount": null,
//   "brandname": "Puma",
//   "soldout": 0
// }