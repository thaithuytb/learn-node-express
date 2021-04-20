const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const app = express();
//import db
const db = require('./config/db');
db.connect();
//import route
const route = require('./Routes');
//static files
app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));
//midleware-----------
// push data from submit
app.use(express.urlencoded({
    extended: true
}));
// push data from HMLHttprequest, fetch, axious
app.use(express.json());
//midleware-----------

//template engine
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
//set views express handlebar
app.set('views', path.join(__dirname, 'resources/views'));
//set port
const PORT = 3999;

route(app);

// app.get('/', (req, res) => res.render(`Home`));
// app.get('/bai-viet', (req, res) => res.render(`Post`));
// app.get('/dang-ki', (req, res) => res.render(`SignIn`));
// app.get('/dang-nhap', (req, res) => res.render(`SignUp`));

app.listen(PORT, () => console.log(`Server runing in port: ${PORT}`));