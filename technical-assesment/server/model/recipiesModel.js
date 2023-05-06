const connection = require("../database-mysql/index");
//uncomment this line if you want to use promises
// const  connection  = require("../database-mysql/index").promise();

const getAll = (callback) => {
  const sql="select * from recepie"
  connection.query(sql,function(err,results){
    callback(err,results)
  })
};

module.exports = { getAll };
