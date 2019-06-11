const express = require('express'), 
    app = express(),
    port = process.env.PORT || 8081;

const bodyParser = require('body-parser');
const routes = require('./routes/rotas'); 
const db = require('./models');
const cors = require('cors');
app.use(bodyParser.json());
app.use(express.static(__dirname + '/static'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


routes(app, db); 

app.listen(port, () => console.log('Express iniciado em http://localhost:' + port));