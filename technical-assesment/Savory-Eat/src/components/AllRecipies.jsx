import React from "react";
import "../index.scss";

const AllRecepies = ({data}) => {
  return (
    <div className="card-container">
    {data.map((e,index)=>{
      return (
        <div key={index} className="card">
          <button className="delete">delete</button>
          <button className="update">update </button>

          <>
            <div className="header">
              <img
                className="img"
                src={e.recepie_Image}
                alt="food"
              />
            </div>
            <div className="text">
              <h1 className="food">{e.recepie_Name}</h1>
              <i> {e.Cook_Time}</i> <br />
              <i> {e.Prep_Time}</i> <br />
              <i> Serves: {e.Serves} </i>
            </div>
          </>
        </div>
      )
    })}
    </div>
  );
};

export default AllRecepies;
