const pool = require('../../pool');

exports.cartList = () => {
    pool.getConnection((err) => {
        if(err){
            res.send({
                data: null,
                msg: err.message,
                status: 0
            })
        }
        else{
            let fetch = 'SELECT buyerId, productId, quantity, total price FROM cart;';
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
                        msg: 'Cart List',
                        data: result,
                    });
                }
            })
        }
    })
}
