const pool = require('../../pool');

exports.getEmployee = (req,res) =>{
    let empId = req.header.empId;

    pool.getConnection((err => {
        if(err){
            res.send({
                status: 0,
                msg: err.message,
                data: null,
            });
        }
        else{
            let fetch = "SELECT *  FROM employee WHERE employeeId = '" + {empId} +"';";
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
                        msg: 'Employee Details',
                        data: result,
                    });
                }
            })
        }
    }))
}