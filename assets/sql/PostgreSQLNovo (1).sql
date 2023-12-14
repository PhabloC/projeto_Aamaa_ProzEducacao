CREATE TABLE Paciente (
  "id_paciente" integer PRIMARY KEY,
  "nome" varchar(25),
  "Id_familiar" integer,
  "Id_DSM_V_1" integer,
  "Id_DSM_V_2" integer,  
  FOREIGN KEY ("Id_familiar") REFERENCES "Familiar" ("Id_familiar"),
  FOREIGN KEY ("Id_DSM_V_1") REFERENCES "DSM_V_1" ("Id_DSM_V_1"),
  FOREIGN KEY ("Id_DSM_V_2") REFERENCES "DSM_V_2" ("Id_DSM_V_2") 
);

CREATE TABLE Familiar (
  "Id_familiar" integer PRIMARY KEY,
  "name" varchar(25),
  "CPF" varchar(10),
  "cidade" varchar(15),
  "telefone" varchar(11)  
);

CREATE TABLE DSM_V_1 (
  "Id_DSM_V_1" integer PRIMARY KEY,
  "DSM_V_1" varchar(55),
  "grau" varchar(10)
);

CREATE TABLE DSM_V_2 (
  "Id_DSM_V_2" integer PRIMARY KEY,
  "DSM_V_2" varchar(55),
  "grau" varchar(10)
);

CREATE TABLE Profissional (
  "Id_profissional" integer PRIMARY KEY,
  "nome" varchar(25),
  "Id_especialidade" integer,
  "CRM" varchar(8),
  "cidade" varchar(15),
  "telefone" varchar(11),
  FOREIGN KEY ("Id_especialidade") REFERENCES "Especialidade"("Id_especialidade")

);

CREATE TABLE Especialidade (
  "Id_especialidade" integer PRIMARY KEY,
  "especialidade" varchar(25)
);

CREATE TABLE Consulta (
  "Id_consulta" integer PRIMARY KEY,
  "Id_paciente" integer,
  "Id_familiar" integer,
  "Id_profissional" integer,
  FOREIGN KEY ("Id_paciente") REFERENCES "Paciente"("Id_paciente"),
  FOREIGN KEY ("Id_familiar") REFERENCES "Familiar"("Id_familiar"),
  FOREIGN KEY ("Id_profissional") REFERENCES "Profissional"("Id_profissional")
);

ALTER TABLE Consulta ADD data_consulta timestamp not NULL;

INSERT INTO Consulta (id_consulta, id_paciente, id_profissional, data_consulta) VALUES
(1,	1,	7,	'23/05/2023'),
(2,	2,	7,	'26/07/2023'),
(4,	3,	22,	'01/12/2023'),
(5,	4,	5,	'03/02/2024'),
(7,	5,	5,	'10/06/2024'),
(8,	6,	24,	'13/08/2024'),
(10,	6,	26,	'19/12/2024'),
(11,	7,	10,	'21/02/2025'),
(13,	8,	14,	'29/06/2025'),
(14,	9,	1,	'01/09/2025'),
(16,	1,	8,	'07/01/2026'),
(17,	2,	8,	'12/03/2026'),
(19,	7,	11,	'18/07/2026'),
(20,	8,	15,	'20/09/2026'),
(22,	9,	2,	'26/01/2027'),
(23,	7,	12,	'31/03/2027'),
(25,	9,	24,	'06/08/2027');


INSERT INTO Consulta (id_consulta, id_familiar, id_profissional, data_consulta)  VALUES
(3,	1,	11,	'28/09/2023'),
(6,	2,	14,	'07/04/2024'),
(9,	3,	14,	'16/10/2024'),
(12,	4,	1,	'26/04/2025'),
(15,	5,	7,	'04/11/2025'),
(18,	5,	17,	'15/05/2026'),
(21,	7,	22,	'23/11/2026'),
(24,	8,	23,	'03/06/2027'),
(26,	9,	24,	'09/10/2027');


INSERT INTO Paciente (id_paciente, nome, id_familiar, Id_DSM_V_1, Id_DSM_V_2)  VALUES
(1, 'Briana Silva', 5, 2, 1),
(2, 'Livia Silva', 6, 1, 2),
(3, 'Julio Levinsk', 7,	1, 1),
(4, 'Endrik Rebelo', 8,	2, 1),
(5, 'Isis Nunes', 8, 1, 1),
(6, 'Pedro Nunes', 9, 1, 2),
(7, 'Isis Ramos', 1, 2, 3),
(8, 'Gael Veiga', 2,  2, 3),
(9, 'Tauane Morais', 4,	2, 1);


INSERT INTO Familiar (id_familiar, name, CPF, cidade, telefone)  VALUES
(1,	'Julia Ramos',		'000.025.264-25',	'Curitiba PR',		'41 5678-2564'),
(2,	'Isadora Veiga',	'028.045.547-26',	'Londrina PR',		'43 3564-8972'),
(3,	'Natanael Veiga',	'302.025.267-27',	'Londrina PR',		'43 3662-2547'),
(4,	'Lidia Morais',		'560.035.234-28',	'São Paulo SP',		'11 1289-0235'),
(5,	'Marcio Silva',		'450.027.235-29',	'Rio Janeiro RJ',	'21 4897-5421'),
(6,	'Amalia Silva',		'235.075.589-30',	'Volta Redonda RJ',	'24 3652-5632'),
(7,	'Renato Levinsk',	'879.089.542-31',	'Porto Velho RO',	'69 3621-5555'),
(8,	'Marcelo Rebelo',	'025.187.325-32',	'Maceió AL',		'98 7985-5678'),
(9,	'Henrique Nunes',	'589.287.369-33',	'Santos SP',		'13 3558-2425');


