/**
 * SWAROOP.inc — Master JavaScript Engine
 * Purveyors of Timeless Luxury & Heritage Living
 */

// ==========================================================================
// 1. MASTER PRODUCT DATA STORE
// ==========================================================================
const SWAROOP_CATALOG = [
  {
    id: "P101",
    name: "Monarch Gold Titanium Phone",
    department: "Department I • Telephony",
    category: "mobiles",
    material: "gold",
    icon: "📱",
    basePrice: 960,
    originalPrice: 1200,
    dealTag: "20% Courtesy",
    description: "Fluted 24K gold frame with aerospace-grade titanium unibody, satellite dispatch capability, and scratchproof sapphire crystal display.",
    specs: [
      { key: "Origin Atelier", val: "Geneva & London Workshops" },
      { key: "Primary Chassis", val: "Grade 5 Titanium with 24K Gold Inlay" },
      { key: "Glass Surface", val: "Mohs-Hardness 9 Pure Corundum Sapphire" },
      { key: "Encryption", val: "Military-Grade Dual Hardware Enclave (512GB)" }
    ]
  },
  {
    id: "P102",
    name: "Bespoke Walnut Valve Amplifier",
    department: "Department II • Mechanical & Acoustics",
    category: "electronics",
    material: "valves",
    icon: "📻",
    basePrice: 720,
    originalPrice: 850,
    dealTag: "Privilege Offer",
    description: "Matched KT88 power tubes with hand-wound audio transformers, fluted brass volume potentiometers, and polished English walnut enclosure.",
    specs: [
      { key: "Origin Atelier", val: "Black Forest Sound Craft, Germany" },
      { key: "Tubes", val: "Four Matched KT88 Vacuum Valves" },
      { key: "Chassis", val: "Solid Aged English Walnut & Brushed Brass" },
      { key: "Frequency Response", val: "10Hz - 45,000Hz Pure Analog Warmth" }
    ]
  },
  {
    id: "P103",
    name: "Double-Breasted Cashmere Overcoat",
    department: "Department III • Sartorial Tailoring",
    category: "clothes",
    material: "cashmere",
    icon: "🧥",
    basePrice: 490,
    originalPrice: 600,
    dealTag: "Autumn Special",
    description: "100% combed Grade-A Mongolian cashmere with floating horsehair canvas, hand-stitched lapels, and carved buffalo horn buttons.",
    specs: [
      { key: "Origin Atelier", val: "Biella Weaving Mills, Northern Italy" },
      { key: "Composition", val: "100% Long-Staple Combed Cashmere" },
      { key: "Lining", val: "Pure Bemberg Cupro Silk Jacquard" },
      { key: "Buttons", val: "Hand-Turned Water Buffalo Horn" }
    ]
  },
  {
    id: "P104",
    name: "Hand-Burnished Oxford Brogues",
    department: "Department IV • Cordwainer Guild",
    category: "footwear",
    material: "goodyear",
    icon: "👞",
    basePrice: 380,
    originalPrice: 450,
    dealTag: "15% Courtesy",
    description: "Full-brogue wingtip pattern cut from French box calfskin, Goodyear-welted to channel-stitched oak-bark tanned leather soles.",
    specs: [
      { key: "Origin Atelier", val: "Northamptonshire Guild, England" },
      { key: "Leather", val: "French Full-Grain Box Calfskin" },
      { key: "Construction", val: "360-Degree Goodyear Welt" },
      { key: "Sole", val: "Oak-Bark Tanned Leather with Brass Pegging" }
    ]
  },
  {
    id: "P105",
    name: "Vanguard Brushed Titanium Slate",
    department: "Department I • Telephony",
    category: "mobiles",
    material: "titanium",
    icon: "📱",
    basePrice: 1450,
    originalPrice: 1450,
    dealTag: "Limited Release",
    description: "Grade 5 titanium unibody, satellite dispatch capability, anti-reflective ceramic shield, and private OS.",
    specs: [
      { key: "Origin Atelier", val: "Zurich Precision Lab" },
      { key: "Chassis", val: "Grade 5 Satin-Brushed Titanium" },
      { key: "Processor", val: "High-Efficiency Neural Octa-Core" },
      { key: "Security", val: "Physical Microphone & Camera Kill Switch" }
    ]
  },
  {
    id: "P106",
    name: "Obsidian Ceramic Communicator",
    department: "Department I • Telephony",
    category: "mobiles",
    material: "ceramic",
    icon: "📱",
    basePrice: 1800,
    originalPrice: 1800,
    dealTag: "New Acquisition",
    description: "Zirconia mirror ceramic back with emerald-cut ruby camera bezels and 1TB encrypted storage.",
    specs: [
      { key: "Origin Atelier", val: "Kyoto Ceramics Atelier" },
      { key: "Material", val: "Sintered Zirconia Ceramic & Ruby Bezels" },
      { key: "Display", val: "LTPO OLED with 120Hz Refresh" },
      { key: "Capacity", val: "1TB Encrypted NVMe Storage" }
    ]
  },
  {
    id: "P107",
    name: "Sovereign Havana Foldable",
    department: "Department I • Telephony",
    category: "mobiles",
    material: "gold",
    icon: "📱",
    basePrice: 2150,
    originalPrice: 2400,
    dealTag: "Masterpiece",
    description: "Dual folding flexible OLED wrapped in full-grain French calfskin with gold guilloché hinges.",
    specs: [
      { key: "Origin Atelier", val: "Paris Leatherworks & Munich Mechanics" },
      { key: "Leather", val: "Hand-Waxed Havana French Calfskin" },
      { key: "Hinge", val: "24K Gold Plated Gear-Driven Mechanism" },
      { key: "Screen", val: "8.1-inch Foldable Micro-OLED" }
    ]
  },
  {
    id: "P108",
    name: "Kensington Heavy Platter Turntable",
    department: "Department II • Mechanical & Acoustics",
    category: "electronics",
    material: "turntable",
    icon: "🎛️",
    basePrice: 1350,
    originalPrice: 1350,
    dealTag: "Audiophile Class",
    description: "Solid brass 12kg flywheel platter suspended magnetically with an oil-damped tonearm.",
    specs: [
      { key: "Origin Atelier", val: "London Soundworks" },
      { key: "Platter", val: "12kg Solid Machined Brass" },
      { key: "Bearing", val: "Inverted Ceramic Ball with Magnetic Levitation" },
      { key: "Speeds", val: "33⅓ and 45 RPM Precision Governed" }
    ]
  },
  {
    id: "P109",
    name: "Baron Imperial Mechanical Keyboard",
    department: "Department II • Mechanical & Acoustics",
    category: "electronics",
    material: "mechanical",
    icon: "⌨️",
    basePrice: 580,
    originalPrice: 580,
    dealTag: "Limited Issue",
    description: "Cast-brass housing with typewriter-style circular keycaps and lubricated mechanical switches.",
    specs: [
      { key: "Origin Atelier", val: "Vienna Guild" },
      { key: "Chassis", val: "Solid Sand-Cast Brass (3.4kg)" },
      { key: "Switches", val: "Custom Gold-Plated Mechanical Tactile" },
      { key: "Keycaps", val: "PBT Double-Shot Vintage Round Profile" }
    ]
  },
  {
    id: "P110",
    name: "Mayfair Ribbon Studio Transducer",
    department: "Department II • Mechanical & Acoustics",
    category: "electronics",
    material: "valves",
    icon: "🎙️",
    basePrice: 640,
    originalPrice: 750,
    dealTag: "Studio Reference",
    description: "Hand-corrugated aluminum ribbon transducer designed for rich acoustic reproduction.",
    specs: [
      { key: "Origin Atelier", val: "Soho Audio, London" },
      { key: "Ribbon", val: "1.8-micron Pure Aluminum Foil" },
      { key: "Transformer", val: "Custom Toroidal Shielded Core" },
      { key: "Polar Pattern", val: "Pure Figure-8 Bidirectional" }
    ]
  },
  {
    id: "P111",
    name: "Savile Row Houndstooth Blazer",
    department: "Department III • Sartorial Tailoring",
    category: "clothes",
    material: "tweed",
    icon: "🧥",
    basePrice: 780,
    originalPrice: 780,
    dealTag: "Classic Cut",
    description: "Heavyweight Harris Tweed jacket with floating horsehair canvas and natural horn buttons.",
    specs: [
      { key: "Origin Atelier", val: "Outer Hebrides & Savile Row" },
      { key: "Cloth", val: "100% Virgin Scottish Wool Harris Tweed" },
      { key: "Cut", val: "Single-Breasted Two-Button English Silhouette" },
      { key: "Pockets", val: "Flapped Bellows with Ticket Pocket" }
    ]
  },
  {
    id: "P112",
    name: "Mayfair Silk Quilted Smoking Jacket",
    department: "Department III • Sartorial Tailoring",
    category: "clothes",
    material: "silk",
    icon: "🥻",
    basePrice: 650,
    originalPrice: 650,
    dealTag: "Evening Salon",
    description: "Deep bottle-green silk velvet with braided frogging clasps and quilted silk shawl lapels.",
    specs: [
      { key: "Origin Atelier", val: "Lyon Silk Guild, France" },
      { key: "Material", val: "Silk Velvet with Mulberry Silk Satin Lapels" },
      { key: "Closure", val: "Hand-Braided Frogging Clasps" },
      { key: "Finish", val: "Quilted Interior Facing" }
    ]
  },
  {
    id: "P113",
    name: "Bespoke Cable Knit Cricket Jumper",
    department: "Department III • Sartorial Tailoring",
    category: "clothes",
    material: "cashmere",
    icon: "🧶",
    basePrice: 320,
    originalPrice: 380,
    dealTag: "Sporting Club",
    description: "Ecru-dyed British wool and fine cashmere blend with deep navy and burgundy striped tipping.",
    specs: [
      { key: "Origin Atelier", val: "Hawick Knitters, Scotland" },
      { key: "Yarn", val: "70% Merino Wool / 30% Cashmere" },
      { key: "Gauge", val: "5-Gauge Heavyweight Cable Weave" },
      { key: "Collar", val: "Deep V-Neck Ribbed Collar" }
    ]
  },
  {
    id: "P114",
    name: "Equestrian Chelsea Boot",
    department: "Department IV • Cordwainer Guild",
    category: "footwear",
    material: "boot",
    icon: "🥾",
    basePrice: 520,
    originalPrice: 520,
    dealTag: "Hand Lasted",
    description: "Seamless wholecut French box calf leather with beveled fiddleback waist and brass-pegged heel.",
    specs: [
      { key: "Origin Atelier", val: "Florence Cordwainer Guild" },
      { key: "Upper", val: "Seamless Single-Piece French Box Calf" },
      { key: "Waist", val: "Beveled Fiddleback Waist" },
      { key: "Sole", val: "Hand-Stitched Goodyear Welt" }
    ]
  },
  {
    id: "P115",
    name: "The Sovereign Albert Slipper",
    department: "Department IV • Cordwainer Guild",
    category: "footwear",
    material: "velvet",
    icon: "🥿",
    basePrice: 410,
    originalPrice: 410,
    dealTag: "Estate Lounge",
    description: "Midnight navy velvet with hand-embroidered gold bullion monogram and quilted red silk footbed.",
    specs: [
      { key: "Origin Atelier", val: "London Guild Chamber" },
      { key: "Upper", val: "Pure Cotton Pile Midnight Velvet" },
      { key: "Embroidery", val: "Hand-Stitched 24K Gold Bullion Wire" },
      { key: "Lining", val: "Quilted Royal Red Silk Brocade" }
    ]
  },
  {
    id: "P116",
    name: "Vintage Ascot Spectator Shoe",
    department: "Department IV • Cordwainer Guild",
    category: "footwear",
    material: "goodyear",
    icon: "👞",
    basePrice: 420,
    originalPrice: 490,
    dealTag: "Two-Tone Classic",
    description: "Two-tone dark espresso calfskin paired with raw natural flax linen inserts and brogue perforation.",
    specs: [
      { key: "Origin Atelier", val: "Northampton Workshop" },
      { key: "Leathers", val: "Burnished Espresso Calfskin & Natural Flax" },
      { key: "Sole", val: "Oak Bark Tanned Hand-Stitched Leather" },
      { key: "Welt", val: "Reverse Storm Welt for Moisture Shield" }
    ]
  }
];

