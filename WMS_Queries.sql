-- CREATE AND USE DATABASE
create database if not exists wms;
use wms;

-- CREATE TABLE QUERIES
create table brand (brandId varchar(10) primary key, brandName varchar(50) not null);

create table specification (specificationId varchar(10) primary key, productId varchar(10) not null, categoryId varchar(10) not null, subCategoryId varchar(10) not null, 
							brandId varchar(10) not null, model VARCHAR(25), productDescription VARCHAR(200));
                        
create table subCategory (subCategoryId varchar(10) primary key, subCategoryName varchar(50) not null);

create table seller(sellerId varchar(10) primary key, firstName varchar(20) not null, middleName varchar(20), lastName varchar(20) not null,
							shopNumber varchar(10), address1 varchar(500), landmark varchar(20), area varchar(20),
							city varchar(50), state varchar(50), country varchar(50), postalCode int, 
                            contactNumber int not null, email varchar(50) not null, gstNumber int not null);
                        
create table buyer(buyerId varchar(10) primary key, firstName varchar(20) not null, middleName varchar(20), lastName varchar(20) not null, 
							appartmentNumber varchar(10), address1 varchar(500), landmark varchar(100), area varchar(20),
                            city varchar(50), state varchar(50), country varchar(50), postalCode int, 
                            contactNumber int not null, email varchar(50) not null);
                        
create table category (categoryId varchar(10) primary key, categoryName varchar(50) not null);

create table product (productId varchar(10) primary key, productName VARCHAR(50) not null, categoryId varchar(10) not null, foreign key(categoryId) references category (categoryId), 
							subCategoryId varchar(10) not null, foreign key(subCategoryId) references subCategory (subCategoryId),
                            brandId varchar(10) not null, foreign key(brandId) references brand (brandId), 
                            specificationId varchar(10) not null, foreign key(specificationId) references specification (specificationId), 
							color VARCHAR(20) not null, price INT not null, quantity INT not null, size VARCHAR(25));

create table orders (orderId varchar(10) primary key, dateTime datetime, buyerId varchar(10) not null, foreign key(buyerId) references buyer(buyerId), 
							productId varchar(10) not null, foreign key(productId) references product(productId), quantityOrdered int not null, 
							totalPrice int not null, deliveryAddress int not null, sellerId varchar(10) not null, foreign key(sellerId) references seller(sellerId));
                            
create table transaction (transactionId varchar(10) primary key, orderId varchar(10) not null, foreign key(orderId) references orders(orderId),
							modeOfPayment varchar(10) not null, paymentStatus boolean not null);
                                
create table shipping(shippingId varchar(10) primary key, orderId varchar(10) not null, foreign key(orderId) references orders(orderId), 
							dispatchDate date not null, arrivalDate date not null);
                            
create table employee(employeeId varchar(10) primary key,
							employeeType varchar(50) not null,
							firstName varchar(20) not null,
							middleName varchar(20),
							lastName varchar(20) not null,
							salary double not null, check (salary > 0),
							hiringDate date not null);

create table cart(buyerId varchar(10) not null, foreign key(buyerId) references buyer(buyerId),
							productId varchar(10) not null, foreign key(productId) references product(productId),
							dateTime datetime not null,
							quantity int default 1,
							totalPrice int,
							primary key(buyerId, productId, dateTime));



-- INSERT QUERIES

-- BUYER TABLE
insert into buyer values ('B101', 'Sameep', 'Nilesh', 'Vani', 'C-92', 'Galaxy Tower', 'The Grand Bhagwati Hotel', 'Bodakdev', 'Ahmedabad', 'Gujarat', 'India', '380054', '999888777', 'sameep.v@ahduni.edu.in');
insert into buyer values ('B102', 'Aneri', 'Dipakbhai', 'Dalwadi', '17', 'Kalhaar Exotica', 'Hetarth Party Plot', 'Science City', 'Ahmedabad', 'Gujarat', 'India', '380060', '987654321', 'aneri.d@ahduni.edu.in');
insert into buyer values ('B103', 'Kavya', 'Rashmi', 'Patel', '2', 'Bunglow', 'Sector 4', 'Gandhinagar', 'Gandhinagar', 'Gujarat', 'India', '350000', '654789321', 'kavya.p2@ahduni.edu.in');

-- CATEGORY TABLE
insert into category values ('1', 'Electronics');
insert into category values ('2', 'Clothing');
insert into category values ('3', 'Crockery');
insert into category values ('4', 'Kids');
insert into category values ('5', 'Food');
insert into category values ('6', 'Medical');

-- EMPLOYEE TABLE
insert into employee values ('SE101', 'Software Enginneer', 'Sameep', 'Nilesh', 'Vani', '1200000', '2015-06-17');
insert into employee values ('SE102', 'Software Enginneer', 'Aneri', 'Dipakbhai', 'Dalwadi', '1200000', '2021-04-01');
insert into employee values ('AD101', 'Admin', 'Kavya', 'Rashmi', 'Patel', '1500000', '2020-04-01');
insert into employee values ('MG101', 'Manager', 'Parth', 'Mitesh', 'Shah', '2000000', '2019-04-01');
insert into employee values ('AC101', 'Accountant', 'Malav', 'Pragneshbhai', 'Doshi', '110000', '2018-04-01');

-- SELLER TABLE
insert into seller values ('S101', 'Nandik', 'Mohan', 'Parikh', 'S-26', 'Galaxy Tower', 'Hetarth Party Plot', 'Science City', 'Ahmedabad', 'Gujarat', 'India', '380054', '987456319', 'nandik1995@gmail.com', '1200003');
insert into seller values ('S102', 'Paresh', 'Popatlal', 'Patel', 'P-12', 'Sarjan Tower', 'Hetarth Party Plot', 'Gurukul', 'Ahmedabad', 'Gujarat', 'India', '450358', '987523635', 'paresh.patel@gmail.com', '1200025');
insert into seller values ('S103', 'Sameep', 'Nilesh', 'Vani', 'S-10', 'Galaxy Tower', 'Samkit Bunglows', 'Bodakdev', 'Ahmedabad', 'Gujarat', 'India', '380054', '986523147', 'sameep.v@ahduni.edu.in', '1');
insert into seller values ('S110', 'Aneri', 'Dipakbhai', 'Dalwadi', 'S-206', 'Gujaan Tower', 'Grand Bhagwati', 'Mall Road', 'Mumbai', 'Maharashtra', 'India', '658902', '741258963', 'aneri.d@ahduni.edu.in', '256398');
insert into seller values ('S120', 'Pratik', 'Popatlal', 'Pandya', 'P-121', 'Prev Tower', 'Global Hotel', 'Bandra', 'Mumbai', 'Maharashtra', 'India', '658822', '741289622', 'pratik@gmail.com', '256247');