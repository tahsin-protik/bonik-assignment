const { DataTypes} = require('sequelize');
const sequelize = require('.');



const Order_data = sequelize.define('order_data', {
    status: {
        type: DataTypes.INTEGER,
    },
    date: {
        type: DataTypes.DATEONLY
    }
})

module.exports = Order_data