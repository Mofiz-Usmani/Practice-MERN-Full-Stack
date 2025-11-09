CREATE TABLE user (
    id VARCHAR(50) PRIMARY KEY,
    username VARCHAR(255) UNIQUE,
    email VARCHAR(255) UNIQUE not null,
    password VARCHAR(255) not null,
);