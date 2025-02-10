import { pool } from '../../lib/database.js';

// Validar los datos del producto
function validateProduct(producto) {
  const errors = [];
  
  if (!producto.nombre || producto.nombre.trim().length === 0) {
    errors.push('El nombre del producto es requerido');
  }
  
  if (!producto.descripcion || producto.descripcion.trim().length === 0) {
    errors.push('La descripción del producto es requerida');
  }
  
  if (!producto.precio || isNaN(producto.precio) || parseFloat(producto.precio) <= 0) {
    errors.push('El precio debe ser un número mayor a 0');
  }
  
  if (!producto.imagen_url || !producto.imagen_url.match(/^https?:\/\/.+/)) {
    errors.push('La URL de la imagen debe ser una URL válida que comience con http:// o https://');
  }
  
  if (!producto.categoria || !['auriculares', 'computadoras', 'celulares'].includes(producto.categoria)) {
    errors.push('La categoría seleccionada no es válida');
  }
  
  return errors;
}

export async function POST({ request }) {
  try {
    const producto = await request.json();
    
    // Validar los datos del producto
    const errors = validateProduct(producto);
    if (errors.length > 0) {
      return new Response(JSON.stringify({ 
        error: 'Datos inválidos', 
        details: errors 
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
    
    // Convertir el precio a número
    producto.precio = parseFloat(producto.precio);
    
    const query = `
      INSERT INTO productos (nombre, descripcion, precio, imagen_url, categoria)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
    `;
    
    const values = [
      producto.nombre.trim(),
      producto.descripcion.trim(),
      producto.precio,
      producto.imagen_url.trim(),
      producto.categoria
    ];
    
    const result = await pool.query(query, values);
    
    return new Response(JSON.stringify(result.rows[0]), {
      status: 201,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error al agregar producto:', error);
    
    // Manejar errores específicos de la base de datos
    if (error.code === '23505') { // Error de duplicación
      return new Response(JSON.stringify({ 
        error: 'Ya existe un producto con ese nombre' 
      }), {
        status: 409,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
    
    return new Response(JSON.stringify({ 
      error: 'Error al guardar el producto en la base de datos' 
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}

export async function GET() {
  try {
    const result = await pool.query('SELECT * FROM productos ORDER BY id DESC');
    
    return new Response(JSON.stringify(result.rows), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error al obtener productos:', error);
    return new Response(JSON.stringify({ 
      error: 'Error al obtener los productos de la base de datos' 
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
