create database hotel;

create table room_types(
	id int primary key,
	name_type varchar(30)
);

create table rooms(
	id int primary key,
	number_room int,
	price int,
	room_type_id int,
	id_cleanliness int,
	id_busyness int,
	foreign key (room_type_id) REFERENCES room_types(id),
	foreign key (id_cleanliness) references status_cleanliness(id),
	foreign key (id_busyness) references status_busyness(id)
);

create table customers(
	id int primary key,
	first_name varchar(20),
	last_name varchar(20),
	gender varchar(15),
	phone_number varchar(15),
	email varchar(50)
);

create table employees(
	id int primary key,
	first_name varchar(20),
	last_name varchar(20),
	gender varchar(15),
	date_of_birth date,
	address varchar(50),
	job_department varchar(15),
	email varchar(50),
	phone_number varchar(15),
	salary int
);

create table booking(
	id int primary key,
	customer_id int,
	room_id int,
	date_of_booking date,
	date_in date,
	date_out date,
	count_of_days int,
	foreign key (customer_id) references customers(id),
	foreign key (room_id) references rooms(id)
);

create table payment(
	id int primary key,
	date_of_payment date,
	amount int,
	booking_id int,
	foreign key (booking_id) references booking(id)
);

create table roles(
	id int primary key,
	role_name varchar(20)
);

create table users(
	id int primary key,
	user_name varchar(30),
	login varchar(20),
	password varchar(20),
	id_role int,
	id_employee int,
	foreign key (id_role)references roles(id),
	foreign key (id_employee)references employees(id)
);

create table status_cleanliness(
	id int primary key,
	name_cleanliness varchar(15)
);

create table status_busyness(
	id int primary key,
	name_busyness varchar(15)
);