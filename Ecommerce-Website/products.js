function addToCart(productName, price){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name: productName,
        price: price
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(productName + " added to cart!");
}

function searchProducts(){

    let input = document.getElementById("searchInput").value.toLowerCase();

    let cards = document.querySelectorAll(".product-card");

    cards.forEach(card => {

        let productName = card.querySelector("h3").innerText.toLowerCase();

        if(productName.includes(input)){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }
    });
}