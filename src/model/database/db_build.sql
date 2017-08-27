BEGIN;

DROP TABLE IF EXISTS blog, users CASCADE;

CREATE TABLE blog (
id           SERIAL        PRIMARY KEY,
title        VARCHAR(50)   NOT NULL,
ingredients  TEXT          NOT NULL,
method       TEXT          NOT NULL
);

INSERT INTO blog (title, ingredients, method) VALUES
('Vegan dreams part I', 'Ingredients list', 'Method'),
('Vegan dreams part II', 'Ingredients', 'Method');


CREATE TABLE users (
id            SERIAL          PRIMARY KEY,
username      VARCHAR(20),
password      VARCHAR(20)
);

INSERT INTO users (username, password) VALUES
('ameliejyc', 'hashedpw?');

COMMIT;
