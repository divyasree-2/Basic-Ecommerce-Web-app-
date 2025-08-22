// 1. Product List
const products = [
  { name: "Laptop", price: 45000, image: "https://via.placeholder.com/100" },
  { name: "Smartphone", price: 20000, image: "https://via.placeholder.com/100" },
  { name: "Headphones", price: 2000, image: "https://via.placeholder.com/100" },
  { name: "Keyboard", price: 1500, image: "https://via.placeholder.com/100" }
];
const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const emptyCartMsg = document.getElementById("empty-cart");
const cartTotal = document.getElementById("cart-total");
const totalPriceEl = document.getElementById("total-price");
const checkoutBtn = document.getElementById("checkout-btn");
let cart = [];
// 2. Render Products
products.forEach((product, index) => {
  const div = document.createElement("div");
  div.classList.add("product");
  div.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>₹${product.price}</p>
    <button onclick="addToCart(${index})">Add to Cart</button>
  `;
  productList.appendChild(div);
});
// 3. Add to Cart
function addToCart(index) {
  cart.push(products[index]);
  updateCart();
}
// 4. Update Cart
function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;
  if (cart.length === 0) {
    emptyCartMsg.style.display = "block";
    cartTotal.classList.add("hidden");
  } else {
    emptyCartMsg.style.display = "none";
    cartTotal.classList.remove("hidden");

    cart.forEach((item, i) => {
      const div = document.createElement("div");
      div.innerHTML = `${item.name} - ₹${item.price}`;
      cartItems.appendChild(div);
      total += item.price;
    });
    totalPriceEl.textContent = total;
  }
}
// 5. Checkout
checkoutBtn.addEventListener("click", () => {
  alert("Thank you for your purchase!");
  cart = [];
  updateCart();
});
