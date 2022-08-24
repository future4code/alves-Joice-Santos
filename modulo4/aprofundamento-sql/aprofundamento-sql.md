# Exercício 1

a) irá excluir a coluna "salary".

b)irá alterar o valor da coluna "gender".

c)irá alterar o valor da coluna gender para 255 caracteres.

d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

# Exercicio 2

a) 
UPDATE Actor
SET 
	name = "Moacyr Franco",
	birth_date = "2020-02-10"
WHERE id = "003";

b)
UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";

c)
UPDATE Actor
SET 
name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = "005";

d) 
UPDATE Actor
SET 
	color = "blue
WHERE id = "123";

retorna o Error Code: 1054. Unknown column 'color' in 'field list', pois não existe ess campo na tabela.

# Exercicio 3

a) 
DELETE from Actor WHERE name = "Fernanda Monenegro";

b) 
DELETE from Actor
WHERE gender = "male" and salary > 1000000;

# Exercicio 4

a)
SELECT MAX(salary) FROM Actor;

b) 
SELECT MIN(salary) FROM Actor WHERE gender = "female";

c)
SELECT COUNT(*) FROM Actor WHERE gender = "female";

d)
SELECT SUM(salary) FROM Actor;

# Exercicio 5

a) ela retorna a contagem de atores por genero, informando o numero de cada genero listado.

b)
SELECT id, name FROM Actor
ORDER BY name DESC;

c)
SELECT * FROM Actor
ORDER BY salary;

d) 
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

e)
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

# Execricio 6

a)
ALTER TABLE Movie ADD playing_limit_date DATE;

b)
ALTER TABLE Movie CHANGE rating rating FLOAT;

c) 
UPDATE Movie
SET
	playing_limit_date = "2020-12-31"
WHERE id = "001";

d)
DELETE FROM Movie WHERE id = "001";

