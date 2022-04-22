const data_db = require("../models/data");
const { Op, date } = require("sequelize");

async function count_query_by_date_status(req, res) {
  try {
    const { start_date, end_date, status } = req.params;
    const start_date_object = new Date(start_date);
    const end_date_object = new Date(end_date);

    // console.log(end_date_object);

    const order_data = await data_db.findAll({
      where: {
        date: {
          [Op.and]: [
            { [Op.gte]: start_date_object },
            { [Op.lte]: end_date_object },
          ],
        },
        status: status,
      },
      order: [["date", "ASC"]],
    });

    const result = [];
    let iterator = 0;

    for (
      let i = start_date_object, current = 0, iterator = 0;
      i <= end_date_object;
      i.setDate(i.getDate() + 1), current++
    ) {
      let currentDate = i.toISOString().slice(0, 10);
      result.push({
        status: status,
        count: 0,
        date: currentDate,
      });

      for (; iterator < order_data.length; iterator++) {
        // console.log()
        if (order_data[iterator].date != currentDate) break;
        result[current].count++;
      }
    }

    // let prev_date = null;
    // iterator = -1;
    // for(x of order_data){
    //   if(x.date == prev_date) {
    //     result[iterator].count+=1;
    //   }
    //   else{
    //     result.push({
    //       status : x.status,
    //       count: 1,
    //       date : x.date
    //     })
    //     iterator+=1;
    //   }
    //   prev_date = x.date;
    // }

    // await data_db.create({status: 1, date : dummy});

    // console.log(order_data);
    return res.send(200, result);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  count_query_by_date_status,
};
