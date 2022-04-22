require('dotenv').config();
const express = require('express');
const { count_query_by_date_status } = require('./controllers/orderController');
const app = express()
const port = process.env.APP_PORT
const sequelize = require('./models/index'); 

sequelize.authenticate().then(console.log('Database Connected'));



app.set('view engine', 'ejs');

app.get('/:start_date/:end_date/:status', count_query_by_date_status);

app.listen(port, () => {
    console.log('Serever Running at http://localhost:'+port+"/")
})