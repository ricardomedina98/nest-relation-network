CREATE DATABASE relationship_network;
USE relationship_network;

create table users(
	id_user int PRIMARY KEY,
  email varchar(255) NULL,
  username varchar(255) not null,
  password varchar(255) not null,
  status varchar(8),
  created_at timestamp not null,
  update_at timestamp null,
  id_details int not null,
  id_role int not null
);

create table user_details(
	id_details int primary key,
  name varchar(255) not null,
  first_name varchar(255) not null,
  second_name varchar(255) null
);

create TABLE contact(
	id_contact int PRIMARY KEY,
  id_user int NULL,
  name varchar(255) NOT NULL,
  first_name varchar(255) NOT NULL,
  second_name varchar(255) NULL,
  phone varchar(255) NULL,
  age int NULL,
  id_details int NOT NULL
);

CREATE TABLE contact_details(
  id_details int PRIMARY KEY,
  id_civil_status int NULL,
  have_you_referred_it boolean NULL,
  referred_you boolean NULL
);

create table contact_civil_status(
	id_civil_status int primary key,
  name varchar(255) not null,
  description varchar(255) NULL
);

create table professions(
	id_profession int PRIMARY KEY,
  name varchar(255) NOT NULL
);

CREATE TABLE contact_professions(
  id_profession int NOT NULL,
  id_contact int NOT NULL
);

create table occupations(
	id_occupation int PRIMARY KEY,
  name varchar(255) NOT NULL
);

create table contact_occupations(
	id_occupation int PRIMARY KEY,
  id_contact int NOT NULL
);

create table contact_addresses(
	id_address int PRIMARY KEY,
  country varchar(255) NULL,
  state varchar(255) NULL,
  city varchar(255) NULL,
  street varchar(255) NULL,
  colony varchar(255) NULL
);


CREATE TABLE contact_clasifications(
  id_clasification int NULL,
  id_contact int NOT NULL
);

CREATE TABLE clasifications(
  id_clasification int NULL,
  name varchar(255) NOT NULL
);

CREATE TABLE contact_hobbies(
  id_hobbie int PRIMARY KEY,
  id_contact int NOT NULL
);

CREATE TABLE hobbies(
  id_hobbie int PRIMARY KEY,
  name varchar(255) NOT NULL
);




