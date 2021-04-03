const pool = require("../../pool");

exports.employeeList = (req,res) => {
    pool.getConnection((err) => {
        if(err){
            res.send({
                data: null,
                msg: err.message,
                status: 0
            })
        }
        else{
            let fetch = 'SELECT employeeId, employeeType, firstName, middleName, lastName, salary, DATE_FORMAT(hiringDate, "%d %M %Y") as hiringDate FROM employee GROUP BY(employeeType)';
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
                        msg: 'Employee List',
                        data: result,
                    });
                }
            })
        }
    })
}