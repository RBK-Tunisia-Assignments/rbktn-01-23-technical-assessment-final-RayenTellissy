const connection = require("../database-mysql/index");
//uncomment this line if you want to use promises
// const  connection  = require("../database-mysql/index").promise();

const getAll = (callback) => {
  const sql="select * from recepie"
  connection.query(sql,function(err,results){
    callback(err,results)
  })
};

const add=(callback,cook,prep,name,serves,category,image,description,ingredients,userid)=>{
  const sql=`insert into recepie (Cook_Time,Prep_Time,recepie_Name,Serves,categorie,recepie_Image,recepie_Description,recepie_Ingredients,users_user_Id) values(${cook},${prep},"${name}",${serves},"${category}","${image}","${description}","${ingredients}",${userid})`
  connection.query(sql,function(err,results){
    callback(err,results)
  })
}

module.exports = { getAll, add };
