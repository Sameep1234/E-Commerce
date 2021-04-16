-- CREATE AND USE DATABASE
create database if not exists wms;
use wms;

-- ******************************************************************************************************************************************************************

-- CREATE TABLE QUERIES
create table buyer(buyerId varchar(10) primary key, firstName varchar(20) not null, middleName varchar(20), lastName varchar(20) not null, 
							appartmentNumber varchar(10), address1 varchar(500), landmark varchar(100), area varchar(20),
                            city varchar(50), state varchar(50), country varchar(50), postalCode int, 
                            contactNumber int not null, email varchar(50) not null);
                            
create table seller(sellerId varchar(10) primary key, firstName varchar(20) not null, middleName varchar(20), lastName varchar(20) not null,
							shopNumber varchar(10), address1 varchar(500), landmark varchar(20), area varchar(20),
							city varchar(50), state varchar(50), country varchar(50), postalCode int, 
                            contactNumber int not null, email varchar(50) not null, gstNumber int not null);
                            
create table brand (brandId varchar(10) primary key, brandName varchar(50) not null);

create table category (categoryId varchar(10) primary key, categoryName varchar(50) not null);

create table employee(employeeId varchar(10) primary key,
							employeeType varchar(50) not null,
							firstName varchar(20) not null,
							middleName varchar(20),
							lastName varchar(20) not null,
							salary double not null, check (salary > 0),
							hiringDate date not null);

create table subCategory (subCategoryId varchar(10) primary key, subCategoryName varchar(50) not null,
							categoryId varchar(10), foreign key(categoryId) references category(categoryId) 
                            on update cascade on delete cascade);

create table specification (specificationId varchar(10) primary key,
							categoryId varchar(10) not null, foreign key(categoryId) references category(categoryId)
                            on update cascade on delete cascade,
                            subCategoryId varchar(10) not null, foreign key(subCategoryId) references subcategory(subCategoryId)
                            on update cascade on delete cascade,
							brandId varchar(10) not null, foreign key(brandId) references brand(brandId)
                            on update cascade on delete cascade,
                            model VARCHAR(25), productDescription VARCHAR(200));
                            
create table product (productId varchar(10) primary key, productName VARCHAR(50) not null, categoryId varchar(10) not null, 
							foreign key(categoryId) references category (categoryId)
                            on update cascade on delete cascade, 
							subCategoryId varchar(10) not null, foreign key(subCategoryId) references subCategory (subCategoryId)
                            on update cascade on delete cascade,
                            brandId varchar(10) not null, foreign key(brandId) references brand (brandId)
                            on update cascade on delete cascade, 
                            specificationId varchar(10) not null, foreign key(specificationId) references specification (specificationId)
                            on update cascade on delete cascade, 
							color VARCHAR(20) not null, price INT not null, quantity INT not null, size VARCHAR(25));

create table orders (orderId varchar(10) primary key, dateTime datetime, buyerId varchar(10) not null, 
							foreign key(buyerId) references buyer(buyerId)
                            on update cascade on delete cascade, 
							productId varchar(10) not null, foreign key(productId) references product(productId)
                            on update cascade on delete cascade, quantityOrdered int not null, 
							totalPrice int not null, address1 varchar(100) not null, landmark varchar(100), area varchar(20),
                            city varchar(50), state varchar(50), country varchar(50),
                            sellerId varchar(10) not null, foreign key(sellerId) references seller(sellerId)
                            on update cascade on delete cascade);
                            
create table transaction (transactionId varchar(10) primary key, orderId varchar(10) not null, foreign key(orderId) references orders(orderId)
							on update cascade on delete cascade,
							modeOfPayment varchar(25) not null, paymentStatus boolean not null);
                                
create table shipping(shippingId int primary key auto_increment, orderId varchar(10) not null, foreign key(orderId) references orders(orderId)
							on update cascade on delete cascade, 
							dispatchDate date not null, arrivalDate date not null);
                            
create table cart(buyerId varchar(10) not null, foreign key(buyerId) references buyer(buyerId),
							productId varchar(10) not null, foreign key(productId) references product(productId) on update cascade on delete cascade,
							dateTime datetime not null,
							quantity int default 1,
							totalPrice int,
							primary key(buyerId, productId, dateTime));

