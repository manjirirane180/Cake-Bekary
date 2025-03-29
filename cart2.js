document.addEventListener("DOMContentLoaded", function () {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    document.querySelectorAll(".cart-btn").forEach((button, index) => {
        button.addEventListener("click", function () {
            const product = this.parentElement;
            const productName = product.querySelector("img").alt;
            const productPrice = product.querySelector(".text").textContent.replace("Rs.", "").replace("/-", "").trim();
            const productImage = product.querySelector("img").src;

            const item = {
                name: productName,
                price: parseInt(productPrice),
                image: productImage,
                quantity: 1,
            };

            // Check if the item is already in the cart
            const existingItem = cartItems.find(i => i.name === item.name);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cartItems.push(item);
            }

            localStorage.setItem("cart", JSON.stringify(cartItems));
            alert("Item added to cart!");
        });
    });
});
