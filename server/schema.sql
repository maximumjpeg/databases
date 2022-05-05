CREATE DATABASE chat;

USE chat;

CREATE TABLE rooms (
  room_id INT,
  room_name varchar(255),
  PRIMARY KEY (room_id)
);

CREATE TABLE users (
  /* Describe your table here.*/
  user_id INT,
  name varchar(255),
  room_id_rooms int,
  PRIMARY KEY (user_id),
  FOREIGN KEY (room_id_rooms) REFERENCES rooms (room_id)
);

CREATE TABLE messages (
  messages_id INT,
  text_message varchar(255),
  user_id_users INT,
  PRIMARY KEY (messages_id),
  FOREIGN KEY (user_id_users) REFERENCES users (user_id)
);


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

