use dentista_db;
insert into dentista values(null, '05844477744', '655555', 'joao paulo', '2855', 'odontopediatra', '69992554444');
insert into paciente values(null, 'maria claudia', '05844466666', '2020-02-01', 'fem', 'anac@gmail.com', 'rua olavo 555', '69999665544');
insert into agenda values(null, 'revisão periódica', '14:00', '2023-06-22', 1,1);
insert into consulta values(null,'2023-01-31', 50.0, 1,1,1);
insert into procedimento values (null, 'Restauração rápida', 'Resina', 50.00);
insert into consulta_procedimento values(null, 1,1,9, 5, 500);
insert into recebimento values(null, '2023-06-22', 'cartao', 1, 5000, 1);

