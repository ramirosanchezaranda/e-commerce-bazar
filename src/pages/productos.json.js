import db from '../../../database.js';

export async function get() {
  const productos = db.prepare('SELECT * FROM productos').all();
  return {
    body: productos
  };
}