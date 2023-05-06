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

const remove=(callback,id)=>{
  const sql=`delete from recepie where recepie_Id=${id}`
  connection.query(sql,function(err,results){
    callback(err,results)
  })
}

const update=(callback,cook,prep,name,serves,category,image,description,ingredients,id)=>{
  const sql=`update recepie set Cook_Time=${cook}, Prep_Time=${prep},recepie_Name="${name}",Serves=${serves},categorie="${category}",recepie_Image="${image}",recepie_Description="${description}",recepie_Ingredients="${ingredients}" where recepie_Id=${id}`
  connection.query(sql,function(err,results){
    callback(err,results)
  })
}

const search=(callback,query)=>{
  if(isNaN(query)){
    const sql=`select * from recepie where recepie_Ingredients="${query}"`
    connection.query(sql,function(err,results){
      callback(err,results)
    })
  }
  else{
    const sql=`select * from recepie where Cook_Time=${query}`
    connection.query(sql,function(err,results){
      callback(err,results)
    })
  }
}

const favorite=(callback,userid,recid)=>{
  const sql=`insert into favorites (user_id,recepie_id) values(${userid},${recid})`
  connection.query(sql,function(err,results){
    callback(err,results)
  })
}

const removefavorite=(callback,userid,recid)=>{
  const sql=`delete from favorites where user_id=${userid} and recepie_id=${recid}`
  connection.query(sql,function(err,results){
    callback(err,results)
  })
}

const getAllFavorites=(callback,userid)=>{
  const sql=`select recepie_id from favorites where user_id=${userid}`
  connection.query(sql,function(err,results){
    callback(err,results)
  })
}

const getOneRec=(callback,recid)=>{
  const sql=`select * from recepie where recepie_id=${recid}`
  connection.query(sql,function(err,results){
    callback(err,results)
  })
}

module.exports = { getAll, add, remove, update, search, favorite, removefavorite, getAllFavorites, getOneRec };
