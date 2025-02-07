
CREATE TABLE IF NOT EXISTS productos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    precio_compra DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Borrar datos existentes
TRUNCATE TABLE productos RESTART IDENTITY;

INSERT INTO productos (nombre, precio, precio_compra) VALUES ('AURICULAR C/MICROFONO CNW21154', 9155.0, 4577.0);
INSERT INTO productos (nombre, precio, precio_compra) VALUES ('AURICULAR E6S BT PRO', 9639.0, 4820.0);
INSERT INTO productos (nombre, precio, precio_compra) VALUES ('AURICULAR M90PRO', 11730.0, 5865.0);
INSERT INTO productos (nombre, precio, precio_compra) VALUES ('AURICULAR VINCHA P9PRO/P9PLUS', 15275.0, 7637.0);
INSERT INTO productos (nombre, precio, precio_compra) VALUES ('AURICULAR- MA6S', 7956.0, 3978.0);
INSERT INTO productos (nombre, precio, precio_compra) VALUES ('AURICULARES GAMER- X15', 11883.0, 5942.0);
INSERT INTO productos (nombre, precio, precio_compra) VALUES ('MOPA CENTRIFUGA 360 SPRINT', 27107.0, 13553.0);
INSERT INTO productos (nombre, precio, precio_compra) VALUES ('ASPIRADORA 3EN1 AS228GZ000011', 12750.0, 6375.0);
INSERT INTO productos (nombre, precio, precio_compra) VALUES ('BALANZA DIGITAL DE COCINA 10KG', 8033.0, 4016.0);
INSERT INTO productos (nombre, precio, precio_compra) VALUES ('JARRA ELECT.CORTE MATE-CTM-OSR9145', 30524.0, 15262.0);
INSERT INTO productos (nombre, precio, precio_compra) VALUES ('MOPA CENTRIFUGA BELITA', 29427.0, 14714.0);
INSERT INTO productos (nombre, precio, precio_compra) VALUES ('KIT MARCADORES x 6pcs-MD208/205', 4182.0, 2091.0);
INSERT INTO productos (nombre, precio, precio_compra) VALUES ('SET GOMA X30pcs- ED-50', 3239.0, 1619.0);
INSERT INTO productos (nombre, precio, precio_compra) VALUES ('TENDER VERTICAL BELITA', 47685.0, 23843.0);
INSERT INTO productos (nombre, precio, precio_compra) VALUES ('CORTADOR MANDOLINA VERDURA RAKA1/R13', 23103.0, 11552.0);
INSERT INTO productos (nombre, precio, precio_compra) VALUES ('ARO SELFIE 12" RGB MJ30KA', 33456.0, 16728.0);
INSERT INTO productos (nombre, precio, precio_compra) VALUES ('CABLE TIPO C W2101A/W2101', 2984.0, 1492.0);
INSERT INTO productos (nombre, precio, precio_compra) VALUES ('PIZARRA MAGICA9" ANIMALITOS-WTM19-21', 8186.0, 4093.0);
INSERT INTO productos (nombre, precio, precio_compra) VALUES ('JOYSTICK JS3', 14918.0, 7459.0);
INSERT INTO productos (nombre, precio, precio_compra) VALUES ('ANAFE ELECTRICO DOBLE 2000W HPS204', 48195.0, 24098.0);
INSERT INTO productos (nombre, precio, precio_compra) VALUES ('VELADOR ESTRELLA 7969KA', 10761.0, 5381.0);
INSERT INTO productos (nombre, precio, precio_compra) VALUES ('CARGADOR 3.0 MICRO USB V8 h2204 2205', 3188.0, 1594.0);
INSERT INTO productos (nombre, precio, precio_compra) VALUES ('ESPEJO LED PLEGABLE- XJ988', 14459.0, 7229.0);
INSERT INTO productos (nombre, precio, precio_compra) VALUES ('RAQUETA MATA MOSQUITO-mkt-4460', 14453.0, 7227.0);
INSERT INTO productos (nombre, precio, precio_compra) VALUES ('CANASTA BOLSO MATERO', 12929.0, 6464.0);
INSERT INTO productos (nombre, precio, precio_compra) VALUES ('PLANCHITA DE PELO-OSR196//EL57', 4488.0, 2244.0);
INSERT INTO productos (nombre, precio, precio_compra) VALUES ('PLANCHITA DE PELO- GW-7029', 19227.0, 9614.0);
INSERT INTO productos (nombre, precio, precio_compra) VALUES ('SECADOR Y PLANCHITA- OM2433-VT725', 44982.0, 22491.0);
INSERT INTO productos (nombre, precio, precio_compra) VALUES ('SECADOR DE PELO OM SY2436', 23894.0, 11947.0);
INSERT INTO productos (nombre, precio, precio_compra) VALUES ('SECADOR DE PELO OSR OR9046', 27948.0, 13974.0);
