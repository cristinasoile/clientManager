CREATE DATABASE IF NOT EXISTS users DEFAULT CHARACTER SET = 'utf8';
USE users;
CREATE TABLE IF NOT EXISTS `users` (id INTEGER(100), name VARCHAR(100), email VARCHAR(100), cpf INTEGER(11), phone INTEGER(25), status VARCHAR(25), PRIMARY KEY (id));
INSERT INTO
  `users` (id, name, email, cpf, phone, status)
VALUES
  (1,'Deborah Cristina P. de Oliveira', 'cris@teste.com', '123456789101', '11910090807', 'Ativo'),
  (2,'Priscila Resende Nascimento', 'pri@teste.com', '11109876543', '11901020304', 'Inativo'),
  (3,'Leonardo Prado', 'leo@teste.com', '11010203040', '11903040506', 'Aguardando ativação'),
  (4,'Jonathan Verdeli', 'verdeli@teste.com', '11123456789', '11998765432', 'Desativado'),





