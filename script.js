const MENU_ITEMS = [
  {
    category: "dosa",
    name: "Plain Paper Oil",
    price: "₹50",
    description: "Classic crisp paper dosa from the live tawa."
  },
  {
    category: "dosa",
    name: "Fudina Paper",
    price: "₹70",
    description: "Mint-spiced paper dosa with a fresh kick."
  },
  {
    category: "dosa",
    name: "Garlic Paper",
    price: "₹90",
    description: "Garlic masala layering on golden paper dosa."
  },
  {
    category: "dosa",
    name: "Cheese Onion Paper",
    price: "₹100",
    description: "Onion crunch and cheese melt in every bite."
  },
  {
    category: "dosa",
    name: "Silence Red Cheese Chilly Paper",
    price: "₹110",
    description: "Red-chilly cheese special with bold heat."
  },
  {
    category: "dosa",
    name: "Masala Dosa Butter",
    price: "₹130",
    description: "Buttery masala dosa, balanced and filling."
  },
  {
    category: "dosa",
    name: "Gwalior Dosa",
    price: "₹160",
    description: "Street-style stuffed dosa with punchy flavor."
  },
  {
    category: "dosa",
    name: "Cheese Paneer Masala",
    price: "₹170",
    description: "Rich paneer filling with generous cheese."
  },
  {
    category: "dosa",
    name: "Pizza Dosa",
    price: "₹210",
    description: "Fusion dosa topped with pizza-style notes."
  },
  {
    category: "dosa",
    name: "Cheese Maggi Dosa",
    price: "₹210",
    description: "Khaugali favorite with Maggi masala twist."
  },

  {
    category: "maizur",
    name: "Surti Maisur Oil",
    price: "₹130",
    description: "Surti-style maisur with smooth spice body."
  },
  {
    category: "maizur",
    name: "Maisur Butter",
    price: "₹150",
    description: "Butter-finished maisur, deep and aromatic."
  },
  {
    category: "maizur",
    name: "Cheese Maisur",
    price: "₹170",
    description: "Creamy cheese upgrade on classic maisur."
  },
  {
    category: "maizur",
    name: "Cheese Paneer Maisur",
    price: "₹180",
    description: "Cheese plus paneer in signature gravy style."
  },
  {
    category: "maizur",
    name: "Corn Chilly Maisur",
    price: "₹190",
    description: "Sweet corn and chili balance in rich gravy."
  },
  {
    category: "maizur",
    name: "Kaju Paneer Maisur",
    price: "₹220",
    description: "Cashew and paneer premium maisur blend."
  },
  {
    category: "maizur",
    name: "Patiyala Maisur",
    price: "₹230",
    description: "Hearty patiyala-style tawa gravy favorite."
  },
  {
    category: "maizur",
    name: "Green Gotala",
    price: "₹240",
    description: "Herb-forward gotala with rich texture."
  },
  {
    category: "maizur",
    name: "Schezwan Gotala",
    price: "₹240",
    description: "Indo-Chinese gotala heat with smoky finish."
  },
  {
    category: "maizur",
    name: "Khaugali Sp. Maisur",
    price: "₹270",
    description: "House signature maisur loaded and bold."
  },

  {
    category: "street",
    name: "Pavbhaji",
    price: "₹120",
    description: "Classic buttery pavbhaji with fresh pav."
  },
  {
    category: "street",
    name: "Butter Pavbhaji",
    price: "₹130",
    description: "Extra butter finish for richer flavor."
  },
  {
    category: "street",
    name: "Green Pavbhaji",
    price: "₹160",
    description: "Green masala profile with smooth texture."
  },
  {
    category: "street",
    name: "Paneer Tukda Pavbhaji",
    price: "₹180",
    description: "Paneer-loaded pavbhaji for fuller taste."
  },
  {
    category: "street",
    name: "Cheese Pavbhaji",
    price: "₹180",
    description: "Cheese-melt pavbhaji customer favorite."
  },
  {
    category: "street",
    name: "Gotalo Pavbhaji",
    price: "₹210",
    description: "Khaugali famous gotalo-style pavbhaji."
  },
  {
    category: "street",
    name: "Tawa Pulav",
    price: "₹120",
    description: "Classic tawa pulav with balanced masala."
  },
  {
    category: "street",
    name: "Paneer Pulav",
    price: "₹160",
    description: "Paneer chunks folded into fragrant pulav."
  },
  {
    category: "street",
    name: "Cheese Pulav",
    price: "₹160",
    description: "Cheese-tossed pulav with comforting spice."
  },
  {
    category: "street",
    name: "Khaugali Sp. Pulav",
    price: "₹190",
    description: "House special pulav with signature masala."
  },

  {
    category: "extras",
    name: "Manchurian Dry / Gravy",
    price: "₹90 / ₹120",
    description: "Dry or gravy style, crispy and saucy both."
  },
  {
    category: "extras",
    name: "Schezwan Manchurian",
    price: "₹100 / ₹130",
    description: "Spicy schezwan coat with Indo-Chinese bite."
  },
  {
    category: "extras",
    name: "Noodles (Regular / Hakka / Schezwan)",
    price: "₹90 / ₹120",
    description: "Stir-fried noodles in your preferred style."
  },
  {
    category: "extras",
    name: "Manchau Soup",
    price: "₹90 / ₹120",
    description: "Hot manchau soup with crunchy garnish."
  },
  {
    category: "extras",
    name: "Hot and Sour Soup",
    price: "₹100 / ₹120",
    description: "Tangy and spicy soup for evening cravings."
  },
  {
    category: "extras",
    name: "Paneer Chilli / Schezwan / Singapuri",
    price: "₹230",
    description: "Paneer tossed in your selected sauce style."
  },
  {
    category: "extras",
    name: "Chinese Bhel / Bombay Bhel",
    price: "₹150 / ₹170",
    description: "Crisp and chatpata bhel combos from tawa."
  },
  {
    category: "extras",
    name: "Jain Pavbhaji",
    price: "₹150",
    description: "Jain-friendly pavbhaji with full flavor."
  },
  {
    category: "extras",
    name: "Jain Gotalo",
    price: "₹220",
    description: "Jain gotalo version made to order."
  },
  {
    category: "extras",
    name: "Masala Butter Milk / Mineral Water",
    price: "₹20 / ₹10",
    description: "Cool-down essentials for complete meal."
  }
];

