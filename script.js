const whatsappNumber = "201234567890"; // استبدل الرقم برقمك مع كود الدولة

const products = [
  {
    id: 1,
    name: "منتج 1",
    description: "وصف المنتج الأول",
    price: "100 جنيه",
    image: "https://via.placeholder.com/220x150?text=منتج+1"
  },
  {
    id: 2,
    name: "منتج 2",
    description: "وصف المنتج الثاني",
    price: "150 جنيه",
    image: "https://via.placeholder.com/220x150?text=منتج+2"
  },
  {
    id: 3,
    name: "منتج 3",
    description: "وصف المنتج الثالث",
    price: "200 جنيه",
    image: "https://via.placeholder.com/220x150?text=منتج+3"
  }
];

function displayProducts() {
  const container = document.getElementById("products");
  container.innerHTML = "";

  products.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.className = "product";

    productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p class="price">${product.price}</p>
      <div class="product-buttons">
        <button onclick="addToCart('${product.name}')">أضف للسلة</button>
        <a href="https://wa.me/${whatsappNumber}?text=${encodeURIComponent('أريد استفسار عن المنتج: ' + product.name)}" target="_blank" rel="noopener noreferrer" title="اتصل عبر واتساب">
          واتساب
          <svg class="whatsapp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M20.52 3.48A11.853 11.853 0 0012 0C5.373 0 0 5.373 0 12c0 2.11.55 4.07 1.51 5.8L0 24l6.48-1.5A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12 0-3.22-1.26-6.26-3.48-8.52zm-8.75 17.17a8.854 8.854 0 01-4.54-1.28l-.32-.19-3.84.89.81-3.73-.21-.33a8.822 8.822 0 011.53-10.86 8.81 8.81 0 0112.46 1.92 8.795 8.795 0 01-6.63 13.38zM17 15.17c-.29 0-1.65-.81-1.9-.9-.25-.09-.43-.13-.61.13-.18.25-.69.9-.85 1.08-.16.18-.32.2-.6.07a7.555 7.555 0 01-2.22-1.37 8.34 8.34 0 01-1.55-1.92c-.16-.28-.02-.43.13-.57.13-.12.29-.31.43-.47.14-.16.18-.28.28-.47.1-.18.05-.34-.02-.47-.07-.13-.61-1.48-.84-2.04-.22-.54-.45-.47-.61-.48-.16 0-.34 0-.52 0-.18 0-.47.07-.72.34-.25.27-.96.94-.96 2.3 0 1.36.98 2.68 1.11 2.87.13.18 1.9 2.9 4.62 4.06 3.22 1.37 3.67 1.14 4.33 1.07.66-.07 2.15-.88 2.45-1.73.3-.85.3-1.57.21-1.73-.09-.16-.34-.27-.63-.47z"/>
          </svg>
        </a>
      </div>
    `;

    container.appendChild(productDiv);
  });
}

function showAlert(message) {
  const alertBox = document.getElementById("alert-box");
  alertBox.textContent = message;
  alertBox.style.display = "block";

  setTimeout(() => {
    alertBox.style.display = "none";
  }, 2000);
}

function addToCart(productName) {
  showAlert(`تم إضافة "${productName}" إلى السلة!`);
}

window.onload = () => {
  displayProducts();
};
