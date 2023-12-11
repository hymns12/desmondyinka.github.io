function addToCart(button) {
    // Get product details from the clicked button's parent element
  let product = button.parentNode;
  let productName = product.getAttribute('data-name');
  let productPrice = parseFloat(product.getAttribute('data-price'));

    // Create a new list item for the cart
  let cartItem = document.createElement('li');
    cartItem.textContent = productName + ' - $' + productPrice.toFixed(2);

    // Append the cart item to the cart items container
    document.getElementById('cart-items').appendChild(cartItem);

    // Optionally, you can update the total price in the cart
    updateCartTotal(productPrice);
}

function updateCartTotal(price) {
    // Get the current total price from the cart total element
  let cartTotalElement = document.getElementById('cart-total');
  let cartTotal = parseFloat(cartTotalElement.textContent.substr(1));

    // Update the total price
    cartTotal += price;

    // Display the updated total price
    cartTotalElement.textContent = '$' + cartTotal.toFixed(2);
}

function addToCart(button) {
    // Get product details from the clicked button's parent element
  let product = button.parentNode;
  let productName = product.getAttribute('data-name');
  let productPrice = parseFloat(product.getAttribute('data-price'));

    // Create a new list item for the cart
    let cartItem = document.createElement('li');
    cartItem.textContent = productName + ' - $' + productPrice.toFixed(2);

    // Create a remove button for the cart item
    let removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-from-cart';
    removeButton.onclick = function() {
        removeCartItem(cartItem, productPrice);
    };

    // Append the remove button to the cart item
    cartItem.appendChild(removeButton);

    // Append the cart item to the cart items container
    document.getElementById('cart-items').appendChild(cartItem);

    // Optionally, you can update the total price in the cart
    updateCartTotal(productPrice);
}

function increaseCartItemQuantity(cartItem, price) {
    // Increase the quantity of the existing cart item
    let quantitySpan = cartItem.querySelector('.quantity');
    let quantity = parseInt(quantitySpan.textContent, 10) + 1;
    quantitySpan.textContent = 'Quantity: ' + quantity;


    quantitySpan = document.createElement('span');
    quantitySpan.className = 'quantity';
    quantitySpan.textContent = 'Quantity: 1';
    cartItem.appendChild(quantitySpan);

    // Optionally, you can update the total price in the cart
    updateCartTotal(price);
}   


function removeCartItem(cartItem, price) {
    // Remove the cart item from the cart items container
    let cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.removeChild(cartItem);

    // Update the total price in the cart
    updateCartTotal(-price);
}

function updateCartTotal(price) {
    // Get the current total price from the cart total element
    let cartTotalElement = document.getElementById('cart-total');
    let cartTotal = parseFloat(cartTotalElement.textContent.substr(8)); // Remove 'Total: $' and parse

    // Update the total price
    cartTotal += price;

    // Display the updated total price
    cartTotalElement.textContent = 'Total: $' + cartTotal.toFixed(2);
}
