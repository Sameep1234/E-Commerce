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

-- 




