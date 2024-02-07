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
  document.querySelector(".breadcrumbs li:nth-child(3) a").textContent = product.category;
  document.querySelector(".breadcrumbs li:nth-child(3) a").href = `productlist.html?category=${product.category}`
  document.querySelector(".breadcrumbs li:nth-child(4)").textContent = product.brandname;
  document.querySelector(".breadcrumbs li:nth-child(5)").textContent = product.productdisplayname;

  // Produktet er udsolgt
  if (product.soldout) {
    // Tilføjer klassen soldOut og fjerner klassen hide, så man kan se soldOut stylingen.
    document.querySelector(".soldOut").classList.add("lowOpacity");
    document.querySelector(".soldoutBadge2").classList.remove("hide");
  }

  // Produktet er på udsalg
  if (product.discount) {
    // Fjerner klassen hide til de nye priser, og tilføjer klassen hide fra den gamele pris, så man kun kan se stylingen af prisændringerne.
    document.querySelector(".newPrice2").classList.remove("hide");
    document.querySelector(".originalPrice2").classList.remove("hide");
    document.querySelector(".productPrice").classList.add("hide");

    // Ændrer indholdet af priserne så det er dynamisk. Og på den nye pris, trækker jeg rabatprocenten fra.
    document.querySelector(".newPrice2").textContent = `${(product.price - product.discount / 100 * product.price).toFixed(0)} DKK`;
    document.querySelector(".originalPrice2").textContent = `${product.price} DKK`;

    // Fjerne klassen hide, så man nu kan se procent on sale mærket. 
    document.querySelector(".saleBadge2").classList.remove("hide");
    // Ændrer indholdet 
    document.querySelector(".saleBadge2").textContent = `- ${product.discount} %`;
  }

}