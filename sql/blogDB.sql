-- Crear base de datos y seleccionarla
CREATE DATABASE blogDB;
USE blogDB;

-- Crear tabla de autores
CREATE TABLE authors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    image VARCHAR(255)
);

-- Crear tabla de posts
CREATE TABLE posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    category VARCHAR(100),
    authorId INT,
    FOREIGN KEY (authorId) REFERENCES authors(id)
);

-- Insertar datos en autores
INSERT INTO authors (name, email, image) VALUES
('Ana Gómez', 'ana@example.com', 'https://example.com/images/ana.jpg'),
('Luis Martínez', 'luis@example.com', 'https://example.com/images/luis.jpg'),
('Carla Torres', 'carla@example.com', 'https://example.com/images/carla.jpg');

-- Insertar datos en posts
INSERT INTO posts (title, description, category, authorId) VALUES
('Introducción a Node.js', 'Una guía básica para comenzar con Node.js', 'Programación', 1),
('Aprendiendo MySQL', 'Conceptos clave para manejar bases de datos relacionales', 'Bases de Datos', 2),
('ExpressJS intermedio', 'Cómo trabajar con rutas y middlewares en ExpressJS', 'Backend', 1),
('Diseño de APIs REST', 'Buenas prácticas para estructurar APIs modernas', 'Arquitectura', 3);
