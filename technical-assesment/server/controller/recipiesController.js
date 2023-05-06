const { getAll, add }=require("../model/recipiesModel")

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

module.exports = {
  getrecepie, addrecepie
};
