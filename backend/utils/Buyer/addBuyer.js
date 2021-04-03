const pool = require('../../pool');

exports.addBuyer = (req,res) =>{
    let buyerId = req.body.buyerId;
    let firstName = req.body.firstName;
    let middleName = req.body.middleName;
    let lastName = req.body.lastname;
    let appartmentNumber = req.body.appartmentNumber;
    let address1 = req.body.address1;
    let landmark = req.body.landmark;
    let area = req.body.area;
    let city = req.body.city;
    let state = req.body.state;
    let country = req.body.country;
    let contactNumber = req.body.contactNumber;
    let email = req.body.email; 

    pool.getConnection((err => {
        if(err){
            res.send({
                status: 0,
                msg: err.message,
                data: null,
            });
        }
        else{
            let fetch = "INSERT INTO buyer VALUES('"+ buyerId + "','" + firstName + "','" + middleName + "','" + lastName + "','" + appartmentNumber + "','" + address1 + "','" + landmark + "','" + area+ + "','" + city + "','" + state + "','"+ country + "','" + contactNumber + "','"+ email+"');";
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
                        msg: 'Employee Details',
                        data: result,
                    });
                }
            })
        }
    }))
}