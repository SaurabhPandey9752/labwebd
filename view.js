// view.js
function renderProduct(product) {
    var container = document.getElementById('product-container');
    var card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <button onclick="addItem('${product.name}', this)">Add to Cart</button>
        <i class="cart-add"></i>
        <i class="cart-tick">&#10004;</i>
    `;
    container.appendChild(card);
}

function updateCartCount() {
    document.querySelector('.cart-count').textContent = cartCount;
}

function showCart() {
    if (shoppingList.length > 0) {
        var cartItems = shoppingList.join(', ');
        alert("Items in your cart: " + cartItems);
    } else {
        alert("Your cart is empty.");
    }
}
