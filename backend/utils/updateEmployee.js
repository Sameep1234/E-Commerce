const pool = require('../pool');

exports.updateEmployee = (req,res) => {

    let employeeId = req.body.employeeId;
    let employeeType = req.body.employeeType;
    let firstName = req.body.firstName;
    let middleName = req.body.middleName;
    let lastName = req.body.lastName;
    let salary = req.body.salary;
    let hiringDate = req.body.hiringDate;

    pool.getConnection((err => {
        if(err){
            res.send({
                status: 0,
                msg: err.message,
                data: null,
            });d
        }
        else{
            let fetch = "UPDATE employee SET employeeType = '"+ employeeType+ "',firstName='"+firstName+ "',middleName='"+ middleName+ "',lastName='"+ lastName+ "',salary='"+ salary+ "',hiringDate='"+ hiringDate +"';";
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
                        msg: 'Updated employee',
                        data: result,
                    });
                }
            })
        }
    }))
}