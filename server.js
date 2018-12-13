const express = require('express');
const app = express();
const load = require('express-load');
const bodyParser = require('body-parser')
const routes  = require('./src/app/routes/index');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use(routes);

app.listen(3000, function() {
    console.log('server running on port 3000')
});

