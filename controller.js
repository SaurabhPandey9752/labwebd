// controller.js
function addItem(item, button) {
    shoppingList.push(item);
    cartCount++;
    updateCartCount();

    var tickIcon = button.nextElementSibling.nextElementSibling;
    tickIcon.style.display = 'inline-block';
}

// Initialize products
var products = [
    { name: 'Product 1', description: 'Description of Product 1', image: 'product1.jpg' },
    { name: 'Product 2', description: 'Description of Product 2', image: 'product2.jpg' },
    { name: 'Product 3', description: 'Description of Product 3', image: 'product3.jpg' },
    { name: 'Product 4', description: 'Description of Product 4', image: 'product4.jpg' },
    { name: 'Product 5', description: 'Description of Product 5', image: 'product5.jpg' },
    { name: 'Product 6', description: 'Description of Product 6', image: 'product6.jpg' }
];

// Render products
products.forEach(product => renderProduct(product));
