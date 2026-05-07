// Products will be loaded from Supabase
let products = [];

// Load products from Supabase
async function loadProducts() {
  const grid = document.getElementById('products-grid');
  
  try {
    const { data, error } = await window.sbClient
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('Error loading products:', error);
      grid.innerHTML = '<div style="text-align: center; padding: 40px; grid-column: 1/-1;">Помилка завантаження</div>';
      return;
    }
    
    products = data || [];
    renderProducts(products);
  } catch (err) {
    console.error('Error:', err);
    grid.innerHTML = '<div style="text-align: center; padding: 40px; grid-column: 1/-1;">Помилка підключення</div>';
  }
}

// Render products
function renderProducts(filteredProducts) {
  const grid = document.getElementById('products-grid');
  
  if (filteredProducts.length === 0) {
    grid.innerHTML = '<div style="text-align: center; padding: 40px; grid-column: 1/-1;">Товарів не знайдено</div>';
    return;
  }
  
  grid.innerHTML = '';
  
  filteredProducts.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.category = product.category;
    
    card.innerHTML = `
      <div class="product-image">${product.emoji || '🪦'}</div>
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-category">${product.category === 'granite' ? 'Гранітні' : 'Мармурові'}</p>
        <p class="product-price">${product.price}</p>
      </div>
    `;
    
    grid.appendChild(card);
  });
}

// Initial load
loadProducts();

// Filter buttons
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Update active button
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    // Filter products
    const filter = btn.dataset.filter;
    if (filter === 'all') {
      renderProducts(products);
    } else {
      const filtered = products.filter(p => p.category === filter);
      renderProducts(filtered);
    }
  });
});

// Search
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = products.filter(p => 
    p.name.toLowerCase().includes(query) || 
    p.category.includes(query)
  );
  renderProducts(filtered);
});