-- ********************************************************************************************************************************************************************

-- INSERT QUERIES

-- BUYER TABLE
insert into buyer values ('B101', 'Sameep', 'Nilesh', 'Vani', 'C-92', 'Galaxy Tower', 'The Grand Bhagwati Hotel', 'Bodakdev', 'Ahmedabad', 'Gujarat', 'India', '380054', '999888777', 'sameep.v@ahduni.edu.in');
insert into buyer values ('B102', 'Aneri', 'Dipakbhai', 'Dalwadi', '17', 'Kalhaar Exotica', 'Hetarth Party Plot', 'Science City', 'Ahmedabad', 'Gujarat', 'India', '380060', '987654321', 'aneri.d@ahduni.edu.in');
insert into buyer values ('B103', 'Kavya', 'Rashmi', 'Patel', '2', 'Bunglow', 'Sector 4', 'Gandhinagar', 'Gandhinagar', 'Gujarat', 'India', '350000', '654789321', 'kavya.p2@ahduni.edu.in');
INSERT INTO buyer VALUES ('B104', 'Malav', 'Pragnesh', 'Doshi', '1-2', 'Saraswat Villa', 'Amul Corner', 'Vastrapur', 'Jaipur', 'Rajasthan', 'India', '123456', '985632147', 'malav.d@ahduni.edu.in');

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

-- BRAND TABLE
INSERT INTO brand VALUES('L101','Dell');
INSERT INTO brand VALUES('L102','HP');
INSERT INTO brand VALUES('M101','Oneplus');
INSERT INTO brand VALUES('M102','Apple');
INSERT INTO brand VALUES('M103','Samsung');
INSERT INTO brand VALUES('F101','Nike');
INSERT INTO brand VALUES('F102','Adidas');
INSERT INTO brand VALUES('F103','Puma');
INSERT INTO brand VALUES('ME101','Apollo');
INSERT INTO brand VALUES('ME102','Zydus');
INSERT INTO brand VALUES('CR101','Tupperware');
INSERT INTO brand VALUES('CR102','Milton');
INSERT INTO brand VALUES('ST101','Story Book');
INSERT INTO brand VALUES('G101','Sony');
INSERT INTO brand VALUES('FD101','Aashirvaad');
INSERT INTO brand VALUES('FD102','Patanjali');
INSERT INTO brand VALUES('FD103','Dabur');

-- SUB CATEGORY
INSERT INTO subCategory VALUES('LS101','Laptop','1');
INSERT INTO subCategory VALUES('MS101','Mobile','1');
INSERT INTO subCategory VALUES('CKS101','Glasses','3');
INSERT INTO subCategory VALUES('OXM101','Oximeter','6');
INSERT INTO subCategory VALUES('VGF100','Vegetables','5');
INSERT INTO subCategory VALUES('KM103','Baby Care','4');
INSERT INTO subCategory VALUES('CTS101','TShirts','2');



-- SPECIFICATION
INSERT INTO specification VALUES('SPEC101','1','LS101','L101','Inspiron 5592','16gb Ram 512gb SSD');
INSERT INTO specification VALUES('SPEC102','1','MS101','M101','OnePlus 8','8gb ram 128gb storage');
INSERT INTO specification VALUES('SPEC103','3','CKS101','CR102','Bottle','Stainless Steel 1.5L');

-- PRODUCT
INSERT INTO product VALUES('PD101','OnePlus 8','1','MS101','M101','SPEC102','Mirror Gray','32999','50','6.5 Inch');
INSERT INTO product VALUES('PD102','Thermos','3','CKS101','CR101','SPEC103','Steel Gray','1000','100','45cm');
INSERT INTO product VALUES('PD103','Inspiron 5593','1','LS101','L101','SPEC101','Black','83000','2','15.6 Inch');

