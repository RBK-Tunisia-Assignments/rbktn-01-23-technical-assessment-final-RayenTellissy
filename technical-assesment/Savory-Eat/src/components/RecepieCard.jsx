import React from "react";
import "../App.css";
import axios from "axios"

const RecepieCard = ({id,recepie_Image,recepie_Name,Cook_Time,Prep_Time,Serves,fetchData,changeView,click}) => {

  const handleDelete=()=>{
    axios.delete(`http://localhost:4000/api/recepies/${id}`).then(fetchData)
  }

  const handleUpdate=()=>{
    click()
    changeView("Editrecepie")
  }

  return (
    <>
      <div className="card">
          <button className="delete" onClick={handleDelete}>delete</button>
          <button className="update" onClick={handleUpdate}>update </button>

          <>
            <div className="header">
              <img
                className="img"
                src={recepie_Image}
                alt="food"
              />
            </div>
            <div className="text">
              <h1 className="food">{recepie_Name}</h1>
              <i> Cook Time: {Cook_Time}</i> <br />
              <i> Prep Time: {Prep_Time}</i> <br />
              <i> Serves: {Serves} </i>
            </div>
          </>
        </div>
    </>
  );
};

export default RecepieCard;
