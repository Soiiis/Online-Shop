const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(require.main.filename),
    'data',
    'cart.json'
  );


module.exports = class Cart {
    static addProduct (id, productPrice) {
        // Fetch the previous cart (adding products to the cart)
        let cart = {products: [], totalPrice: 0};
        fs.readFile(p ,(err,fileContent) => {
            if(!err) {
                cart = JSON.parse(fileContent);
            }
            // Analyze the cart => Find the existing product 
            const existingProductIndex = cart.products.findIndex(product => product.id === id);
            const existingProduct = cart.products[existingProductIndex];
            let updatedProduct;
            if(existingProduct) {
                // Nếu đang có sản phẩm (if had a product) => thêm 1 sản phẩm mới (update)
                updatedProduct = {...existingProduct}; // copy toàn bộ thuộc tính của existingProduct
                console.log(updatedProduct);
                updatedProduct.qty ++;
                cart.products = [...cart.products];
                cart.products[existingProduct] = updatedProduct;
            }
            else {
                // Nếu chưa có 1 sản phâm nào thì thêm sản phâm mới với các thuộc tính phải tự định nghĩa
                updatedProduct = {id : id , qty : 1};
                cart.products = [...cart.products, updatedProduct];
            }
            cart.totalPrice = cart.totalPrice +  +productPrice;
            fs.writeFile(p, JSON.stringify(cart),err => {
                console.log(err);
            })
        })

    }
}