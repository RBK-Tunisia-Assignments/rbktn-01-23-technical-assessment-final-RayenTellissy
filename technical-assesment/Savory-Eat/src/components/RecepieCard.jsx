import React from "react";
import "../App.css";
import axios from "axios"

const RecepieCard = ({id,recepie_Image,recepie_Name,Cook_Time,Prep_Time,Serves,fetchData}) => {

  const handleDelete=()=>{
    axios.delete(`http://localhost:4000/api/recepies/${id}`).then(fetchData)
  }

  return (
    <>
      <div className="card">
          <button className="delete" onClick={handleDelete}>delete</button>
          <button className="update">update </button>

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
              <i> {Cook_Time}</i> <br />
              <i> {Prep_Time}</i> <br />
              <i> Serves: {Serves} </i>
            </div>
          </>
        </div>
    </>
  );
};

export default RecepieCard;