-- ORDERS
INSERT INTO orders VALUES ('O101',current_timestamp,'B101','PD101','1','1000','','Hetarth Party Plot','Science City','Ahmedabad','Gujarat','India','S101');
INSERT INTO orders VALUES ('O102', '2021-03-13 13:45:10', 'B102', 'PD102', '3', '4500', 'G-304', 'Ambamata temple', 'Infocity', 'Gandhinagar', 'Gujarat', 'India', 'S102');
INSERT INTO orders VALUES ('O103', '2020-12-04 09:15:45', 'B103', 'PD103', '2', '1500', '450/2', 'Hotel Hyatt', 'Malad', 'Mumbai', 'Maharashtra', 'India', 'S103');
INSERT INTO orders VALUES ('O104', current_timestamp, 'B101', 'PD103', '4', '3000', 'H-101', 'Swagat Party Plot', 'Sector4', 'New Delhi', 'New Delhi', 'India', 'S102');
INSERT INTO orders VALUES ('O105', current_timestamp, 'B104', 'PD101', '2', '2000', '6512/3', 'Hotel Greenz', 'Sector3', 'Gandhinagar', 'Gandhinagar', 'India', 'S110');

-- SHIPPING
INSERT INTO shipping VALUES ('1', 'O105', '2017-04-22', '2017-04-22');
INSERT INTO shipping VALUES ('2', 'O104', '2020-05-05', '2020-05-05');
INSERT INTO shipping VALUES ('3', 'O101', '2020-12-18', '2020-12-18');
INSERT INTO shipping VALUES ('4', 'O104', '2021-04-05', '2021-04-05');
INSERT INTO shipping VALUES ('5', 'O103', '2020-08-15', '2020-08-15');

-- CART
INSERT INTO cart VALUES ('B103', 'PD102', '2019-12-11', '4', '4000');
INSERT INTO cart VALUES ('B102', 'PD101', '2019-12-11', '2', '65998');
INSERT INTO cart VALUES ('B101', 'PD103', '2020-03-11', '1', '83000');
INSERT INTO cart VALUES ('B101', 'PD102', '2019-04-12', '1', '1000');
INSERT INTO cart VALUES ('B103', 'PD103', '2020-12-11', '1', '83000');

-- transaction
INSERT INTO transaction VALUES ('TR101', 'O103', 'COD', '0');
INSERT INTO transaction VALUES ('TR102', 'O101', 'COD', '1');
INSERT INTO transaction VALUES ('TR013', 'O103', 'CREDIT CARD', '1');
INSERT INTO transaction VALUES ('TR104', 'O102', 'DEBIT CARD', '0');
INSERT INTO transaction VALUES ('TR105', 'O104', 'CREDIT CARD', '0');
INSERT INTO transaction VALUES ('TR106', 'O105', 'CREDIT CARD', '1');


-- ********************************************************************************************************************************************************************

-- PROCEDURE

-- Pending transaction

-- ******* ADD CONDITIONS FOR END LOOPPP ********
DROP PROCEDURE IF EXISTS pendingTransaction;
DELIMITER $$
CREATE PROCEDURE pendingTransaction()
BEGIN
	DECLARE r_transactionId VARCHAR(20);
    DECLARE r_orderId VARCHAR(20);
    DECLARE r_mop VARCHAR(20);
    
	 DECLARE c_end INT DEFAULT 0;
    DECLARE c_transaction CURSOR FOR
		SELECT transactionId, orderId, modeOfPayment from transaction
        WHERE paymentStatus = 0;
	DECLARE CONTINUE HANDLER FOR NOT FOUND SET c_end = 1;
	OPEN c_transaction;
		getPendingTransaction: LOOP
			FETCH c_transaction INTO r_transactionId, r_orderId, r_mop;
			IF c_end = 1 THEN 
					LEAVE getPendingTransaction;
			END IF;
            SELECT o.orderId, b.buyerId, b.firstName, b.middleName, b.lastName FROM orders o
            LEFT JOIN buyer b ON o.buyerId = b.buyerId
            WHERE o.orderId = r_orderId;
        END LOOP;
    CLOSE c_transaction;
END$$;
DELIMITER ;


-- REDUCING STOCKS
 
DROP PROCEDURE IF EXISTS reducingStock;

