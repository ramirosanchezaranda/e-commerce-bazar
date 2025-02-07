export async function getProducts(search = '') {
  const baseUrl = import.meta.env.DEV 
    ? 'http://localhost:3000'  // URL de desarrollo
    : 'https://tu-dominio.com'; // URL de producción cuando despliegues

  const searchParams = search ? `?search=${encodeURIComponent(search)}` : '';
  const response = await fetch(`${baseUrl}/productos.json${searchParams}`);
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.details || error.error || 'Error al obtener los productos');
  }
  
  const { productos } = await response.json();
  return productos;
}
