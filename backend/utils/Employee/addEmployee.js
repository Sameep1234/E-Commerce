const pool = require('../../pool');

exports.addEmployee = (req,res) =>{
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
            });
        }
        else{
            let fetch = "INSERT INTO employee VALUES('" +employeeId+ "','"+ employeeType+ "','"+firstName+ "','"+ middleName+ "','"+ lastName+ "','"+ salary+ "','"+ hiringDate + "');";
            let temp = fetch + '\n';
            fs.appendFile('Query.txt', temp, err => {
                if(err) console.log(err);
            });
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
                        msg: 'Added employee',
                        data: result,
                    });
                }
            })
        }
    }))
}