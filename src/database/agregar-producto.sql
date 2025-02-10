-- Primero, nos aseguramos de que la tabla exista
CREATE TABLE IF NOT EXISTS productos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    descripcion TEXT,
    imagen_url VARCHAR(255),
    categoria VARCHAR(50),
    stock INTEGER DEFAULT 0
);

-- Insertar productos de ejemplo
INSERT INTO productos (nombre, precio, descripcion, imagen_url, categoria, stock) VALUES
('Mate Imperial', 15000.00, 'Mate de calabaza premium con detalles en alpaca', '/images/mate-imperial.jpg', 'Mates', 10),
('Bombilla Alpaca', 8000.00, 'Bombilla artesanal de alpaca con filtro', '/images/bombilla-alpaca.jpg', 'Mates', 15),
('Termo Stanley', 45000.00, 'Termo de acero inoxidable 1L', '/images/termo-stanley.jpg', 'Termos', 8),
('Yerba Mate Playadito', 2500.00, 'Yerba mate premium 1kg', '/images/yerba-playadito.jpg', 'Yerba', 50),
('Set Matero Completo', 25000.00, 'Set completo con mate, bombilla y yerbera', '/images/set-matero.jpg', 'Sets', 5);
