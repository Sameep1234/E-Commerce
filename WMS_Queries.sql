create database if not exists wms;
use wms;

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
							employeeType varchar(10) not null,
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
                            
                            
INSERT INTO `wms`.`buyer` (`buyerId`, `firstName`, `middleName`, `lastName`, `appartmentNumber`, `address1`, `landmark`, `area`, `city`, `state`, `country`, `postalCode`, `contactNumber`, `email`) VALUES ('B101', 'Sameep', 'Nilesh', 'Vani', 'C-92', 'Galaxy Tower', 'The Grand Bhagwati Hotel', 'Bodakdev', 'Ahmedabad', 'Gujarat', 'India', '380054', '999888777', 'sameep.v@ahduni.edu.in');
INSERT INTO `wms`.`buyer` (`buyerId`, `firstName`, `middleName`, `lastName`, `appartmentNumber`, `address1`, `landmark`, `area`, `city`, `state`, `country`, `postalCode`, `contactNumber`, `email`) VALUES ('B102', 'Aneri', 'Dipakbhai', 'Dalwadi', '17', 'Kalhaar Exotica', 'Hetarth Party Plot', 'Science City', 'Ahemdabad', 'Gujarat', 'India', '380060', '987654321', 'aneri.d@ahduni.edu.in');
INSERT INTO `wms`.`buyer` (`buyerId`, `firstName`, `middleName`, `lastName`, `appartmentNumber`, `address1`, `landmark`, `area`, `city`, `state`, `country`, `postalCode`, `contactNumber`, `email`) VALUES ('B103', 'Kavya', 'Rashmi', 'Patel', '2', 'Bunglow', 'Sector 4', 'Gandhinagar', 'Gandhinagar', 'Gujarat', 'India', '350000', '654789321', 'kavya.p2@ahduni.edu.in');

INSERT INTO `wms`.`seller` (`sellerId`, `firstName`, `middleName`, `lastName`, `shopNumber`, `address1`, `area`, `city`, `state`, `country`, `postalCode`, `contactNumber`, `email`, `gstNumber`) VALUES ('S100', 'xyz', 'abc', 'pqr', '1', 'something', 'bodakdev', 'ahmedabad', 'gujarat', 'india', '123456', '123456789', 'xyz.pqr@gmail.com', '10000153');
INSERT INTO `wms`.`seller` (`sellerId`, `firstName`, `middleName`, `lastName`, `shopNumber`, `address1`, `area`, `city`, `state`, `country`, `postalCode`, `contactNumber`, `email`, `gstNumber`) VALUES ('S101', 'abc', 'str', 'xyz', '2', 'something2', 'science city', 'ahmedabad', 'gujarat', 'india', '987654', '652314789', 'abc@ahduni.edu.in', '10000049');
INSERT INTO `wms`.`seller` (`sellerId`, `firstName`, `middleName`, `lastName`, `shopNumber`, `address1`, `area`, `city`, `state`, `country`, `postalCode`, `contactNumber`, `email`, `gstNumber`) VALUES ('S102', 'pqr', 's', 'abc', '3', 'somwthing3', 'sector 4', 'gandhinagar', 'gujarat', 'india', '145235', '147852369', 'pqr@gmail.com', '10000144');