INSERT INTO Profissional (id_profissional, nome, Id_especialidade, CRM, cidade, telefone)  VALUES
(1,	'Margarete Nascimento',	2,	'555-74',	'São Paulo SP',		'11 5400-0043'),
(2,	'Pedro Valente',	3,	'458-32',	'São Paulo SP',		'11 5400-0044'),
(3,	'Marcio Gouveia',	1,	'395-12',	'São Paulo SP',		'11 5400-0045'),
(4,	'Marlene Inacio',	2,	'745-65',	'São Paulo SP',		'11 5400-0046'),
(5,	'Valentina Scrocaro',	4,	'849-25',	'São Paulo SP',		'11 5400-0047'),
(6,	'Helena Venesa',	4,	'125-78',	'Rio Janeiro RJ',	'21 4300-0001'),
(7,	'Marlene Magda',	2,	'352-25',	'Rio Janeiro RJ',	'21 4300-0002'),
(8,	'Fabiane Oliveira',	3,	'659-87',	'Rio Janeiro RJ',	'21 4300-0003'),
(9,	'Franciele Maria',	1,	'567-12',	'Rio Janeiro RJ',	'21 4300-0004'),
(10,	'Gabriel Nascimento',	4,	'355-21',	'Curitiba PR',		'41 0945-8721'),
(11,	'Marcio Carvalho',	2,	'753-35',	'Curitiba PR',		'41 0945-8722'),
(12,	'Fabio Parrilha',	3,	'869-05',	'Curitiba PR',		'41 0945-8723'),
(13,	'Fernando Prestes',	1,	'512-64',	'Curitiba PR',		'41 0945-8724'),
(14,	'Josiane Marcela',	2,	'533-71',	'Londrina PR',		'43 8734-2341'),
(15,	'Marcelo Vencher',	3,	'355-32',	'Londrina PR',		'43 8734-2342'),
(16,	'Rodrigo Castro',	1,	'375-20',	'Londrina PR',		'43 8734-2343'),
(17,	'Marcelo Ferreira',	2,	'565-55',	'Volta Redonda RJ',	'24 5400-1231'),
(18,	'Gislaine Barbosa',	3,	'729-25',	'Volta Redonda RJ',	'24 5400-1232'),
(19,	'Cristiane Duarte',	1,	'322-78',	'Volta Redonda RJ',	'24 5400-1233'),
(20,	'Ivan Garcia',		2,	'987-25',	'Volta Redonda RJ',	'24 5400-1234'),
(21,	'Juliana Alves',	4,	'652-87',	'Volta Redonda RJ',	'24 5400-1235'),
(22,	'Diego Batista',	2,	'547-12',	'Porto Velho RO',	'69 4345-5555'),
(23,	'Juliano Padilha',	2,	'999-21',	'Maceió AL',		'98 1234-5678'),
(24,	'Keylla Assunção',	2,	'788-35',	'Santos SP',		'13 2123-2421'),
(25,	'Alessandra Conceição',	1,	'999-05',	'Santos SP',		'13 2123-2422'),
(26,	'Ivo Nogueira',		3,	'752-64',	'Santos SP',		'13 2123-2423');


INSERT INTO DSM_V_1  (Id_DSM_V_1, DSM_V_1, grau)  VALUES
(1,	'dificuldade em iniciar interações sociais',			'1 (leve)'),
(2,	'dificuldade tanto na comunicação verbal quanto não verbal',	'2 (moderado)'),
(3,	'quase não tem habilidade de comunicação',			'3 (severo)');


INSERT INTO DSM_V_2  (Id_DSM_V_2, DSM_V_2, grau)  VALUES
(1,	'comportamento inflexível e dificuldade para trocar de atividades',				'1 (leve)'),
(2,	'precisa de apoio e seus comportamentos restritivos e repetitivos são mais frequentes',		'2 (moderado)'),
(3,	'altamente dependente e apresenta extrema dificuldade para lidar com mudanças',			'3 (severo)');


INSERT INTO Especialidade (Id_especialidade, especialidade)  VALUES
(1,	'Neurologista'),
(2,	'Piscólogo'),
(3,	'Terapeuta Ocupacional'),
(4,	'Fonoaudiólogo');


SELECT * FROM Consulta
SELECT * FROM DSM_V_1
SELECT * FROM DSM_V_2
SELECT * FROM Especialidade
SELECT * FROM Familiar
SELECT * FROM Paciente
SELECT * FROM Profissional

SELECT id_paciente, id_profissional
FROM Consulta

SELECT nome
FROM Paciente
WHERE id_dsm_v_1 = 2

SELECT nome
FROM Paciente
WHERE id_dsm_v_2 = 3

SELECT nome, cidade, telefone 
FROM Profissional
WHERE cidade = 'São Paulo SP'

SELECT COUNT(id_paciente) as qtde_pacientes
FROM Paciente

SELECT COUNT(id_paciente) as qtde_pacientes_DSM_V_2_nivel_3
FROM Paciente
WHERE id_dsm_v_2 = 3


