const express = require('express');
const morgan = require('morgan')

const app = express();
app.use(morgan('combined'))
const PORT = 3999;

app.get('/', (req, res) => res.send(`<h1>Hello woul ddd</h2>`));

app.listen(PORT, ()=> console.log(`Server runing in port: ${3999}`));