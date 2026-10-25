const dishes = [
  { id: "kajju-chicken", name: "Kajju Chicken", category: "chicken popular", tag: "House special", description: "Cashew-rich Andhra chicken gravy, a listing favourite for family tables.", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=85", alt: "Cashew chicken curry", price: 320 },
  { id: "chicken-curry", name: "Andhra Chicken Curry", category: "chicken", tag: "Chicken", description: "Spicy country-style chicken curry with red chilli and gongura notes.", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=85", alt: "Andhra chicken curry", price: 280 },
  { id: "chicken-fry", name: "Kodi Vepudu", category: "chicken popular", tag: "Starter", description: "Dry-fried chicken tossed with curry leaves, garlic and crushed pepper.", image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c2?auto=format&fit=crop&w=800&q=85", alt: "Spicy fried chicken", price: 260 },
  { id: "mutton-curry", name: "Mutton Curry", category: "mutton", tag: "Mutton", description: "Slow-cooked mutton in a robust dhaba gravy.", image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=800&q=85", alt: "Mutton curry", price: 380 },
  { id: "biryani", name: "Chicken Dum Biryani", category: "rice popular", tag: "Popular", description: "Layered basmati, tender chicken and dum spices. Serves one generous plate.", image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=800&q=85", alt: "Chicken biryani", price: 250 },
  { id: "veg-biryani", name: "Vegetable Biryani", category: "rice vegetarian", tag: "Vegetarian", description: "Fragrant vegetable dum biryani with raita on the side.", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=85", alt: "Vegetable biryani", price: 180 },
  { id: "veg-curry", name: "Mixed Vegetable Curry", category: "vegetarian", tag: "Vegetarian", description: "Seasonal vegetables in a mild coconut-tomato gravy.", image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=85", alt: "Vegetable curry", price: 160 },
  { id: "paneer", name: "Paneer Butter Masala", category: "vegetarian popular", tag: "Vegetarian", description: "Cottage cheese in a creamy tomato-cashew sauce.", image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=85", alt: "Paneer curry", price: 220 },
  { id: "dal", name: "Dal Tadka", category: "vegetarian", tag: "Comfort", description: "Yellow lentils tempered with ghee, cumin and chilli.", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=85", alt: "Dal tadka", price: 140 },
  { id: "gongura", name: "Gongura Pachadi", category: "vegetarian", tag: "Andhra", description: "Tangy sorrel chutney — a classic Andhra table essential.", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=85", alt: "Andhra chutney", price: 80 },
  { id: "naan", name: "Butter Naan", category: "breads vegetarian", tag: "Breads", description: "Soft tandoor naan finished with butter.", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=85", alt: "Butter naan", price: 45 },
  { id: "roti", name: "Tandoori Roti", category: "breads vegetarian", tag: "Breads", description: "Whole-wheat roti from the tandoor.", image: "https://images.unsplash.com/photo-1574894709920-11b28e7365e5?auto=format&fit=crop&w=800&q=85", alt: "Tandoori roti", price: 30 },
  { id: "rice", name: "Steamed Rice", category: "rice vegetarian", tag: "Rice", description: "Plain steamed rice to pair with curries.", image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=800&q=85", alt: "Steamed rice", price: 60 },
  { id: "dosa", name: "Masala Dosa", category: "tiffin vegetarian popular", tag: "Tiffin", description: "Crisp dosa with potato masala, chutney and sambar.", image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=85", alt: "Masala dosa", price: 90 },
  { id: "idli", name: "Idli Sambar", category: "tiffin vegetarian", tag: "Tiffin", description: "Soft idlis served with sambar and coconut chutney.", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=85", alt: "Idli sambar", price: 70 },
  { id: "meals", name: "Andhra Meals", category: "vegetarian popular", tag: "Family", description: "Rice, dal, sambar, fry, pachadi and curd — a full plate.", image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=85", alt: "South Indian meals", price: 180 },
  { id: "lassi", name: "Sweet Lassi", category: "drinks vegetarian", tag: "Drinks", description: "Chilled yogurt drink to cool a spicy meal.", image: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=800&q=85", alt: "Lassi", price: 60 },
  { id: "filter-coffee", name: "Filter Coffee", category: "drinks vegetarian", tag: "Drinks", description: "South Indian filter coffee, served hot.", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=85", alt: "Filter coffee", price: 40 }
];

const MAP_URL = "https://www.google.com/maps/search/?api=1&query=Sri+Venkateswara+Family+Garden+Restaurant+Dhaba+Pedavullagallu+Andhra+Pradesh+523265";
const STORAGE_KEY = "svr-cart";

const cart = new Map(JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"));
const menuGrid = document.getElementById("menuGrid");
const cartCount = document.getElementById("cartCount");
const cartDrawer = document.getElementById("cartDrawer");
const cartBackdrop = document.getElementById("cartBackdrop");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const checkoutButton = document.getElementById("checkoutButton");
const checkoutBackdrop = document.getElementById("checkoutBackdrop");
const checkoutForm = document.getElementById("checkoutForm");
const orderConfirmation = document.getElementById("orderConfirmation");
const toast = document.getElementById("toast");
const reservationForm = document.getElementById("reservationForm");
const reservationConfirmation = document.getElementById("reservationConfirmation");
let toastTimer;

function formatPrice(n) {
  return `₹${n}`;
}

function saveCart() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...cart.entries()]));
}

function cartSubtotal() {
  return [...cart.entries()].reduce((sum, [id, qty]) => {
    const dish = dishes.find(d => d.id === id);
    return sum + (dish ? dish.price * qty : 0);
  }, 0);
}

function renderMenu(filter = "all") {
  if (!menuGrid) return;
  const visible = dishes.filter(d => filter === "all" || d.category.split(" ").includes(filter));
  const limit = Number(menuGrid.dataset.limit || 0);
  const list = limit ? visible.slice(0, limit) : visible;
  menuGrid.innerHTML = list.map(d => `
    <article class="menu-card">
      <div class="menu-photo">
        <img src="${d.image}" alt="${d.alt}" loading="lazy">
        <span class="menu-tag">${d.tag}</span>
      </div>
      <div class="menu-card-content">
        <h3>${d.name}</h3>
        <p>${d.description}</p>
        <div class="menu-card-bottom">
          <span class="price-request">${formatPrice(d.price)}</span>
          <button class="add-button" type="button" data-add="${d.id}">Add to cart +</button>
        </div>
      </div>
    </article>`).join("");
}

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function addToCart(id) {
  const dish = dishes.find(d => d.id === id);
  if (!dish) return;
  cart.set(id, (cart.get(id) || 0) + 1);
  saveCart();
  renderCart();
  showToast(`${dish.name} added to your cart`);
}

function changeQuantity(id, amount) {
  const next = (cart.get(id) || 0) + amount;
  if (next <= 0) cart.delete(id);
  else cart.set(id, next);
  saveCart();
  renderCart();
}

function renderCart() {
  if (!cartCount || !cartItems) return;
  const totalItems = [...cart.values()].reduce((sum, qty) => sum + qty, 0);
  cartCount.textContent = totalItems;
  if (cart.size === 0) {
    cartItems.innerHTML = `<div class="empty-cart"><div class="empty-icon">✦</div><strong>Your cart is waiting.</strong><p>Add a dish from the menu to get started.</p></div>`;
    if (checkoutButton) checkoutButton.disabled = true;
    if (cartTotal) cartTotal.textContent = "—";
    return;
  }
  cartItems.innerHTML = [...cart.entries()].map(([id, qty]) => {
    const dish = dishes.find(d => d.id === id);
    return `<div class="cart-item">
      <div><h3>${dish.name}</h3><small>${formatPrice(dish.price)} each · ${formatPrice(dish.price * qty)}</small>
        <div class="quantity-controls">
          <button type="button" aria-label="Decrease ${dish.name} quantity" data-change="${id}" data-amount="-1">−</button>
          <span>${qty}</span>
          <button type="button" aria-label="Increase ${dish.name} quantity" data-change="${id}" data-amount="1">+</button>
        </div>
      </div>
      <button type="button" class="remove-item" data-remove="${id}">Remove</button>
    </div>`;
  }).join("");
  if (cartTotal) cartTotal.textContent = formatPrice(cartSubtotal());
  if (checkoutButton) checkoutButton.disabled = false;
}

function openCart() {
  cartDrawer.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
  cartBackdrop.hidden = false;
  document.body.classList.add("no-scroll");
  document.getElementById("closeCart").focus();
}
function closeCart() {
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
  cartBackdrop.hidden = true;
  if (!checkoutBackdrop || checkoutBackdrop.hidden) document.body.classList.remove("no-scroll");
}
function openCheckout() {
  if (!cart.size) return;
  checkoutBackdrop.hidden = false;
  orderConfirmation.hidden = true;
  checkoutForm.hidden = false;
  document.body.classList.add("no-scroll");
  document.getElementById("customerName").focus();
}
function closeCheckout() {
  if (!checkoutBackdrop) return;
  checkoutBackdrop.hidden = true;
  if (!cartDrawer.classList.contains("open")) document.body.classList.remove("no-scroll");
}

if (menuGrid) {
  menuGrid.addEventListener("click", event => {
    const button = event.target.closest("[data-add]");
    if (button) addToCart(button.dataset.add);
  });
}
document.querySelectorAll(".filter-btn").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    renderMenu(button.dataset.filter);
  });
});
if (cartItems) {
  cartItems.addEventListener("click", event => {
    const change = event.target.closest("[data-change]");
    const remove = event.target.closest("[data-remove]");
    if (change) changeQuantity(change.dataset.change, Number(change.dataset.amount));
    if (remove) { cart.delete(remove.dataset.remove); saveCart(); renderCart(); }
  });
}
document.getElementById("openCart")?.addEventListener("click", openCart);
document.getElementById("closeCart")?.addEventListener("click", closeCart);
cartBackdrop?.addEventListener("click", closeCart);
checkoutButton?.addEventListener("click", openCheckout);
document.getElementById("closeCheckout")?.addEventListener("click", closeCheckout);
checkoutBackdrop?.addEventListener("click", event => { if (event.target === checkoutBackdrop) closeCheckout(); });
document.addEventListener("keydown", event => {
  if (event.key === "Escape") { closeCheckout(); closeCart(); }
});
document.getElementById("menuToggle")?.addEventListener("click", () => {
  const nav = document.getElementById("mainNav");
  const expanded = nav.classList.toggle("show");
  document.getElementById("menuToggle").setAttribute("aria-expanded", String(expanded));
});
document.querySelectorAll("#mainNav a").forEach(link => link.addEventListener("click", () => {
  document.getElementById("mainNav").classList.remove("show");
  document.getElementById("menuToggle")?.setAttribute("aria-expanded", "false");
}));

checkoutForm?.addEventListener("submit", event => {
  event.preventDefault();
  if (!cart.size) return;
  const data = new FormData(checkoutForm);
  const lines = [...cart.entries()].map(([id, qty]) => {
    const dish = dishes.find(d => d.id === id);
    return `• ${dish.name} × ${qty} — ${formatPrice(dish.price * qty)}`;
  });
  const summary = [
    "ORDER REQUEST — DEMO (not sent to the restaurant)",
    `Name: ${data.get("customerName")}`,
    `Phone: ${data.get("customerPhone")}`,
    `Order type: ${data.get("orderType")}`,
    `Notes/address: ${data.get("customerAddress") || "None provided"}`,
    "",
    "Items:",
    ...lines,
    "",
    `Estimated total: ${formatPrice(cartSubtotal())}`,
    "",
    "Please confirm this request in person or by phone. No payment was processed."
  ].join("\n");
  orderConfirmation.textContent = summary;
  orderConfirmation.hidden = false;
  checkoutForm.hidden = true;
  cart.clear();
  saveCart();
  renderCart();
});

reservationForm?.addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(reservationForm);
  reservationConfirmation.hidden = false;
  reservationConfirmation.textContent = [
    "TABLE REQUEST SAVED ON THIS DEVICE — not sent to the restaurant yet.",
    `Name: ${data.get("guestName")}`,
    `Phone: ${data.get("guestPhone")}`,
    `Guests: ${data.get("guestCount")}`,
    `Date: ${data.get("visitDate")} at ${data.get("visitTime")}`,
    `Notes: ${data.get("guestNotes") || "None"}`,
    "",
    "Please call the restaurant to confirm your table."
  ].join("\n");
  reservationForm.reset();
  showToast("Reservation request prepared. Please confirm by phone.");
});

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const visitDate = document.getElementById("visitDate");
if (visitDate) visitDate.min = new Date().toISOString().split("T")[0];

renderMenu();
renderCart();