// ==========================================================================
// 2. CURRENCY & SOVEREIGN REGION CONFIGURATION
// ==========================================================================
const SOVEREIGN_CURRENCIES = {
  US: { code: "USD", symbol: "$", rate: 1.0, name: "United States" },
  UK: { code: "GBP", symbol: "£", rate: 0.79, name: "United Kingdom" },
  IN: { code: "INR", symbol: "₹", rate: 83.5, name: "India" },
  EU: { code: "EUR", symbol: "€", rate: 0.92, name: "European Union" },
  JP: { code: "JPY", symbol: "¥", rate: 155.0, name: "Japan" },
  AE: { code: "AED", symbol: "AED ", rate: 3.67, name: "United Arab Emirates" },
  CH: { code: "CHF", symbol: "CHF ", rate: 0.90, name: "Switzerland" },
  CA: { code: "CAD", symbol: "CA$ ", rate: 1.36, name: "Canada" },
  AU: { code: "AUD", symbol: "AU$ ", rate: 1.52, name: "Australia" },
  SG: { code: "SGD", symbol: "SG$ ", rate: 1.35, name: "Singapore" }
};

function getSovereignty() {
  const code = localStorage.getItem("swaroop_country") || "US";
  return SOVEREIGN_CURRENCIES[code] || SOVEREIGN_CURRENCIES["US"];
}

