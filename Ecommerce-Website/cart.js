let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartContainer = document.getElementById("cart-items");

let total = 0;

cart.forEach(item => {

    total += item.price;

    cartContainer.innerHTML += `
        <div class="product-card">
            <h3>${item.name}</h3>
            <p>₹${item.price}</p>
        </div>
    `;
});

document.getElementById("total-price").innerText =
"Total: ₹" + total;