create database Demo;
use demo;
create table Employee(
emplid Int NOT NULL primary key auto_increment,
EmpName varchar(25),
DOJ date,
BasicSal float
);
select * from employee;
****************************************
alter table employee drop column DOJ;
alter table employee drop column BasicSal;
alter table employee add dateofjoin varchar(30);
alter table employee add BasicSal int;
emplid int AI PK 
EmpName varchar(25) 
dateofjoin varchar(30) 
BasicSal int
