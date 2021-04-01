const pool = require('../../pool');

exports.addCategory = (req,res) =>{
    let categoryId = req.body.sellerId;
    let categoryName = req.body.categoryName;

    pool.getConnection((err => {
        if(err){
            res.send({
                status: 0,
                msg: err.message,
                data: null,
            });
        }
        else{
            let fetch = "INSERT INTO category VALUES('"+ categoryId + "','" + categoryName + "');";
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
                        msg: 'Added Category',
                        data: result,
                    });
                }
            })
        }
    }))
}