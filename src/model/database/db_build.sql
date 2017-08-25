BEGIN;

DROP TABLE IF EXISTS blog, users CASCADE;

CREATE TABLE blog (
id           SERIAL        PRIMARY KEY,
title        VARCHAR(50)   NOT NULL,
content      TEXT          NOT NULL,
date         ???           ???
);

INSERT INTO blog (title, content, date) VALUES
('The world needs another coding blog', 'Here is the content', 'And here is the date');


CREATE TABLE users (
id            SERIAL                          PRIMARY KEY,
username      INTEGER REFERENCES planets(id)  ON UPDATE CASCADE,
password      VARCHAR(20)
);

INSERT INTO users (username, password) VALUES
('ameliejyc', 'hashedpw?');

COMMIT;
