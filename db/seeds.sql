USE burgers_db;
INSERT INTO burgers (burger_name, devoured) VALUES ('Bacon Blue Cheese', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('The Works', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Plain Jane', false);

SELECT * FROM burgers;

DELETE FROM burgers WHERE id >= 4;
