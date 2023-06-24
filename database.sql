
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
insert into paciente values(null, 'maria claudia', '05844466666', '2020-02-01', 'fem', 'anac@gmail.com', 'rua olavo 555', '69999665544');
insert into agenda values(null, 'revisão periódica', '14:00', '2023-06-22', 1,1);
insert into consulta values(null,'2023-01-31', 50.0, 1,1,1);
insert into procedimento values (null, 'Restauração rápida', 'Resina', 50.00);
insert into consulta_procedimento values(null, 1,1,9, 5, 500);
insert into recebimento values(null, '2023-06-22', 'cartao', 1, 5000, 1);

