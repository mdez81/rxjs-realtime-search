CREATE DATABASE library_2;

USE library_2;

CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    published_year INT
);

INSERT INTO books (title, author, published_year) VALUES
('1984', 'George Orwell', 1949),
('To Kill a Mockingbird', 'Harper Lee', 1960),
('The Great Gatsby', 'F. Scott Fitzgerald', 1925),
('Moby Dick', 'Herman Melville', 1851),
('Pride and Prejudice', 'Jane Austen', 1813);