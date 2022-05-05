CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  messages_id INT,
  username varchar(255),
  text varchar(255),
  roomname varchar(255),
  PRIMARY KEY (messages_id)
);


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

