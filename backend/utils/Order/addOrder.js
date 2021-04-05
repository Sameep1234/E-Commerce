const pool = require('../../pool');
const fs = require('fs');

exports.addOrder = (req, res) => {

    let orderId = req.body.orderId;
    let buyerId = req.body.buyerId;
    let productId = req.body.productId;
    let quantityOrdered = req.body.quantity;
    let sellerId = req.body.sellerId;
    let address1 = req.body.appartmentName;
    let landmark = req.body.landmark;
    let area = req.body.area;
    let city = req.body.city;
    let state = req.body.state;
    let country = req.body.country;
    let totalPrice=1000;

    pool.getConnection((err => {
        if (err) {
            res.send({
                status: 0,
                msg: err.message,
                data: null,
            });
        }
        else {
            let fetch = "INSERT INTO orders VALUES('" + orderId + "',current_timestamp,'" + buyerId + "','" + productId + "','" + quantityOrdered + "','" + totalPrice + "','" + address1 + "','" + landmark + "','" + area + "','" + city + "','" + state + "','" + country + "','" + sellerId + "');";
            pool.query(fetch, (err, result) => {
                if (err) {
                    res.send({
                        data: null,
                        msg: err.message,
                        status: 0
                    })
                }
                else {
                    let temp = fetch + '\n';
                    fs.appendFile('Query.txt', temp, err => {
                        if (err) console.log(err);
                    });
                    res.send({
                        status: 1,
                        msg: 'Order added',
                        data: result,
                    });
                }
            })
        }
    }))
}