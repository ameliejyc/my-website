BEGIN;

DROP TABLE IF EXISTS blog, users CASCADE;

CREATE TABLE blog (
id           SERIAL        PRIMARY KEY,
title        VARCHAR(50)   NOT NULL,
content      TEXT          NOT NULL,
submit_date  VARCHAR(10)   NOT NULL
);

INSERT INTO blog (title, content, submit_date) VALUES
('The world needs another coding blog', 'Here is the content', 'The date');


CREATE TABLE users (
id            SERIAL          PRIMARY KEY,
username      VARCHAR(20),
password      VARCHAR(20)
);

INSERT INTO users (username, password) VALUES
('ameliejyc', 'hashedpw?');

COMMIT;
