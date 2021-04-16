const pool = require('../../pool');

exports.subCategoryList = (req,res) => {
    pool.getConnection((err) => {
        if(err){
            res.send({
                data: null,
                msg: err.message,
                status: 0
            })
        }
        else{
            let fetch = 'SELECT s.subCategoryId, s.subCategoryName, c.categoryName FROM subCategory s LEFT JOIN category c on c.categoryId = s.categoryId;';
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
                        msg: 'Sub Category List',
                        data: result,
                    });
                }
            })
        }
    })
}