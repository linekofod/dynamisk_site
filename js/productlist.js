// Definerer variabler
const productsURL = "https://kea-alt-del.dk/t7/api/products?limit=20&start=3";
let productTemplate;
let productList;
let productClone;

// Fetcher dataen fra url'en
fetch(productsURL)
.then((response) => response.json())
.then(showProducts);

function showProducts(products) {
  // Looper og kalder funktionen showProduct
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
  productClone.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  // Man går til den rigtige produktoversigt, når man klikker på et produkt på produktlisten.
  productClone.querySelector("a").href = `product.html?id=${product.id}`

  // Produktet er udsolgt
  if (product.soldout) {
    // Tilføjer klassen soldOut og fjerner klassen hide, så man kan se soldOut stylingen.
    productClone.querySelector(".soldOut").classList.add("lowOpacity");
    productClone.querySelector(".soldoutBadge").classList.remove("hide");
  }

  // Produktet er på udsalg
  if (product.discount) {
    // Fjerner klassen hide til de nye priser, og tilføjer klassen hide fra den gamele pris, så man kun kan se stylingen af prisændringerne.
    productClone.querySelector(".newPrice").classList.remove("hide");
    productClone.querySelector(".originalPrice").classList.remove("hide");
    productClone.querySelector(".productlistPrice").classList.add("hide");

    // Ændrer indholdet af priserne så det er dynamisk. Og på den nye pris, trækker jeg rabatprocenten fra.
    productClone.querySelector(".newPrice").textContent = `${(product.price - product.discount / 100 * product.price).toFixed(0)} DKK`;
    productClone.querySelector(".originalPrice").textContent = `${product.price} DKK`;

    // Fjerne klassen hide, så man nu kan se procent on sale mærket. 
    productClone.querySelector(".saleBadge").classList.remove("hide");
    // Ændrer indholdet 
    productClone.querySelector(".saleBadge").textContent = `- ${product.discount} %`;
  }

  // Appende
  productList = document.querySelector(".productList");
  productList.appendChild(productClone);
}



