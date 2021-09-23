CREATE DATABASE TEST;

USE TEST;

CREATE TABLE COLABORADOR (
    idcolaborador int primary key auto_increment,
    nombre VARCHAR(45),
    apellido VARCHAR(45),
    direccion VARCHAR(45),
    edad VARCHAR(45),
    profesion VARCHAR(45),
    estadoCivil VARCHAR(45)
);

INSERT INTO COLABORADOR (nombre, apellido, direccion, edad, profesion, estadoCivil) VALUES ("Eliel", "Barrios", "Guatemala", "24", "software developer", "soltero");
INSERT INTO COLABORADOR (nombre, apellido, direccion, edad, profesion, estadoCivil) VALUES ("Juan", "Barrios", "Guatemala", "29", "Medico", "soltero");
INSERT INTO COLABORADOR (nombre, apellido, direccion, edad, profesion, estadoCivil) VALUES ("Ronaldo", "Nazario", "Brasil", "50", "Futbolista", "Divorciado");
INSERT INTO COLABORADOR (nombre, apellido, direccion, edad, profesion, estadoCivil) VALUES ("Edson Arantes", "do Nascimento", "Brasil", "80", "Ex-Futbolista", "Viudo");
INSERT INTO COLABORADOR (nombre, apellido, direccion, edad, profesion, estadoCivil) VALUES ("Lionel Andres", "Messi", "Paris", "34", "Futbolista", "Casado");