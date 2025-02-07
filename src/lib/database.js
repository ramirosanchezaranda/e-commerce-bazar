import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'juanpablo',
  password: '1341410',
  host: 'localhost',
  port: 5432,
  database: 'productos_data_base'
});

// Verificar la conexión
pool.connect((err, client, release) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
  } else {
    console.log('Connected to database successfully');
    release();
  }
});

export default pool;
