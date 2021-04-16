const pool = require('../../pool');

exports.productTransactionCount = (req, res) => {
   let p_productName = req.header.p_productName;
   let startingDate =  req.header.startingDate;
   let endingDate = req.header.endingDate;
    pool.getConnection((err) => {
        if(err){
            res.send({
                data: null,
                msg: err.message,
                status: 0
            })
        }
        else{
            let fetch = `call productTransactionCount(`+ p_productName+`,`+ startingDate+`,`+endingDate + `);`;
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
                        msg: 'Brandwise Product List',
                        data: result,
                    });
                }
            })
        }
    })
}
