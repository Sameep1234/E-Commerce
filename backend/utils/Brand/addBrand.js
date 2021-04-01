const pool = require('../../pool');

exports.addBrand = (req,res) =>{
    let brandId = req.body.brandId;
    let brandName = req.body.brandName;

    pool.getConnection((err => {
        if(err){
            res.send({
                status: 0,
                msg: err.message,
                data: null,
            });
        }
        else{
            let fetch = "INSERT INTO brand VALUES('"+ brandId + "','" + brandName+"');";
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
                        msg: 'Brand Details',
                        data: result,
                    });
                }
            })
        }
    }))
}