DELIMITER $$
		CREATE PROCEDURE reducingStock()
		BEGIN
			DECLARE r_productId VARCHAR(20);
            DECLARE r_productName VARCHAR(20);
            DECLARE r_category VARCHAR(20);
            DECLARE r_subCategory VARCHAR(20);
            DECLARE r_brand VARCHAR(20);
            DECLARE r_specificationId VARCHAR(20);
            DECLARE r_quantity VARCHAR(20);
            DECLARE r_price VARCHAR(20);
            DECLARE c_end int default 0;
            DECLARE c_product CURSOR FOR
				SELECT 
					p.productId, p.productName, p.specificationId, p.quantity, p.price,
					c.categoryName, 
					sc.subcategoryName, 
					b.brandName 
                    FROM product p
						LEFT JOIN category c ON p.categoryId = c.categoryId
						LEFT JOIN subCategory sc ON p.subCategoryId = sc.subCategoryId
						LEFT JOIN brand b ON p.brandId = b.brandId
					WHERE p.quantity <10;
                
            DECLARE CONTINUE HANDLER FOR NOT FOUND SET c_end= 1;  
            OPEN c_product;
				getProduct: LOOP
					FETCH c_product INTO r_productId, r_productName, r_category, r_subCategory, r_brand, r_specificationId, r_quantity, r_price;
                    IF c_end = 1 THEN 
						LEAVE getProduct;
					END IF;
                    SELECT r_productId as "ProductId", r_productName as "Name", r_quantity as "Quantity",
                    CONCAT(r_category ,": " ,r_subCategory) AS "ProductCategory", 
						r_specificationId as "SpecificationId",
						r_brand as "Brand",
						r_price as "Price";
                END LOOP;
            CLOSE c_product;
		END$$;
DELIMITER ;



-- SUCCESSFUL TRANSACTIONS
DROP PROCEDURE IF EXISTS successfulTransaction;

DELIMITER $$
CREATE PROCEDURE successfulTransaction()
BEGIN
	DECLARE r_transactionId VARCHAR(20);
    DECLARE r_orderId VARCHAR(20);
    DECLARE r_mop VARCHAR(20);
    
	 DECLARE c_end INT DEFAULT 0;
    DECLARE c_transaction CURSOR FOR
		SELECT transactionId, orderId, modeOfPayment from transaction
        WHERE paymentStatus = true;
	DECLARE CONTINUE HANDLER FOR NOT FOUND SET c_end = 1;
	OPEN c_transaction;
		getSuccessfulTransaction: LOOP
			FETCH c_transaction INTO r_transactionId, r_orderId, r_mop;
			IF c_end = 1 THEN 
					LEAVE getSuccessfulTransaction;
			END IF;
            SELECT o.orderId, b.buyerId, b.firstName, b.middleName, b.lastName FROM orders o
            LEFT JOIN buyer b ON o.buyerId = b.buyerId
            WHERE o.orderId = r_orderId;
        END LOOP;
    CLOSE c_transaction;
END$$;
DELIMITER ;

-- Cart
DROP PROCEDURE IF EXISTS cart;

DELIMITER $$
	CREATE PROCEDURE cart()
    BEGIN
		-- for each customer
		DECLARE r_buyerId varchar(20);
        DECLARE r_firstName varchar(20);
        DECLARE r_middleName varchar(20);
        DECLARE r_lastName varchar(20);
        DECLARE r_email varchar(100);
        DECLARE c1_end INT DEFAULT 0;
        DECLARE c1_customer CURSOR FOR
			SELECT buyerId, firstName, middleName, lastName,email FROM buyer;
        DECLARE CONTINUE HANDLER FOR NOT FOUND SET c1_end = 1;
        OPEN c1_customer;
			getCustomer: LOOP
            
				FETCH c1_customer INTO r_buyerId, r_firstName, r_middleName, r_lastName, r_email;
				IF c1_end = 1 THEN 
					LEAVE getCustomer;
				END IF;
                SELECT 
						r_buyerId as "BuyerId", 
						CONCAT(r_firstName, " " ,r_middleName, " " ,r_lastName) as "Name",
						r_email as "Email";
                BEGIN
                    DECLARE r_productId varchar(20);
                    DECLARE r_dateTime varchar(20);
                    DECLARE r_quantity int;
                    DECLARE r_totalPrice int;
					DECLARE c2_end INT DEFAULT 0;
                    DECLARE c2_cartProducts CURSOR FOR
						SELECT productId, dateTime, quantity, totalPrice 
							FROM cart WHERE buyerId = r_buyerId;
					DECLARE CONTINUE HANDLER FOR NOT FOUND SET c2_end = 1;
                    OPEN c2_cartProducts;
						getCartProdcts: LOOP
							IF c2_end = 1 THEN 
								LEAVE getCartProdcts;
							END IF;
							FETCH c2_cartProducts INTO r_productId, r_dateTime, r_quantity, r_totalPrice;
                            SELECT 
								r_productId as "ProductId", 
								r_dateTime as "DateTime", 
								r_quantity as "Quantity", 
								r_totalPrice as "TotalPrice";
                        END LOOP;
                    CLOSE c2_cartProducts;
                END;
            END LOOP;
        CLOSE c1_customer;
        END$$;

