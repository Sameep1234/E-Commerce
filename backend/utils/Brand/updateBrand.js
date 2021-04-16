const pool = require('../../pool');

exports.updateBrand = (req,res) => {

    let brandId = req.body.employeeId;
    let brandName = req.body.brandName;

    pool.getConnection((err => {
        if(err){
            res.send({
                status: 0,
                msg: err.message,
                data: null,
            });d
        }
        else{
            let fetch = "UPDATE brand SET brandName = '"+ brandName +"';";
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
                        msg: 'Updated brand',
                        data: result,
                    });
                }
            })
        }
    }))
}