const { getAll, add, remove, update, search, favorite, removefavorite, getAllFavorites, getOneRec }=require("../model/recipiesModel")

const getrecepie = (req, res) => {
  getAll(function(err,results){
    if(err){
      res.send(err)
    }
    else{
      res.send(results)
    }
  })
};

const addrecepie=(req,res)=>{
  const { Cook_Time, Prep_Time, recepie_Name, Serves, categorie, recepie_Image, recepie_Description, recepie_Ingredients, users_user_Id}=req.body
  add(function(err,results){
    if(err){
      res.send(err)
    }
    else{
      res.send(results)
    }
  },Cook_Time,Prep_Time,recepie_Name,Serves,categorie,recepie_Image,recepie_Description,recepie_Ingredients,users_user_Id)
}

const deleterecepie=(req,res)=>{
  const id=req.params.id
  remove(function(err,results){
    if(err){
      res.send(err)
    }
    else{
      res.send(results)
    }
  },id)
}

const updaterecepie=(req,res)=>{
  const {id}=req.params
  const { Cook_Time, Prep_Time, recepie_Name, Serves, categorie, recepie_Image, recepie_Description, recepie_Ingredients}=req.body
  update(function(err,results){
    if(err){
      res.send(err)
    }
    else{
      res.send(results)
    }
  },Cook_Time,Prep_Time,recepie_Name,Serves,categorie,recepie_Image,recepie_Description,recepie_Ingredients,id)
}

const searchrecepie=(req,res)=>{
  const query=req.query.query
  console.log(query)
  search(function(err,results){
    if(err){
      res.send(err)
    }
    else{
      res.send(results)
    }
  },query)
}

const favoriterecepie=(req,res)=>{
  const userid=req.params.userid
  const recid=req.params.recid
  favorite(function(err,results){
    if(err){
      res.send(err)
    }
    else{
      res.send(results)
    }
  },userid,recid)
}

const deletefavorite=(req,res)=>{
  const { userid, recid }=req.params
  removefavorite(function(err,results){
    if(err){
      res.send(err)
    }
    else{
      res.send(results)
    }
  },userid,recid)
}

const getfavorites=(req,res)=>{
  const { userid }=req.params
  getAllFavorites(function(err,results){
    if(err){
      res.send(err)
    }
    else{
      res.send(results)
    }
  },userid)
}

const getOneRecepie=(req,res)=>{
  const { recid }=req.params
  getOneRec(function(err,results){
    if(err){
      res.send(err)
    }
    else{
      res.send(results)
    }
  },recid)
}

module.exports = {
  getrecepie, addrecepie, deleterecepie, updaterecepie, searchrecepie, favoriterecepie, deletefavorite, getfavorites, getOneRecepie
};
