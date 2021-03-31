const pool = require('../../pool');

exports.addSeller = (req, res) => {
    console.log("HEREEE")
    let sellerId = req.body.sellerId;
    let firstName = req.body.firstName;
    let middleName = req.body.middleName;
    let lastName = req.body.lastname;

    let shopNumber = req.body.shopNumber;
    let address1 = req.body.address1;
    let landmark = req.body.landmark;
    let area = req.body.area;
    let city = req.body.city;
    let state = req.body.state;
    let country = req.body.country;
    let postalCode = req.body.postalCode;

    let contactNumber = req.body.contactNumber;
    let email = req.body.email;
    let GST = req.body.GST;

    pool.getConnection((err => {
        if (err) {
            res.send({
                status: 0,
                msg: err.message,
                data: null,
            });
        }
        else {
            let fetch = "INSERT INTO seller VAUES('" + sellerId + "','" + firstName + "','" + middleName + "','" + lastName + "','" + shopNumber + "','" + address1 + "','" + landmark + "','" + area + + "','" + city + "','" + state + "','" + country + "','" + postalCode + "','" + contactNumber + "','" + email + "','" + GST + "';";
            pool.query(fetch, (err, result) => {
                if (err) {
                    res.send({
                        data: null,
                        msg: err.message,
                        status: 0
                    })
                }
                else {
                    res.send({
                        status: 1,
                        msg: 'Added seller',
                        data: result,
                    });
                }
            })
        }
    }))
}