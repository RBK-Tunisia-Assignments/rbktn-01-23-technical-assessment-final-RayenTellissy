import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Favorites = () => {
  const [allFav,setAllFav]=useState([])
  const [data,setData]=useState([])

  useEffect(()=>{
    axios.get(`http://localhost:4000/api/favorites/2`).then(res=>res.data.map(e=>{
      axios.get(`http://localhost:4000/api/recepies/${e.recepie_id}`).then(res=>{
      setData([...data,...res.data])})
    }))
    
  },[])
  
  useEffect(()=>{
    console.log(data)
  },[data])

  return (
    <div>
       {data.map((e,index)=>{
        return(
          <div className="card">
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
              <i> Cook Time: {e.Cook_Time}</i> <br />
              <i> Prep Time: {e.Prep_Time}</i> <br />
              <i> Serves: {e.Serves} </i>
            </div>
          </>
        </div>
        )
       })}
    </div>
  );
};

export default Favorites;