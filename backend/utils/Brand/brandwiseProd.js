const pool = require('../../pool');

exports.brandwiseProd = (req, res) => {
    pool.getConnection((err) => {
        if(err){
            res.send({
                data: null,
                msg: err.message,
                status: 0
            })
        }
        else{
            let fetch = 'call brandWiseProduct();';
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
                        msg: 'Brandwise Product List',
                        data: result,
                    });
                }
            })
        }
    })
}
