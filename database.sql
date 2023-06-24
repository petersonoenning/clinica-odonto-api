
CREATE DATABASE dentista_db;
USE dentista_db;

CREATE TABLE paciente (
    id int not null auto_increment,
    nome varchar(300),
    cpf varchar(300),
    data_nascimento date,
    sexo varchar(300),
    email varchar(300),
    endereco varchar(300),
    celular varchar(300),
    PRIMARY KEY(id)
);

CREATE TABLE dentista (
    id int not null auto_increment,
    cpf varchar(300),
    rg varchar(300),
    nome varchar(300),
    numero_registro varchar(300),
    especialidade varchar(300),
    celular varchar(300),
    PRIMARY KEY(id)
);

CREATE TABLE agenda (
    id int not null auto_increment,
    tipo varchar(300),
    hora varchar(300),
    data varchar(300),
    dentista_id int not null,
    paciente_id int not null,
    PRIMARY KEY(id),
    FOREIGN KEY(dentista_id) REFERENCES dentista (id),
    FOREIGN KEY(paciente_id) REFERENCES paciente (id)
);

CREATE TABLE procedimento (
    id int not null auto_increment,
    nome varchar(300),
    materiais varchar(300),
    valor decimal(12, 2),
    PRIMARY KEY(id)
);

CREATE TABLE consulta (
    id int not null auto_increment,
    data date,
    valor_total decimal(12, 2),
    agenda_id int not null,
    dentista_id int not null,
    paciente_id int not null,
    PRIMARY KEY(id),
    FOREIGN KEY(agenda_id) REFERENCES agenda (id),
    FOREIGN KEY(dentista_id) REFERENCES dentista (id),
    FOREIGN KEY(paciente_id) REFERENCES paciente (id)
);

CREATE TABLE consulta_procedimento (
    id int not null auto_increment,
    consulta_id int not null,
    procedimento_id int not null,
    dente int,
    quantidade int,
    valor decimal(12, 2),
    PRIMARY KEY(id),
    FOREIGN KEY(consulta_id) REFERENCES consulta (id),
    FOREIGN KEY(procedimento_id) REFERENCES procedimento (id)
);

CREATE TABLE recebimento (
    id int not null auto_increment,
    data date not null,
    forma_recebimento varchar(300),
    status int default 0,
    valor_total decimal(12, 2),
    consulta_id int not null,
    PRIMARY KEY(id),
    FOREIGN KEY(consulta_id) REFERENCES consulta (id)
);


insert into dentista values(null, '05844477744', '655555', 'joao paulo', '2855', 'odontopediatra', '69992554444');
INSERT INTO dentista VALUES (null, '98765432100', '222222', 'Carlos Santos', '5678', 'Cirurgião Dentista', '123456789');
INSERT INTO dentista VALUES (null, '55544477788', '333333', 'Ana Oliveira', '2468', 'Endodontista', '555666777');
INSERT INTO dentista VALUES (null, '99988877766', '444444', 'Pedro Almeida', '1357', 'Periodontista', '222333444');
INSERT INTO dentista VALUES (null, '22233344455', '555555', 'Laura Costa', '7890', 'Implantodontista', '777888999');



insert into paciente values(null, 'maria claudia', '05844466666', '2020-02-01', 'fem', 'anac@gmail.com', 'rua olavo 555', '69999665544');
INSERT INTO paciente VALUES (null, 'João da Silva', '01234567890', '1990-05-15', 'masc', 'joao.silva@gmail.com', 'Rua das Flores, 123', '11987654321');
INSERT INTO paciente  VALUES (null, 'Ana Souza', '98765432100', '1985-10-20', 'fem', 'ana.souza@hotmail.com', 'Avenida Central, 456', '21987654321');
INSERT INTO paciente VALUES (null, 'Pedro Santos', '55544433322', '1998-12-03', 'masc', 'pedro.santos@gmail.com', 'Rua dos Pinheiros, 789', '31987654321');
INSERT INTO paciente  VALUES (null, 'Carla Rodrigues', '11122233344', '1976-07-08', 'fem', 'carla.rodrigues@yahoo.com', 'Travessa dos Lírios, 987', '41987654321');

INSERT INTO agenda VALUES (null, 'Consulta de emergência', '10:30', '2023-06-23', 2, 2);
INSERT INTO agenda VALUES (null, 'Limpeza dental', '09:00', '2023-06-24', 3, 1);
INSERT INTO agenda VALUES (null, 'Extração de dente do siso', '15:45', '2023-06-25', 1, 3);
INSERT INTO agenda VALUES (null, 'Tratamento de canal', '11:15', '2023-06-26', 2, 3);
INSERT INTO agenda VALUES (null, 'Tratamento de canal', '11:15', '2023-06-26', 2, 3);

	
insert into consulta values(null,'2023-01-31', 150.0, 1,1,1);
insert into consulta values(null,'2023-01-30', 200.0, 2,2,2);
insert into consulta values(null,'2023-01-26', 1000.0, 3,3,3);
insert into consulta values(null,'2023-01-21', 50.0, 4,4,4);
insert into consulta values(null,'2023-01-20', 500.0, 5,5,5);





insert into procedimento values (null, 'Restauração rápida', 'Resina', 50.00);
INSERT INTO procedimento VALUES (null, 'Limpeza profissional', 'Removedor de tártaro', 80.00);
INSERT INTO procedimento VALUES (null, 'Extração de dente', 'Extrator', 150.00);
INSERT INTO procedimento VALUES (null, 'Clareamento dental', 'laser', 200.00);
INSERT INTO procedimento VALUES (null, 'Clareamento dental', 'laser', 200.00);


insert into consulta_procedimento values(null, 1,1,9, 5, 500);
INSERT INTO consulta_procedimento VALUES (null, 2, 2, 7, 4, 400);
INSERT INTO consulta_procedimento VALUES (null, 3, 3, 7, 4, 400);
INSERT INTO consulta_procedimento VALUES (null, 4, 4, 7, 4, 400);
INSERT INTO consulta_procedimento VALUES (null, 5, 5, 7, 4, 400);

insert into recebimento values(null, '2023-06-22', 'cartao', 1, 150, 1);
insert into recebimento values(null, '2023-06-22', 'dinheiro', 1, 200, 2);
insert into recebimento values(null, '2023-06-22', 'cheque', 1, 1000, 3);
insert into recebimento values(null, '2023-06-22', 'pix', 1, 50, 4);
insert into recebimento values(null, '2023-06-22', 'cartao', 1, 500, 5);