function formatPrice(basePriceUSD) {
  const sov = getSovereignty();
  const converted = basePriceUSD * sov.rate;
  // Whole numbers for currencies like JPY, otherwise standard decimals
  const decimals = (sov.code === "JPY") ? 0 : 0;
  return `${sov.symbol}${Math.round(converted).toLocaleString()}`;
}

function updateGlobalCurrencyLabels() {
  const sov = getSovereignty();
  const countryEl = document.getElementById("displayCountry");
  const currencyEl = document.getElementById("displayCurrency");
  
  if (countryEl) countryEl.textContent = `Sovereign State: ${localStorage.getItem("swaroop_country") || "US"}`;
  if (currencyEl) currencyEl.textContent = `${sov.code} (${sov.symbol.trim()})`;

  // Synchronize all elements with data-base-price
  document.querySelectorAll("[data-base-price]").forEach(el => {
    const base = parseFloat(el.getAttribute("data-base-price"));
    if (!isNaN(base)) {
      el.textContent = formatPrice(base);
    }
  });
}

// Gateway Region Submission (index.html)
const regionForm = document.getElementById("regionForm");
if (regionForm) {
  regionForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const countrySelect = document.getElementById("countrySelect");
    const langSelect = document.getElementById("languageSelect");
    
    if (countrySelect && countrySelect.value) {
      localStorage.setItem("swaroop_country", countrySelect.value);
    }
    if (langSelect) {
      localStorage.setItem("swaroop_language", langSelect.value);
    }
    window.location.href = "home.html";
  });
}

// ==========================================================================
// 3. CART & WISHLIST REPOSITORY (LOCALSTORAGE)
// ==========================================================================
function getCart() {
  return JSON.parse(localStorage.getItem("swaroop_cart") || "[]");
}

function saveCart(cart) {
  localStorage.setItem("swaroop_cart", JSON.stringify(cart));
  updateHeaderBadges();
}

function getWishlist() {
  return JSON.parse(localStorage.getItem("swaroop_wishlist") || "[]");
}

function saveWishlist(wishlist) {
  localStorage.setItem("swaroop_wishlist", JSON.stringify(wishlist));
  updateHeaderBadges();
}

