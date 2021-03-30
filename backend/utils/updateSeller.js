const pool = require('../pool');

exports.updateSeller = (req,res) => {

    let sellerId = req.body.sellerId;
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
    let GST = req.body.GST; 

    pool.getConnection((err => {
        if(err){
            res.send({
                status: 0,
                msg: err.message,
                data: null,
            });d
        }
        else{
            let fetch = "UPDATE seller SET firstname = '"+  firstName + "', middleName = '" + middleName + "',lastName = '" + lastName + "', appartmentNumber='" + appartmentNumber + "',address1='" + address1 + "',landmark='" + landmark + "',area='" + area+ + "',city='" + city + "',state='" + state + "',country='"+ country + "',contactNumber='" + contactNumber + "',email='"+ email+  "',GST='" + GST+" WHERE sellerId = '" + {sellerId} +"';";
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
                        msg: 'Updated seller',
                        data: result,
                    });
                }
            })
        }
    }))
}