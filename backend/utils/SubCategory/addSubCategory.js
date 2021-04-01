const pool = require('../../pool');

exports.addSubCategory = (req,res) =>{
    let subCategoryId = req.body.sellerId;
    let subCategoryName = req.body.subCategoryName;

    pool.getConnection((err => {
        if(err){
            res.send({
                status: 0,
                msg: err.message,
                data: null,
            });
        }
        else{
            let fetch = "INSERT INTO subCategory VALUES('"+ subCategoryId + "','" + subCategoryName + "');";
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
                        msg: 'Added Sub Category',
                        data: result,
                    });
                }
            })
        }
    }))
}