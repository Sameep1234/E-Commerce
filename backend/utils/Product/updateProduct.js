const pool = require('../../pool');

exports.updateProduct = (req,res) => {

   let productId = req.body.productd;
   let productName = req.body.productName;
   let categoryId = req.body.categoryId;
   let subCategoryId = req.body.subCategoryId;
   let brandId = req.body.brandId;
   let specificationId = req.body.specificationId;
   let color = req.body.color;
   let price = req.body.price;
   let quantity = req.body.quatity;
   let size = req.body.size;

    pool.getConnection((err => {
        if(err){
            res.send({
                status: 0,
                msg: err.message,
                data: null,
            });d
        }
        else{
            let fetch = "UPDATE product SET productName = '"+  productName + "', categoryId = '" + categoryId + "',subCategoryId = '" + subCategoryId + "', brandId='" + brandId + "',specificationId='" + specificationId + "',color='" + color + "',price='" + price+ + "',quantity='" + quantity + "',size='" + size +"' WHERE productId='" + productId + "';";
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
                        msg: 'Updated product',
                        data: result,
                    });
                }
            })
        }
    }))
}