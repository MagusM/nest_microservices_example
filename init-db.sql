CREATE DATABASE IF NOT EXISTS nestjs_db;
CREATE USER 'testuser'@'%' IDENTIFIED BY 'testuser123';
GRANT ALL PRIVILEGES ON nestjs_db.* TO 'testuser'@'%';
FLUSH PRIVILEGES;
