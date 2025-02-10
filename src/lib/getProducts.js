import { pool } from './database.js';

export async function getProducts(search = '') {
  try {
    let query = 'SELECT * FROM productos';
    let values = [];

    if (search) {
      query += ' WHERE nombre ILIKE $1 OR descripcion ILIKE $1';
      values = [`%${search}%`];
    }

    console.log('Ejecutando query:', query, 'con valores:', values); // Debug log
    const { rows } = await pool.query(query, values);
    console.log('Resultados obtenidos:', rows); // Debug log
    return rows;
  } catch (error) {
    console.error('Error detallado al obtener productos:', error.message, error.stack);
    throw error; // Lanzar el error original para ver más detalles
  }
}