DELIMITER ;

-- BILL

-- Brand Wise Product
drop procedure brandWiseProduct;

delimiter $$
    create procedure brandWiseProduct()
        begin
            declare finished int default 0;
            declare r_brandId varchar(100);
            declare c_product_details cursor for select brandID from brand;
            declare continue handler for not found set finished = 1;

            open c_product_details;
                c_loop: loop
                    fetch c_product_details into r_brandId;
                    if finished = 1 then
                        leave c_loop;
                    end if;

                    SELECT p.productName, c.categoryName, s.subCategoryName, b.brandName, p.price, p.quantity FROM product p 
                    LEFT JOIN category c ON c.categoryID = p.categoryId 
                    LEFT JOIN brand b ON b.brandID = p.brandId 
                    LEFT JOIN subCategory s ON s.subCategoryID = p.subCategoryId
                    WHERE b.brandID = r_brandId;

                end loop;
            close c_product_details;
        end$$
delimiter ;

-- CategoryWise

drop procedure if exists categoryWiseProduct;

delimiter $$
	create procedure categoryWiseProduct()
		begin
			declare finished int default 0;
            declare r_categoryId varchar(100);
            declare c_product_details cursor for select categoryId from category;
            declare continue handler for not found set finished = 1;
            
            open c_product_details;
				c_loop: loop
					fetch c_product_details into r_categoryId;
                    if finished = 1 then
						leave c_loop;
                    end if;
                    
                    SELECT p.productName, c.categoryName, s.subCategoryName, b.brandName, p.price, p.quantity FROM product p 
                    LEFT JOIN category c ON c.categoryID = p.categoryId 
                    LEFT JOIN brand b ON b.brandID = p.brandId 
                    LEFT JOIN subCategory s ON s.subCategoryID = p.subCategoryId
                    WHERE c.categoryId = r_categoryId;
                    
                end loop;
            close c_product_details;
		end$$
delimiter ;

-- SubCategoryWise

drop procedure if exists subcategoryWiseProduct;

delimiter $$
	create procedure subcategoryWiseProduct()
		begin
			declare finished int default 0;
            declare r_subcategoryId varchar(100);
            declare c_product_details cursor for select subCategoryId from subcategory;
            declare continue handler for not found set finished = 1;
            
            open c_product_details;
				c_loop: loop
					fetch c_product_details into r_subcategoryId;
                    if finished = 1 then
						leave c_loop;
                    end if;
                    
                    SELECT p.productName, c.categoryName, s.subCategoryName, b.brandName, p.price, p.quantity FROM product p 
                    LEFT JOIN category c ON c.categoryID = p.categoryId 
                    LEFT JOIN brand b ON b.brandID = p.brandId 
                    LEFT JOIN subCategory s ON s.subCategoryID = p.subCategoryId
                    WHERE s.subCategoryId = r_subcategoryId;
                    
                end loop;
            close c_product_details;
		end$$
delimiter ;

-- City Wise Sellers
drop procedure if exists cityWiseSellers;

delimiter $$
	create procedure cityWiseSellers()
		begin
			declare finished int default 0;
            declare r_state varchar(100);
            declare c_state cursor for select city from seller;
            declare continue handler for not found set finished = 1;
            
            open c_state;
				sellerDetails: loop
					fetch c_state into r_state;
                    if finished = 1 then
						leave sellerDetails;
                    end if;
                    
                    select concat(firstName, " ", middleName, " ", lastName) as "Name", 
                    concat (address1, " ", landmark, " ", area, " ", city, " ", state, " ", postalcode) as "Address",
                    contactNumber, email, gstNumber
                    from seller where city = r_state;
                end loop;
            close c_state;
        end$$
