-- Ensure schema and table exist before inserting data
--CREATE SCHEMA IF NOT EXISTS test;
--
--CREATE TABLE IF NOT EXISTS test.test_table (
--  ID BIGINT PRIMARY KEY,
--  NAME VARCHAR(255),
--  DESCRIPTION VARCHAR(255),
--  CREATED_AT TIMESTAMP
--);

INSERT INTO test.test_table (NAME, DESCRIPTION, CREATED_AT) VALUES
('John Doe', 'Male', TIMESTAMP '2024-01-01 10:00:00'),
('Jane Smith', 'Female', TIMESTAMP '2024-01-02 11:00:00');
