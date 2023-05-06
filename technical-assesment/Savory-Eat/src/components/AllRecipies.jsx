import React from "react";
import "../index.scss";
import RecepieCard from "./RecepieCard";

const AllRecepies = ({data,fetchData}) => {
  return (
    <div className="card-container">
    {data.map((e,index)=>{
        return <RecepieCard key={index} id={e.recepie_Id} recepie_Image={e.recepie_Image} recepie_Name={e.recepie_Name} Cook_Time={e.Cook_Time} Prep_Time={e.Prep_Time} Serves={e.Serves} fetchData={fetchData}/>
    })}
    </div>
  );
};

export default AllRecepies;
