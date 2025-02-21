// Variables iniciales desde el servidor
const { itemsPerPage, products: initialProducts } = window.initialData || { itemsPerPage: 12, products: [] };
let currentPage = 1;

// Función para cargar más productos
const loadMoreProducts = async () => {
  const start = currentPage * itemsPerPage;
  const end = start + itemsPerPage - 1;
  
  try {
    const response = await fetch(`/api/productos?start=${start}&end=${end}`);
    if (!response.ok) throw new Error('Error al cargar más productos');
    
    const data = await response.json();
    
    // Agregar nuevos productos a la grid
    if (data && data.length > 0) {
      const productGrid = document.querySelector('.grid');
      if (productGrid) {
        data.forEach(product => {
          const productElement = createProductElement(product);
          productGrid.appendChild(productElement);
        });
        currentPage++;
      }
    }
  } catch (error) {
    console.error('Error cargando más productos:', error.message);
  }
};

// Implementar infinite scroll
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loadMoreProducts();
    }
  });
}, observerOptions);

// Observar el último elemento
const lastProduct = document.querySelector('.grid > article:last-child');
if (lastProduct) {
  observer.observe(lastProduct);
}

// Función auxiliar para crear elementos de producto
function createProductElement(product) {
  const article = document.createElement('article');
  article.className = 'bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden';
  article.dataset.productId = String(product.id);
  
  article.innerHTML = `
    <div class="aspect-w-16 aspect-h-9 relative">
      <img 
        src="${product.image_url}" 
        alt="Imagen de ${product.name}"
        class="w-full h-48 object-cover"
        loading="lazy"
        onerror="this.onerror=null; this.src='/images/placeholder.jpg';"
      />
    </div>
    <div class="p-4">
      <h3 class="font-semibold text-lg mb-2">${product.name}</h3>
      ${product.description ? `
        <p class="text-gray-600 text-sm mb-3 line-clamp-2">${product.description}</p>
      ` : ''}
      <p class="text-blue-600 font-bold text-xl mb-4">
        ${new Intl.NumberFormat('es-AR', {
          style: 'currency',
          currency: 'ARS'
        }).format(product.price)}
      </p>
      <button 
        type="button"
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        data-product='${JSON.stringify({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image_url,
          quantity: 1
        })}'
      >
        Agregar al carrito
      </button>
    </div>
  `;
  
  return article;
}
export const products = [] // your products array or object