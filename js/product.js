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

}


{/* <section class="product">
<img src="https://kea-alt-del.dk/t7/images/webp/640/1532.webp" alt="" />
<div class="productInfo">
  <p class="productBrand">Puma</p>
  <p class="productName">Grey Leaping Cat T-shirt</p>
  <p class="productPrice">899 DKK</p>
  <div class="productColor">
    <p>Color:</p>
    <p>Grey</p>
  </div>
  <div class="colorImg">
    <img
      src="https://kea-alt-del.dk/t7/images/webp/640/1532.webp"
      alt=""
    />
    <img
      src="https://kea-alt-del.dk/t7/images/webp/640/1532.webp"
      alt=""
    />
  </div>
  <div class="productSize">
    <p>Choose a size:</p>
    <label>
      <select name="liste">
        <option>XS</option>
        <option>S</option>
        <option>M</option>
        <option>L</option>
        <option>XL</option>
      </select>
    </label>
  </div>
  <div class="addProduct">Add to basket</div>
</div>
</section> */}


// {
//     "id": 1531,
//     "gender": "Men",
//     "category": "Apparel",
//     "subcategory": "Topwear",
//     "articletype": "Tshirts",
//     "basecolour": "Grey",
//     "season": "Fall",
//     "productionyear": 2010,
//     "usagetype": "Casual",
//     "productdisplayname": "Grey Solid Round Neck T-Shirt",
//     "parsed": 1,
//     "soldout": 0,
//     "relid": 1531,
//     "price": 799,
//     "discount": null,
//     "variantname": "Stencil",
//     "brandname": "Puma",
//     "brandbio": "PUMA is the World's Fastest Sports Brand",
//     "brandimage": "http://assets.myntassets.com/assets/images/2015/11/17/11447736932686-113016-3ff8sf.jpg",
//     "agegroup": "Adults-Men",
//     "colour1": "NA",
//     "colour2": "NA",
//     "fashiontype": "Fashion",
//     "materialcaredesc": "Cotton <br> Machine-wash",
//     "sizefitdesc": "The model (height 6' and shoulders 18\") is wearing a size M",
//     "description": "Grey solid waist length T-shirt, has a round neck, short sleeves",
//     "styledesc": "Keep it cool and casual this season with this high-quality Puma tee.  A fashionable weekend outfit s"
//   }