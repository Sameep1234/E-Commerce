const pool = require('../../pool');

exports.addOrder = (req,res) =>{

    let orderId = req.body.orderId;
    let dateTime =  req.body.dateTime;
    let buyerId= req.body.buyerId;
    let productId = req.body.productId;
    let quantityOrdered = req.body.quantityOrdered;
    let totalPrice =  req.body.totalPrice;
    let sellerId = req.body.sellerId;
    let address1 = req.body.address1;
    let landmark = req.body.landmark;
    let area = req.body.area;
    let city = req.body.city;
    let state = req.body.state;
    let country = req.body.country;

    pool.getConnection((err => {
        if(err){
            res.send({
                status: 0,
                msg: err.message,
                data: null,
            });
        }
        else{
            let fetch = "INSERT INTO orders VALUES('"+ orderId + "','" + dateTime + "','" + buyerId + "','" + productId + "','" + quantityOrdered + "','" + totalPrice + "','" + address1+  "','" + landmark+  "','"+area +  "','"+city+  "','"+ state+  "','"+country  + "','" + sellerId+"');";
            pool.query(fetch, (err,result) => {
                if(err){
                   res.send({
                        data: null,
                        msg: err.message,
                        status: 0
                    })
                }
                else{
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