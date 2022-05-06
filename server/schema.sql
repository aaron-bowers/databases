DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat; /* run use chat in mysql terminal to be able to access the chat database */

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT AUTO_INCREMENT,
  message_text VARCHAR(1000),
  id_users INT,
  roomname VARCHAR(20),
  PRIMARY KEY (id)
);

/* Create other tables and define schemas for them here! */

CREATE TABLE users (
  /* Describe your table here.*/
  id INT AUTO_INCREMENT,
  username VARCHAR(20),
  PRIMARY KEY (id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/