import pool from '../lib/database.js';

export async function GET({ url }) {
  try {
    const searchTerm = url.searchParams.get('search');
    
    if (searchTerm) {
      const query = "SELECT * FROM productos WHERE nombre LIKE '%' || $1 || '%'";
      const { rows } = await pool.query(query, [searchTerm]);
      return new Response(JSON.stringify({ productos: rows }), {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      });
    } else {
      const { rows } = await pool.query('SELECT * FROM productos');
      return new Response(JSON.stringify({ productos: rows }), {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
  } catch (error) {
    console.error('Error en la consulta:', error);
    return new Response(JSON.stringify({ 
      error: 'Error al obtener los productos',
      details: error.message,
      code: error.code
    }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}

export async function POST({ request }) {
  try {
    const data = await request.json();
    
    if (!data.nombre || data.precio <= 0) {
      return new Response(JSON.stringify({
        error: 'Nombre y precio son requeridos. El precio debe ser mayor a 0'
      }), {
        status: 400,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }

    const query = 'INSERT INTO productos (nombre, precio) VALUES ($1, $2) RETURNING id';
    const values = [data.nombre, data.precio];
    const { rows } = await pool.query(query, values);
    
    return new Response(JSON.stringify({
      id: rows[0].id,
      message: 'Producto creado exitosamente'
    }), {
      status: 201,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error('Error al crear producto:', error);
    return new Response(JSON.stringify({
      error: 'Error al crear el producto',
      details: error.message,
      code: error.code
    }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}