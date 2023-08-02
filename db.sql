--create the table DDL

create table greetings(
    id integer PRIMARY KEY AUTOINCREMENT,
    language text, 
    greeting text

);

--DML data manipulation language
select * from greetings;

select count(*) from greetings;

insert into greetings (language, greeting) VALUES ('zulu', 'Sawubona');
insert into greetings (language, greeting) VALUES ('Xhosa', 'Molo');
insert into greetings (language, greeting) VALUES ('english', 'Hello');
insert into greetings (language, greeting) VALUES ('French ', 'Bonjour');

-- use delete to delete from table