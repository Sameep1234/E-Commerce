const pool = require('../../pool');

exports.stockProductNameWise = (req, res) => {
    let prod_name = req.header.p_productName;
    pool.getConnection((err) => {
        if(err){
            res.send({
                data: null,
                msg: err.message,
                status: 0
            })
        }
        else{
            let fetch = `select stockProductNameWise(`+ prod_name +`);`;
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
                        msg: 'stock product name wise List',
                        data: result,
                    });
                }
            })
        }
    })
}
