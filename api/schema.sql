CREATE DATABASE mecommerce;
CREATE USER app WITH PASSWORD 'app';
GRANT ALL PRIVILEGES ON DATABASE mecommerce TO app;
\connect mecommerce