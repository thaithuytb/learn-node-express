const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars  = require('express-handlebars');
const app = express();
// HTTP logger
app.use(morgan('combined'));
//template engine
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
//set views express handlebar
app.set('views', path.join(__dirname, 'resources/views'));
//set port
const PORT = 3999;

app.get('/', (req, res) => res.render(`Home`));

app.listen(PORT, ()=> console.log(`Server runing in port: ${3999}`));