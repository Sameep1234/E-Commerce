//Fetching required modules/packages
const express = require('express');
const dotenv = require('dotenv');
dotenv.config() // Start env. process
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const routes = require('./routes');

//Configuring required middlewares
app.use(cors({origin: true, credentials: true}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Since we are gonna do jwt, Session it required??
app.use(session({
    secret: 'User Authorised',
    resave: false,
    saveUninitialized: true,
}));

//Call the required route from routes.js file.
app.use('/', routes);

//Start the server/listen to the request.
app.listen(port, () => {console.log('Server running at port ' + port)})