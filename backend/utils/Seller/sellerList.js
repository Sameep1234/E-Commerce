const pool = require('../../pool');

exports.sellerList = (req,res) => {
    pool.getConnection((err) => {
        if(err){
            res.send({
                data: null,
                msg: err.message,
                status: 0
            })
        }
        else{
            let fetch = 'SELECT *, concat(firstName, " ",middleName, " ", lastName) as "name" FROM seller;';
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
                        msg: 'Seller List',
                        data: result,
                    });
                }
            })
        }
    })
}