function updateHeaderBadges() {
  const cart = getCart();
  const wishlist = getWishlist();
  
  const totalCartCount = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
  const cartBadges = document.querySelectorAll("#cartCount");
  cartBadges.forEach(b => b.textContent = totalCartCount);

  const wishlistBadges = document.querySelectorAll("#wishlistCount");
  wishlistBadges.forEach(b => b.textContent = wishlist.length);
}

function handleAddToCart(productId, qty = 1) {
  const product = SWAROOP_CATALOG.find(p => p.id === productId);
  if (!product) return;

  const cart = getCart();
  const existing = cart.find(item => item.id === productId);

  if (existing) {
    existing.quantity += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      basePrice: product.basePrice,
      icon: product.icon,
      department: product.department,
      quantity: qty
    });
  }

  saveCart(cart);
  showToastNotification(`"${product.name}" safely packed into your trunk.`);
}

function handleAddToWishlist(productId) {
  const product = SWAROOP_CATALOG.find(p => p.id === productId);
  if (!product) return;

  let wishlist = getWishlist();
  if (!wishlist.find(id => id === productId)) {
    wishlist.push(productId);
    saveWishlist(wishlist);
    showToastNotification(`"${product.name}" reserved in Private Desiderata.`);
  } else {
    showToastNotification(`"${product.name}" is already archived in your Desiderata.`);
  }
}

function handleRemoveFromWishlist(productId) {
  let wishlist = getWishlist();
  wishlist = wishlist.filter(id => id !== productId);
  saveWishlist(wishlist);
  renderWishlistPage();
}

