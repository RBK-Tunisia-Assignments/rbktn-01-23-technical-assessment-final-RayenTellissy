import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Edit({food,changeView,fetchData}) {
  const [name,setName]=useState(food.recepie_Name)
  const [cook,setCook]=useState(food.Cook_Time)
  const [prep,setPrep]=useState(food.Prep_Time)
  const [serves,setServes]=useState(food.Serves)
  const [category,setCategory]=useState(food.categorie)
  const [description,setDescription]=useState(food.recepie_Description)
  const [ingredients,setIngredients]=useState(food.recepie_Ingredients)
  const [image,setImage]=useState(food.recepie_Image)
  const id=food.recepie_Id

  const handleUpdate=()=>{
    const editedFood={
      recepie_Name: name,
      Cook_Time: cook,
      Prep_Time: prep,
      Serves: serves,
      categorie: category,
      recepie_Description: description,
      recepie_Ingredients: ingredients,
      recepie_Image: image
    }
    axios.put(`http://localhost:4000/api/recepies/${id}`,editedFood).then(fetchData)
    changeView("Allrecepies")
  }


  return (
    <div className="add-recipe-form ">
      <div className="form-group">
        <label>Name:</label>
        <input type="text" placeholder="Name" onChange={e=>setName(e.target.value)}/>
      </div>
      <div className="form-group">
        <label>Cook Time:</label>
        <input type="number" placeholder="Cooking Time" onChange={e=>setCook(e.target.value)}/>
      </div>
      <div className="form-group">
        <label>Prep Time:</label>
        <input type="number" placeholder="Preparation Time" onChange={e=>setPrep(e.target.value)}/>
      </div>
      <div className="form-group">
        <label>Serves:</label>
        <input type="number" placeholder="serves" onChange={e=>setServes(e.target.value)}/>
      </div>
      <div className="form-group">
        <label>Category:</label>
        <input type="text" placeholder="Category" onChange={e=>setCategory(e.target.value)}/>
      </div>
      <div className="form-group">
        <label>Description:</label>
        <input type="text" placeholder="Description" onChange={e=>setDescription(e.target.value)}/>
      </div>
      <div className="form-group">
        <label>Ingredients:</label>
        <input placeholder="Ingredients" onChange={e=>setIngredients(e.target.value)}/>
      </div>

      <div className="form-group">
        <label>Image:</label>
        <input type="text" placeholder="Image URL" onChange={e=>setImage(e.target.value)}/>
      </div>
      <button className="create-recipe-btn" onClick={handleUpdate}>Edit Recipe</button>
    </div>
  );
}

export default Edit;