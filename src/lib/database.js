import pkg from 'pg';
const { Pool } = pkg;

export const pool = new Pool({
  user: 'postgres',
  password: '1341410',
  host: 'localhost',
  port: 5432,
  database: 'productos_data_base',
  ssl: false
});

// Función para verificar la conexión
async function testConnection() {
  try {
    const client = await pool.connect();
    console.log('Conexión exitosa a la base de datos');
    const result = await client.query('SELECT NOW()');
    console.log('Prueba de consulta exitosa:', result.rows[0]);
    client.release();
  } catch (err) {
    console.error('Error al conectar con la base de datos:', err.message);
    console.error('Stack trace:', err.stack);
  }
}

// Ejecutar la prueba de conexión
testConnection();

export default pool;
