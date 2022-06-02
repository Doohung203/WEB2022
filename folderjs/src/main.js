import { render } from "./common";
import { productList } from "./data";
// Khai báo hàm show product
function showProduct(products) {
  // kiểm tra
  if (!Array.isArray(products) || productList.length == 0) return [];

  //xử lý
  let result = "";
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    result = `
            <div class="item">                
                    <div class ="item-img">
                        <img src= "${product.img}" alt="">
                    </div> 
                    <div class = "item-content">
                        <div>
                            <h3><a href="./detail.html?id=${product.id}"></a> ${product.name} </h3>
                        </div>
                        <div class="flex">
                            <span> 30 munites</span>
                            <span> snack </span>
                        </div>
                    </div>
            </div> 
        `;
  }

  //return
  return result;
}
render("product",showProduct(productList));
