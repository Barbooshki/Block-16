// Grocery list array to store items
const groceryList = [];

// Select elements from the HTML
const groceryListDiv = document.getElementById("grocery-list");
const groceryForm = document.getElementById("grocery-form");
const itemNameInput = document.getElementById("item-name");
const itemQuantityInput = document.getElementById("item-quantity");
const outputDiv = document.getElementById("output");

// Display the current grocery list
function displayGroceryList() {
    groceryListDiv.innerHTML = "<h2>Current Grocery List</h2>";
    groceryListDiv.innerHTML += "<ul>";
    
    for (let item of groceryList) {
        groceryListDiv.innerHTML += `<li>${item.name} - ${item.quantity}</li>`;
    }

    groceryListDiv.innerHTML += "</ul>";
}

// Handle form submission
groceryForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    const itemName = itemNameInput.value;
    const itemQuantity = parseInt(itemQuantityInput.value);

    if (itemName && !isNaN(itemQuantity)) {
        // Add the item to the grocery list
        groceryList.push({ name: itemName, quantity: itemQuantity });
        itemNameInput.value = "";
        itemQuantityInput.value = "";
        
        // Display the updated grocery list
        displayGroceryList();
        
        // Optional: You can also perform other actions like calculating the total cost, searching, or filtering items here.
        
        outputDiv.textContent = "Item added successfully!";
    } else {
        outputDiv.textContent = "Please enter a valid item name and quantity.";
    }
});