function updateOpenStatus() {
  const el = document.getElementById("open-status");
  if (!el) return;

  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const ist = new Date(utc + 5.5 * 3600000);
  const totalMins = ist.getHours() * 60 + ist.getMinutes();

  const openMins = 19 * 60 + 30;
  const closeMins = 23 * 60;
  const soonMins = openMins - 60;

  if (totalMins >= openMins && totalMins < closeMins) {
    const minsLeft = closeMins - totalMins;
    const hoursLeft = Math.floor(minsLeft / 60);
    const minsRem = minsLeft % 60;
    const timeLeft = hoursLeft > 0 ? `${hoursLeft}h ${minsRem}m left` : `${minsRem} mins left`;
    el.textContent = `Open Now · ${timeLeft}`;
    el.className = "status-open";
  } else if (totalMins >= soonMins && totalMins < openMins) {
    el.textContent = `Opens in ${openMins - totalMins} mins`;
    el.className = "status-soon";
  } else {
    el.textContent = "Closed · Opens at 7:30 PM";
    el.className = "status-closed";
  }
}

function renderMenu(filterValue) {
  const menuGrid = document.getElementById("menu-grid");
  if (!menuGrid) return;

  const items =
    filterValue === "all"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === filterValue);

  menuGrid.innerHTML = items
    .map(
      (item) => `
      <article class="menu-item">
        <div class="menu-item-head">
          <h3>${item.name}</h3>
          <span>${item.price}</span>
        </div>
        <p>${item.description}</p>
      </article>
    `
    )
    .join("");
}

function initMenuFilters() {
  const filters = Array.from(document.querySelectorAll(".filter"));
  if (!filters.length) return;

  filters.forEach((button) => {
    button.addEventListener("click", () => {
      filters.forEach((btn) => {
        btn.classList.remove("active");
        btn.setAttribute("aria-selected", "false");
      });
      button.classList.add("active");
      button.setAttribute("aria-selected", "true");
      renderMenu(button.dataset.filter || "all");
    });
  });

  renderMenu("all");
}

function initHeader() {
  const header = document.querySelector(".site-header");
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("site-nav");

  if (!header || !toggle || !nav) return;

  const syncHeader = () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  syncHeader();
  window.addEventListener("scroll", syncHeader, { passive: true });

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Node)) return;
    if (!nav.contains(target) && !toggle.contains(target)) {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function initLoader() {
  const loader = document.getElementById("loader");
  if (!loader) return;

  window.setTimeout(() => {
    loader.classList.add("hidden");
  }, 1200);
}

function initYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
}

initLoader();
initHeader();
initMenuFilters();
initYear();
updateOpenStatus();
window.setInterval(updateOpenStatus, 60000);
