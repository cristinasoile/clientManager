CREATE DATABASE IF NOT EXISTS users DEFAULT CHARACTER SET = 'utf8';
USE users;
CREATE TABLE IF NOT EXISTS `users` (name VARCHAR(100), email VARCHAR(100), cpf INTEGER(25), phone INTEGER(25), status VARCHAR(25));
INSERT INTO
  `users` (id, name, email, cpf, phone, status)
VALUES
  ('Deborah Cristina P. de Oliveira', 'cris@teste.com', '123456789101', '11910090807', 'Ativo'),
  ('Priscila Resende Nascimento', 'pri@teste.com', '11109876543', '11901020304', 'Inativo'),
  ('Leonardo Prado', 'leo@teste.com', '11010203040', '11903040506', 'Aguardando ativação'),
  ('Jonathan Verdeli', 'verdeli@teste.com', '11123456789', '11998765432', 'Desativado'),





