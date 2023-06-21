
use dentista_db;
select * from agenda;
select * from dentista;
insert into dentista values(null, '05844477744', '655555', 'joao paulo', '2855', 'odontopediatra', '69992554444');
select * from paciente;
insert into paciente values(null, 'maria claudia', '05844466666', '2020-02-01', 'fem', 'anac@gmail.com', 'rua olavo 555', '69999665544');
select * from agenda;
insert into agenda values(null, 'revisão periódica', '14:00', '2023-06-22', 1,1);
select * from consulta;
insert into consulta values(null,'2023-01-31', 50.0, 1,1,1);
select * from procedimento;
insert into procedimento values (null, 'Restauracao', 'Resina', 50.00);
select * from dentista;
insert into dentista values(null, '05844455577', '58544', 'Joana CAmpos', '258967', 'Odontopediatra', '69955221111'); 
select * from procedimento;
insert into procedimento values(null, 'Restauracao SIMPLES', 'Resina', 50);