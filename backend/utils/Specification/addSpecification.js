const pool = require('../../pool');

exports.addSpecification = (req,res) =>{
    let specificationId = req.body.specificationId;
    let productId = req.body.productId;
    let categoryId = req.body.categoryId;
    let subCategoryId = req.body.subCategoryId;
    let brandId = req.body.brandId;
    let model = req.body.model;
    let description = req.body.description;

    pool.getConnection((err => {
        if(err){
            res.send({
                status: 0,
                msg: err.message,
                data: null,
            });
        }
        else{
            let fetch = "INSERT INTO specification VALUES('"+ specificationId + "','" + productId + "','" + catrgoryId+ "','" + subCategoryId+ "','" + brandId+ "','" + model+ "','" + description + "');";
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
                        msg: 'Added Specification',
                        data: result,
                    });
                }
            })
        }
    }))
}