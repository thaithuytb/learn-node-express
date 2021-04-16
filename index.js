const express = require('express');

const app = express();

const PORT = 3999;

app.get('/', (req, res) => res.send(`<h1>Hello woul ddd</h2>`));

app.listen(PORT, ()=> console.log(`Server runing in port: ${3999}`));