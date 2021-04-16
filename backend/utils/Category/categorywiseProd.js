const pool = require('../../pool');

exports.categorywiseProd = (req, res) => {
    pool.getConnection((err) => {
        if(err){
            res.send({
                data: null,
                msg: err.message,
                status: 0
            })
        }
        else{
            let fetch = `call categoryWiseProduct();`;
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
                        msg: 'Category wise Product List',
                        data: result,
                    });
                }
            })
        }
    })
}
