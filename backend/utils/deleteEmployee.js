const pool = require('../pool'); 

exports.deleteEmployee = (req,res) => {
    let employeeId = req.header.employeeId;

    pool.createConnection((err => {
        if(err){
            res.send({
                status: 0,
                msg: err.message,
                data: null,
            });
        }
        else{
            let fetch = "DELETE FROM employee WHERE employeeId = "+ {employeeId} +";";
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
                        msg: 'Deleted Employee',
                        data: result,
                    });
                }
            })
        }
    }))
}