function showToastNotification(msg) {
  let toast = document.getElementById("heritageToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "heritageToast";
    toast.style.cssText = `
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      background-color: #1b2a22;
      color: #dfcaa7;
      font-family: 'Cinzel', serif;
      font-size: 0.82rem;
      letter-spacing: 0.08em;
      border: 1px solid #c5a880;
      box-shadow: 0 10px 25px rgba(0,0,0,0.35);
      padding: 14px 22px;
      z-index: 9999;
      display: flex;
      align-items: center;
      gap: 10px;
      transition: all 0.3s ease;
      opacity: 0;
      transform: translateY(15px);
    `;
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<span>⚜️</span> <span>${msg}</span>`;
  toast.style.opacity = "1";
  toast.style.transform = "translateY(0)";

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(15px)";
  }, 3200);
}

// ==========================================================================
// 4. CART VIEW & RENDERING (cart.html)
// ==========================================================================
let appliedDiscountRate = 0.0;

function renderCartPage() {
  const cartList = document.getElementById("cartItemsList");
  const emptyBox = document.getElementById("emptyCartMessage");
  const contentWrap = document.getElementById("cartContentWrapper");

  if (!cartList) return;

  const cart = getCart();

  if (cart.length === 0) {
    if (emptyBox) emptyBox.style.display = "block";
    if (contentWrap) contentWrap.style.display = "none";
    return;
  }

  if (emptyBox) emptyBox.style.display = "none";
  if (contentWrap) contentWrap.style.display = "grid";

  cartList.innerHTML = "";

  cart.forEach(item => {
    const row = document.createElement("div");
    row.className = "cart-row-item";
    row.setAttribute("data-id", item.id);

    const subtotal = item.basePrice * item.quantity;

    row.innerHTML = `
      <div class="col-product item-meta-cell">
        <div class="item-visual-box">${item.icon}</div>
        <div class="item-text-details">
          <h4>${item.name}</h4>
          <p class="item-dept">${item.department}</p>
          <span class="item-stock-tag">In Atelier Vault</span>
        </div>
      </div>
      <div class="col-price">
        <span class="price-val" data-base-price="${item.basePrice}">${formatPrice(item.basePrice)}</span>
      </div>
      <div class="col-qty">
        <div class="quantity-controller">
          <button type="button" class="qty-btn" onclick="updateItemQuantity('${item.id}', -1)">−</button>
          <span class="qty-number">${item.quantity}</span>
          <button type="button" class="qty-btn" onclick="updateItemQuantity('${item.id}', 1)">+</button>
        </div>
      </div>
      <div class="col-total">
        <strong class="price-val item-subtotal" data-base-price="${subtotal}">${formatPrice(subtotal)}</strong>
      </div>
      <div class="col-action">
        <button type="button" class="btn-remove-item" onclick="removeCartItem('${item.id}')" title="Discharge item">✕</button>
      </div>
    `;
    cartList.appendChild(row);
  });

  recalculateCartLedger();
}

function updateItemQuantity(productId, delta) {
  const cart = getCart();
  const target = cart.find(item => item.id === productId);
  if (!target) return;

  target.quantity += delta;
  if (target.quantity <= 0) {
    removeCartItem(productId);
    return;
  }

  saveCart(cart);
  renderCartPage();
}

function removeCartItem(productId) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== productId);
  saveCart(cart);
  renderCartPage();
}

function clearFullCart() {
  if (confirm("Are you certain you wish to empty your entire acquisition trunk?")) {
    saveCart([]);
    renderCartPage();
  }
}

function recalculateCartLedger() {
  const cart = getCart();
  const subtotalUSD = cart.reduce((sum, item) => sum + (item.basePrice * item.quantity), 0);
  const discountUSD = subtotalUSD * appliedDiscountRate;
  const dutyUSD = (subtotalUSD - discountUSD) * 0.05; // 5% diplomatic duty
  const grandTotalUSD = (subtotalUSD - discountUSD) + dutyUSD;

  const subEl = document.getElementById("cartSubtotal");
  const discEl = document.getElementById("cartDiscount");
  const dutyEl = document.getElementById("cartDuty");
  const grandEl = document.getElementById("cartGrandTotal");

  if (subEl) subEl.textContent = formatPrice(subtotalUSD);
  if (discEl) discEl.textContent = `-${formatPrice(discountUSD)}`;
  if (dutyEl) dutyEl.textContent = formatPrice(dutyUSD);
  if (grandEl) grandEl.textContent = formatPrice(grandTotalUSD);

  // Store totals for checkout
  sessionStorage.setItem("swaroop_cart_total", JSON.stringify({
    subtotal: subtotalUSD,
    discount: discountUSD,
    duty: dutyUSD,
    grandTotal: grandTotalUSD
  }));
}

function applyVoucherCode() {
  const input = document.getElementById("voucherCodeInput");
  const msg = document.getElementById("voucherFeedback");
  if (!input || !msg) return;

  const code = input.value.trim().toUpperCase();
  if (code === "HERITAGE15") {
    appliedDiscountRate = 0.15;
    msg.textContent = "✓ Autumn Equinox 15% Privilege Seal verified.";
    msg.style.color = "#2d5a3f";
    recalculateCartLedger();
  } else {
    appliedDiscountRate = 0.0;
    msg.textContent = "✕ Unrecognized sovereign cipher code.";
    msg.style.color = "#8b2626";
    recalculateCartLedger();
  }
}

function proceedToPayment() {
  const cart = getCart();
  if (cart.length === 0) {
    alert("Your acquisition trunk is empty.");
    return;
  }
  window.location.href = "checkout.html";
}

// ==========================================================================
// 5. WISHLIST VIEW (wishlist.html)
// ==========================================================================
function renderWishlistPage() {
  const grid = document.getElementById("wishlistGridContainer");
  const emptyBox = document.getElementById("emptyWishlistMessage");
  const totalText = document.getElementById("wishlistTotalItemsText");

  if (!grid) return;

  const wishlistIds = getWishlist();
  if (totalText) {
    totalText.innerHTML = `Curated Masterworks on File: <strong>${wishlistIds.length}</strong>`;
  }

  if (wishlistIds.length === 0) {
    grid.innerHTML = "";
    if (emptyBox) emptyBox.style.display = "block";
    return;
  }

  if (emptyBox) emptyBox.style.display = "none";
  grid.innerHTML = "";

  wishlistIds.forEach(id => {
    const item = SWAROOP_CATALOG.find(p => p.id === id);
    if (!item) return;

    const card = document.createElement("article");
    card.className = "product-card wishlist-card";
    card.setAttribute("data-id", item.id);

    card.innerHTML = `
      <button type="button" class="btn-card-dismiss" onclick="handleRemoveFromWishlist('${item.id}')" title="Relinquish from vault">✕</button>
      <div class="product-img-box">
        <span class="mock-item-art">${item.icon}</span>
      </div>
      <div class="product-details">
        <span class="product-category">${item.department}</span>
        <h4 class="product-name">${item.name}</h4>
        <p class="product-desc">${item.description}</p>
        <div class="price-wrap">
          <span class="current-price" data-base-price="${item.basePrice}">${formatPrice(item.basePrice)}</span>
        </div>
        <div class="card-btn-group">
          <button type="button" class="btn-small-gold btn-full" onclick="handleWishlistMoveToCart('${item.id}')">
            Transfer to Trunk 💼
          </button>
          <a href="../catalog/product-details.html?id=${item.id}" class="btn-small-outline">Inspect</a>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function handleWishlistMoveToCart(id) {
  handleAddToCart(id, 1);
  handleRemoveFromWishlist(id);
}

function transferAllWishlistToCart() {
  const wishlistIds = getWishlist();
  if (wishlistIds.length === 0) return;

  wishlistIds.forEach(id => handleAddToCart(id, 1));
  saveWishlist([]);
  renderWishlistPage();
  showToastNotification("All reserved masterworks transferred to your trunk.");
}

function clearFullWishlist() {
  if (confirm("Relinquish all pieces reserved in your Desiderata vault?")) {
    saveWishlist([]);
    renderWishlistPage();
  }
}

// ==========================================================================
// 6. PRODUCT DETAILS INSPECTION (product-details.html)
// ==========================================================================
let currentDetailQty = 1;

function renderProductDetailPage() {
  const titleEl = document.getElementById("detailTitle");
  if (!titleEl) return;

  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id") || "P101";
  const product = SWAROOP_CATALOG.find(p => p.id === productId) || SWAROOP_CATALOG[0];

  // Set Metadata
  titleEl.textContent = product.name;
  const crumbEl = document.getElementById("crumbProductName");
  if (crumbEl) crumbEl.textContent = product.name;

  const deptEl = document.getElementById("detailDeptBadge");
  if (deptEl) deptEl.textContent = product.department;

  const summaryEl = document.getElementById("detailSummary");
  if (summaryEl) summaryEl.textContent = product.description;

  const iconEl = document.getElementById("detailVisualIcon");
  if (iconEl) iconEl.textContent = product.icon;

  const thumb0 = document.getElementById("thumbIcon0");
  if (thumb0) thumb0.textContent = product.icon;

  // Prices
  const origPriceEl = document.getElementById("detailOriginalPrice");
  const currPriceEl = document.getElementById("detailCurrentPrice");
  if (origPriceEl) {
    origPriceEl.setAttribute("data-base-price", product.originalPrice);
    origPriceEl.textContent = formatPrice(product.originalPrice);
  }
  if (currPriceEl) {
    currPriceEl.setAttribute("data-base-price", product.basePrice);
    currPriceEl.textContent = formatPrice(product.basePrice);
  }

  // Specifications
  const specTableBody = document.querySelector("#detailSpecTable tbody");
  if (specTableBody && product.specs) {
    specTableBody.innerHTML = "";
    product.specs.forEach(s => {
      const tr = document.createElement("tr");
      tr.innerHTML = `<th>${s.key}</th><td>${s.val}</td>`;
      specTableBody.appendChild(tr);
    });
  }

  // Assign triggers
  window.currentViewingProductId = product.id;
}

function adjustDetailQty(delta) {
  currentDetailQty = Math.max(1, currentDetailQty + delta);
  const qtyEl = document.getElementById("detailQtyVal");
  if (qtyEl) qtyEl.textContent = currentDetailQty;
}

function switchDetailPhoto(index) {
  const display = document.getElementById("detailVisualIcon");
  const thumbs = document.querySelectorAll(".thumb-frame");
  thumbs.forEach((t, i) => t.classList.toggle("active", i === index));

  if (!display) return;
  const product = SWAROOP_CATALOG.find(p => p.id === window.currentViewingProductId) || SWAROOP_CATALOG[0];
  if (index === 0) display.textContent = product.icon;
  if (index === 1) display.textContent = "🔍";
  if (index === 2) display.textContent = "🏛️";
}

function switchDetailSpecTab(tabId) {
  const tabs = document.querySelectorAll(".detail-tab-btn");
  const panes = document.querySelectorAll(".detail-pane");

  panes.forEach(p => p.style.display = (p.id === tabId) ? "block" : "none");
  tabs.forEach(t => {
    t.classList.toggle("active", t.getAttribute("onclick").includes(tabId));
  });
}

function triggerDetailAddToCart() {
  if (window.currentViewingProductId) {
    handleAddToCart(window.currentViewingProductId, currentDetailQty);
  }
}

function triggerDetailBuyNow() {
  if (window.currentViewingProductId) {
    handleAddToCart(window.currentViewingProductId, currentDetailQty);
    window.location.href = "../user/checkout.html";
  }
}

function triggerDetailAddToWishlist() {
  if (window.currentViewingProductId) {
    handleAddToWishlist(window.currentViewingProductId);
  }
}

// ==========================================================================
// 7. CHECKOUT & DIPLOMATIC SETTLEMENT (checkout.html)
// ==========================================================================
function renderCheckoutPage() {
  const manifestList = document.getElementById("checkoutManifestList");
  if (!manifestList) return;

  const cart = getCart();
  if (cart.length === 0) {
    manifestList.innerHTML = `<p class="font-italic">No acquisitions packed in trunk.</p>`;
    return;
  }

  manifestList.innerHTML = "";
  let subtotalUSD = 0;

  cart.forEach(item => {
    const itemTotal = item.basePrice * item.quantity;
    subtotalUSD += itemTotal;
    const row = document.createElement("div");
    row.className = "mini-item-row";
    row.innerHTML = `
      <span>${item.name} × ${item.quantity}</span>
      <strong class="price-val" data-base-price="${itemTotal}">${formatPrice(itemTotal)}</strong>
    `;
    manifestList.appendChild(row);
  });

  const dutyUSD = subtotalUSD * 0.05;
  const grandTotalUSD = subtotalUSD + dutyUSD;

  const subEl = document.getElementById("checkoutSubtotal");
  const dutyEl = document.getElementById("checkoutDuty");
  const grandEl = document.getElementById("checkoutGrandTotal");

  if (subEl) subEl.textContent = formatPrice(subtotalUSD);
  if (dutyEl) dutyEl.textContent = formatPrice(dutyUSD);
  if (grandEl) grandEl.textContent = formatPrice(grandTotalUSD);
}

function togglePaymentFields(mode) {
  const cardBox = document.getElementById("cardPaymentBox");
  const wireBox = document.getElementById("wirePaymentBox");
  const codBox = document.getElementById("codPaymentBox");

  if (cardBox) cardBox.style.display = (mode === "card") ? "block" : "none";
  if (wireBox) wireBox.style.display = (mode === "wire") ? "block" : "none";
  if (codBox) codBox.style.display = (mode === "cod") ? "block" : "none";

  // Toggle required constraints on card inputs
  const cardInputs = cardBox ? cardBox.querySelectorAll("input") : [];
  cardInputs.forEach(i => i.required = (mode === "card"));
}

function handleCheckout(e) {
  e.preventDefault();
  const cart = getCart();
  if (cart.length === 0) {
    alert("Trunk is empty.");
    return;
  }

  const orderNumber = `SW-${Math.floor(1000 + Math.random() * 9000)}-MMXXVI`;
  const fullName = document.getElementById("shipFullName")?.value || "Distinguished Client";
  const address = document.getElementById("shipStreet")?.value || "Estate Residence";

  const newOrder = {
    ref: orderNumber,
    date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
    items: cart,
    recipient: fullName,
    address: address,
    status: "In Diplomatic Flight"
  };

  // Archive order
  const orders = JSON.parse(localStorage.getItem("swaroop_orders") || "[]");
  orders.unshift(newOrder);
  localStorage.setItem("swaroop_orders", JSON.stringify(orders));

  // Flush cart
  saveCart([]);

  alert(`Consignment sealed under reference ${orderNumber}. Redirecting to live diplomatic courier status.`);
  window.location.href = `order-tracking.html?order=${orderNumber}`;
}

// ==========================================================================
// 8. ORDER TRACKING LOOKUP (order-tracking.html)
// ==========================================================================
function renderTrackingPage() {
  const searchInput = document.getElementById("orderTrackingInput");
  if (!searchInput) return;

  const urlParams = new URLSearchParams(window.location.search);
  const queriedRef = urlParams.get("order") || "SW-8942-MMXXVI";

  searchInput.value = queriedRef;
  executeTrackingLookup(queriedRef);
}

function handleTrackOrder(e) {
  e.preventDefault();
  const input = document.getElementById("orderTrackingInput");
  if (input) executeTrackingLookup(input.value.trim());
}

function executeTrackingLookup(ref) {
  const orderEl = document.getElementById("trackOrderNumber");
  if (orderEl) orderEl.textContent = ref;

  const orders = JSON.parse(localStorage.getItem("swaroop_orders") || "[]");
  const matched = orders.find(o => o.ref.toUpperCase() === ref.toUpperCase());

  const badgeEl = document.getElementById("trackStatusBadge");
  if (matched) {
    if (badgeEl) badgeEl.textContent = matched.status;
  } else {
    if (badgeEl) badgeEl.textContent = "In Transit Via Royal Escort";
  }
}

// ==========================================================================
// 9. CLIENT DOSSIER & PROFILE (account.html)
// ==========================================================================
function switchAccountTab(tabId) {
  const panes = document.querySelectorAll(".account-tab-pane");
  const items = document.querySelectorAll(".dossier-tabs .tab-item");

  panes.forEach(p => p.style.display = (p.id === tabId) ? "block" : "none");
  items.forEach(i => {
    const isTarget = i.getAttribute("onclick") && i.getAttribute("onclick").includes(tabId);
    i.classList.toggle("active", !!isTarget);
  });
}

function handleUpdateProfile(e) {
  e.preventDefault();
  const name = document.getElementById("editFullName")?.value;
  const email = document.getElementById("editEmail")?.value;
  const honorific = document.getElementById("editHonorific")?.value;

  if (name) {
    localStorage.setItem("swaroop_user_name", `${honorific} ${name}`);
    document.getElementById("userDisplayName").textContent = `${honorific} ${name}`;
  }
  if (email) {
    localStorage.setItem("swaroop_user_email", email);
    document.getElementById("userDisplayEmail").textContent = email;
  }

  showToastNotification("Client Credentials sealed in sovereign records.");
}

function handleAddAddress(e) {
  e.preventDefault();
  const title = document.getElementById("estateName")?.value;
  const street = document.getElementById("streetAddress")?.value;
  const city = document.getElementById("estateCity")?.value;
  const postal = document.getElementById("estatePostal")?.value;

  const container = document.getElementById("addressListContainer");
  if (!container) return;

  const card = document.createElement("div");
  card.className = "address-card";
  card.innerHTML = `
    <span class="vintage-badge">SUBSIDIARY ESTATE</span>
    <h4>${title}</h4>
    <p>${street}</p>
    <p>${city}, ${postal}</p>
    <div class="address-actions">
      <button class="btn-text-link" onclick="this.closest('.address-card').remove()">Relinquish</button>
    </div>
  `;
  container.appendChild(card);
  e.target.reset();
  showToastNotification("Estate address enrolled.");
}

function handleLogout() {
  if (confirm("Relinquish active session from the sovereign registry?")) {
    localStorage.removeItem("swaroop_logged_in");
    window.location.href = "../auth/login.html";
  }
}

// ==========================================================================
// 10. AUTHENTICATION (login.html & register.html)
// ==========================================================================
function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail")?.value;
  localStorage.setItem("swaroop_logged_in", "true");
  if (email) localStorage.setItem("swaroop_user_email", email);
  window.location.href = "../user/account.html";
}

function handleRegister(e) {
  e.preventDefault();
  const honorific = document.getElementById("regHonorific")?.value || "Lord";
  const name = document.getElementById("regFullName")?.value;
  const email = document.getElementById("regEmail")?.value;
  const country = document.getElementById("regCountry")?.value;
  const pwd = document.getElementById("regPassword")?.value;
  const confirmPwd = document.getElementById("regConfirmPassword")?.value;

  if (pwd !== confirmPwd) {
    const alertBox = document.getElementById("registerAlert");
    if (alertBox) {
      alertBox.style.display = "block";
      alertBox.textContent = "Secret ciphers do not harmonize. Please re-enter.";
    }
    return;
  }

  localStorage.setItem("swaroop_user_name", `${honorific} ${name}`);
  localStorage.setItem("swaroop_user_email", email);
  if (country) localStorage.setItem("swaroop_country", country);
  localStorage.setItem("swaroop_logged_in", "true");

  alert("Petition of Membership granted. Welcome to the Sovereign Registry.");
  window.location.href = "../user/account.html";
}

// ==========================================================================
// 11. CATALOG FILTER & SORTING (categories & category pages)
// ==========================================================================
function filterProductsByMaterial(materialVal) {
  const cards = document.querySelectorAll(".product-grid .product-card");
  cards.forEach(card => {
    const mat = card.getAttribute("data-material");
    if (materialVal === "all" || mat === materialVal) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
}

function sortCatalogProducts(sortOrder) {
  const grid = document.querySelector(".product-grid");
  if (!grid) return;

  const cards = Array.from(grid.querySelectorAll(".product-card"));
  cards.sort((a, b) => {
    const priceA = parseFloat(a.querySelector(".current-price")?.getAttribute("data-base-price") || 0);
    const priceB = parseFloat(b.querySelector(".current-price")?.getAttribute("data-base-price") || 0);
    return sortOrder === "asc" ? priceA - priceB : priceB - priceA;
  });

  cards.forEach(c => grid.appendChild(c));
}

// ==========================================================================
// 12. BUTLER CONCIERGE CHAT (support-chat.html)
// ==========================================================================
function handleChatSend(e) {
  e.preventDefault();
  const input = document.getElementById("chatUserInput");
  if (!input) return;

  const userText = input.value.trim();
  if (!userText) return;

  appendChatBubble("Patron", userText, "user-row");
  input.value = "";

  // Butler Response Simulation
  setTimeout(() => {
    generateButlerResponse(userText);
  }, 750);
}

function sendQuickPrompt(promptText) {
  appendChatBubble("Patron", promptText, "user-row");
  setTimeout(() => {
    generateButlerResponse(promptText);
  }, 650);
}

function appendChatBubble(sender, message, rowClass) {
  const log = document.getElementById("chatMessageLog");
  if (!log) return;

  const row = document.createElement("div");
  row.className = `chat-bubble-row ${rowClass}`;
  const avatar = (rowClass === "user-row") ? "👤" : "🤵‍♂️";

  row.innerHTML = `
    <div class="bubble-avatar">${avatar}</div>
    <div class="bubble-content">
      <span class="bubble-sender">${sender}</span>
      <p>${message}</p>
      <span class="bubble-timestamp">Just now</span>
    </div>
  `;
  log.appendChild(row);
  log.scrollTop = log.scrollHeight;
}

function generateButlerResponse(query) {
  const q = query.toLowerCase();
  let reply = "I am at your complete disposal. Allow me to communicate with our Geneva Chancellery regarding your inquiry.";

  if (q.includes("track") || q.includes("consignment") || q.includes("where")) {
    reply = "Your consignments travel under diplomatic courier seal. You may inspect the live progress in your Dossier or navigate directly to our Consignment Tracking portal.";
  } else if (q.includes("currency") || q.includes("convert") || q.includes("exchange")) {
    const sov = getSovereignty();
    reply = `Your active sovereignty is set to ${sov.name} (${sov.code} ${sov.symbol.trim()}). You may alter your home territory at any moment via the Gateway on the top left navigation bar.`;
  } else if (q.includes("code") || q.includes("discount") || q.includes("privilege") || q.includes("autumn")) {
    reply = "By imperial warrant, you may present the voucher cipher **HERITAGE15** during acquisition review to receive 15% bespoke courtesy.";
  } else if (q.includes("inscript") || q.includes("bespoke") || q.includes("custom") || q.includes("gold")) {
    reply = "Custom monograms, heraldic crests, and 24K gold guilloché engravings are performed by hand in our Jura ateliers. Kindly indicate your chosen cipher to commence.";
  } else if (q.includes("telephone") || q.includes("ring") || q.includes("call")) {
    reply = "Our Mayfair and Geneva desks answer 24 hours a day at +1 (800) 555-SWAROOP.";
  }

  appendChatBubble("Chief Butler Archibald", reply, "butler-row");
}

function clearChatMessages() {
  const log = document.getElementById("chatMessageLog");
  if (log) {
    log.innerHTML = `
      <div class="chat-bubble-row butler-row">
        <div class="bubble-avatar">🤵‍♂️</div>
        <div class="bubble-content">
          <span class="bubble-sender">Chief Butler Archibald</span>
          <p>The parlor ledger has been scrubbed clean. How may I be of discreet service?</p>
          <span class="bubble-timestamp">Just now</span>
        </div>
      </div>
    `;
  }
}

// ==========================================================================
// 13. DOM INITIALIZER ON PAGE LOAD
// ==========================================================================
document.addEventListener("DOMContentLoaded", function() {
  // Sync Badges & Sovereign Currency
  updateHeaderBadges();
  updateGlobalCurrencyLabels();

  // Page specific boots
  renderCartPage();
  renderWishlistPage();
  renderProductDetailPage();
  renderCheckoutPage();
  renderTrackingPage();

  // User Profile Sync on account.html
  const storedName = localStorage.getItem("swaroop_user_name");
  const storedEmail = localStorage.getItem("swaroop_user_email");
  const nameEl = document.getElementById("userDisplayName");
  const emailEl = document.getElementById("userDisplayEmail");

  if (nameEl && storedName) nameEl.textContent = storedName;
  if (emailEl && storedEmail) emailEl.textContent = storedEmail;
});