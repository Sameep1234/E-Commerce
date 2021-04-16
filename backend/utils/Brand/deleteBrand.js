const pool = require('../../pool'); 

exports.deleteBrand = (req,res) => {
    let brandId = req.header.brandId;

    pool.createConnection((err => {
        if(err){
            res.send({
                status: 0,
                msg: err.message,
                data: null,
            });
        }
        else{
            let fetch = "DELETE FROM brand WHERE brandId = "+ {brandId} +";";
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
                        msg: 'Deleted Brand',
                        data: result,
                    });
                }
            })
        }
    }))
}