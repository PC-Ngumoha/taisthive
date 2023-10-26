-- contains a set of commands used to set up the development database.
CREATE DATABASE IF NOT EXISTS taisthive_db;

CREATE USER IF NOT EXISTS 'taisthive'@'localhost' IDENTIFIED WITH mysql_native_password BY 'taisthive_pwd';
GRANT ALL PRIVILEGES ON taisthive_db.* TO 'taisthive'@'localhost' WITH GRANT OPTION