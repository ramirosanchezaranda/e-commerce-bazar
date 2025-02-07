import csv
import re

def clean_price(price):
    if not price:
        return 0
    # Eliminar el símbolo de peso y las comas
    price = price.replace('$', '').replace(',', '')
    return float(price)

# Leer el archivo CSV y generar comandos SQL
with open('src/components/Catálogo.csv', 'r', encoding='utf-8') as file:
    reader = csv.reader(file)
    next(reader)  # Saltar la cabecera
    
    # Abrir archivo SQL para escribir
    with open('import_data.sql', 'w', encoding='utf-8') as sql_file:
        # Primero crear la tabla
        sql_file.write("""
CREATE TABLE IF NOT EXISTS productos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    precio_compra DECIMAL(10,2) NOT NULL
);

-- Borrar datos existentes
TRUNCATE TABLE productos RESTART IDENTITY;

""")
        
        # Insertar los datos
        for row in reader:
            if len(row) >= 5:  # Asegurarse de que la fila tiene suficientes columnas
                id_producto = row[0].strip()
                nombre = row[1].strip()
                precio_compra = clean_price(row[3])
                precio_venta = clean_price(row[5])
                
                if nombre and precio_venta > 0:  # Solo insertar si tenemos nombre y precio
                    sql_file.write(
                        f"INSERT INTO productos (nombre, precio, precio_compra) VALUES ('{nombre}', {precio_venta}, {precio_compra});\n"
                    )

print("Archivo SQL generado con éxito. Revisa import_data.sql")