delimiter ;

-- State Wise Sellers

drop procedure if exists stateWiseSellers;

delimiter $$
	create procedure stateWiseSellers()
		begin
			declare finished int default 0;
            declare r_state varchar(100);
            declare c_state cursor for select state from seller;
            declare continue handler for not found set finished = 1;
            
            open c_state;
				sellerDetails: loop
					fetch c_state into r_state;
                    if finished = 1 then
						leave sellerDetails;
                    end if;
                    
                    select concat(firstName, " ", middleName, " ", lastName) as "Name", 
                    concat (address1, " ", landmark, " ", area, " ", city, " ", state, " ", postalcode) as "Address",
                    contactNumber, email, gstNumber
                    from seller where state = r_state;
                end loop;
            close c_state;
        end$$
delimiter ;

-- ********************************************************************************************************************************************************************

-- FUNCTIONS

-- Get Total Price
 drop function if exists getTotalPrice;
 
 delimiter $$
	create function getTotalPrice(p_productId varchar(100), p_quantity int) returns int deterministic
    begin
		declare ans int default 0;
        declare price_1 int default 0;
        
        select price from product where productId = p_productId into price_1;
        select price_1*p_quantity into ans;
        
        return ans;
    end$$
 delimiter ;

-- Transaction Count
drop function if exists transactionCount;

delimiter $$
	create function transactionCount() returns int deterministic
		begin
			declare count int default 0;
            declare finished int default 0;
            declare r_transactionId varchar(100);
            declare c_transactionId cursor for select transactionId from transaction;
            declare continue handler for not found set finished = 1;
            
            open c_transactionId;
				getCount: loop
					fetch c_transactionId into r_transactionId;
                    if finished = 1 then
						leave getCount;
                    end if;
                    
                    select count + 1 into count;
                end loop;
            close c_transactionId;
            
            return count;
        end$$
delimiter ;

-- Stock Product Name Wise
drop function if exists stockProductNameWise;

delimiter $$
	create function stockProductNameWise(p_productName varchar(100)) returns int deterministic
		begin
			declare stock int default 0;
            
            select quantity from product where productName = p_productName into stock;
            
            return stock;
        end$$
delimiter ;

-- Transaction Count with Product Name and Date Range as Parameter
drop function if exists productTransactionCount;

delimiter $$
	create function productTransactionCount(p_productName varchar(100), startingDate date, endingDate date) returns int deterministic
		begin
			declare count int default 0;
            declare finished int default 0;
            declare r_orderId varchar(100);
            declare sDate date;
            declare c_orderId cursor for select orderId from transaction;
            declare continue handler for not found set finished = 1;
            
            open c_orderId;
				getCount: loop
					fetch c_orderId into r_orderId;
                    if finished = 1 then
						leave getCount;
                    end if;
                    select date(o.dateTime) from orders o 
                    left join product p on o.productId = p.productId
                    where orderId = r_orderId and p.productName = p_productName into sDate;
                    
                    if sDate >= startingDate and sDate <= endingDate then
						set count = count+1;
                    end if;
                end loop;
            close c_orderId;
            return count;
        end$$
delimiter ;

-- BILL

DROP PROCEDURE IF EXISTS bill;

