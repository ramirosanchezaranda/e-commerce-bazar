import db from '../../../database.js';

export async function post({ request }) {
  const data = await request.json();
  
  const stmt = db.prepare(`
    INSERT INTO productos (nombre, precio, categoria, descripcion)
    VALUES (?, ?, ?, ?)
  `);
  
  const result = stmt.run(data.nombre, data.precio, data.categoria, data.descripcion);
  
  return {
    status: 201,
    body: { id: result.lastInsertRowid }
  };
}