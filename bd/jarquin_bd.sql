CREATE DATABASE IF NOT EXISTS bd_jarquin;

USE bd_jarquin;

CREATE TABLE IF NOT EXISTS person (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255),
    apellido VARCHAR(255),
    fechaNacimiento DATE,
    puesto VARCHAR(255),
    sueldo DECIMAL(10, 2)
);

CREATE USER 'conexion'@'localhost' IDENTIFIED BY 'CS_TEST123';
GRANT ALL PRIVILEGES ON bd_jarquin.* TO 'conexion'@'localhost';