DELIMITER $$
	CREATE PROCEDURE bill()
    BEGIN
		DECLARE c_end INT DEFAULT 0;
        DECLARE r_buyerId varchar(20); 
        
        DECLARE c_buyer CURSOR FOR
			SELECT DISTINCT buyerId orders;
		DECLARE CONTINUE HANDLER FOR NOT FOUND SET c_end = 1;
        
        -- buyer id, order placement date time 
		-- Bill to: buyer p. details
		-- prod details,seller details(form order, get seller id), quty, amt, total,
		OPEN c_buyer;
			getBuyer:LOOP
				BEGIN
					DECLARE r_b_firstName varchar(100);
                    DECLARE r_b_lastName varchar(100);
                    DECLARE r_b_contactNumber varchar(100);
                    DECLARE r_b_email varchar(100);
                    DECLARE r_b_middleName varchar(100);
                    DECLARE r_s_firstName varchar(100);
                    DECLARE r_s_middleName varchar(100);
                    DECLARE r_s_lastName varchar(100);
					DECLARE r_s_contactNumber varchar(100);
                    DECLARE r_s_email varchar(100);
                    
					FETCH c_buyer 
					INTO  r_buyerId, r_orderId, r_sellerId, r_totalPrice, 
						r_adderss1, r_landmark, r_area, r_city, r_state ,r_country , r_dateTime;
					IF c_end = 1 THEN
						LEAVE getBuyer;
					END IF;
					
                    -- get buyer details
						SELECT firstName, middleName,lastName, contactNumber, email from buyer 
                        where buyerId = r_buyerId 
                        into r_b_firstName, r_b_middleName, r_b_lastName, r_b_contactNumber, r_b_email;

                    -- get seller details
						SELECT firstName, middleName,lastName, contactNumber, email from buyer 
                        where buyerId = r_buyerId 
                        into r_s_firstName, r_s_middleName, r_s_lastName, r_s_contactNumber, r_s_email;
                        
                        select concat(r_b_firstName, r_b_middleName, r_b_lastName) as "b_Name", r_b_contactNumber as "b_contactNumber", r_b_email as "b_email", 
                        concat(r_s_firstName , r_s_middleName, r_s_lastName) as "s_name", r_s_contactNumber as "s_contactNumber", r_s_email as "s_email";
                        
                    -- get order
						BEGIN
							DECLARE r_orderId varchar(100);
                            DECLARE r_sellerId varchar(20);
							DECLARE r_totalPrice int;
							DECLARE r_address1 varchar(100);
							DECLARE r_landmark varchar(100);
							DECLARE r_area  varchar(100);
							DECLARE r_city varchar(100);
							DECLARE r_state varchar(100);
							DECLARE r_country varchar(100);
							DECLARE r_orderDateTime date;
                            declare finish1 int default 0;
                            declare c_order cursor for
								select orderId from orders where buyerId = r_buyerId;
							DECLARE CONTINUE HANDLER FOR NOT FOUND SET c_end = 1;
                            open c_order;
								getOrder: loop
									fetch c_order into orderId;
                                    if finish1 = 1 then 
										leave getOrder;
                                    end if;
									-- SELECT sellerId, totalPrice, adderss1, landmark, area, city, state ,country , dateTime FROM order where orderId = r_orderId;
                                end loop;
                            close c_order;
                        END;
                    -- get total
				END;
            END LOOP;
        CLOSE c_buyer;
    END$$;
DELIMITER ;



-- *****************************************************************************************************************************************************************
-- TRIGGERS

-- Check Balance > 10000
drop trigger if exists checkBalance;

delimiter $$
	create trigger checkBalance before insert on employee for each row
		begin
			if new.salary < 10000 then
				signal sqlstate '20000' set message_text = 'Salary must be at least 10000Rs';
			end if;
        end$$
delimiter ;

-- Trigger to automatically add details of recently placed order in shipping table

DROP TRIGGER IF EXISTS autoAddShipping;

DELIMITER $$
	CREATE TRIGGER autoAddShipping before insert on orders for each row
    begin
		insert into shipping(orderId, dispatchDate, arrivalDate) Values ( new.orderId, date(new.dateTime)+2, date(new.dateTime)+10);
    end$$;
DELIMITER ;

-- Delete from product and specification if deleted from subcategory
drop trigger if exists deleteChildSubcategoryWise;

delimiter $$
	create trigger deleteChildSubcategoryWise before delete on subcategory for each row
		begin
			delete from product where subCategoryId = old.subCategoryId;
            delete from specification where subCategoryId = old.subCategoryId;
		end$$
delimiter ;

-- Category Deleted then delete from Product, subcategory and specification

drop trigger if exists deleteChildCategoryWise;

delimiter $$
	create trigger deleteChildCategoryWise before delete on category for each row
    begin
		delete from product where categoryId = old.categoryId;
		delete from subcategory where categoryId = old.categoryId;
        delete from specification where categoryId = old.categoryId;
    end$$
delimiter ;
