require('dotenv').config();
const data_db = require('./models/data');
const sequelize = require('./models');
console.log(sequelize);
data_db.sync().then((e)=>{console.log(e) }).catch((e )=>{ console.log(e) });;