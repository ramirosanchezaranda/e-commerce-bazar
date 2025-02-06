import Database from 'better-sqlite3';

const db = new Database('database.db');

// Crear tabla
db.exec(`
  CREATE TABLE IF NOT EXISTS productos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT,
    precio REAL,
    categoria TEXT,
    descripcion TEXT
  )
`);

// Importar datos desde CSV (ejecutar una vez)
const importCSV = () => {
  const csvData = fs.readFileSync('productos.csv', 'utf8');
  const records = csvData.split('\n').slice(1);
  
  const insert = db.prepare(`
    INSERT INTO productos (nombre, precio, categoria, descripcion)
    VALUES (?, ?, ?, ?)
  `);

  records.forEach(row => {
    const [nombre, precio, categoria, descripcion] = row.split(',');
    insert.run(nombre, parseFloat(precio), categoria, descripcion);
  });
};

// Descomenta para importar inicialmente
// importCSV();

export default db;