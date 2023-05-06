//the default user to update and delete is {user_Id:1,username:'testuser',email:'test@test.com',password:'password}
import React ,{useEffect, useState}from "react";
import "./App.css";
import Home from "./components/Home.jsx";
import AllRecepies from "./components/AllRecipies.jsx"
import axios from "axios"
import Add from "./components/Add";
import Edit from "./components/Edit";
import Favorites from "./components/Favorites";

function App() {
const [view,setView]=useState('Home')
const [data,setData]=useState([])
const [clicked,setClicked]=useState({})
const [query,setQuery]=useState("")

const fetchData=()=>{
  axios.get("http://localhost:4000/api/menuItems").then(res=>setData(res.data))
}

const handleSearch=()=>{
  axios.get(`http://localhost:4000/api/recepies/search?query=${query}`).then(res=>setData(res.data))
}

useEffect(()=>{
  fetchData()
},[])

const click=(value)=>{
  setClicked(value)
}

  let changeView = (view) => {
    setView(view);
  };


  return (
    <div className="App">
      <nav className="nav">
      <div className="nav-item" onClick={()=>changeView("favorites")}>Favorites</div>
        <div
          className="nav-item is-active"
          active-color="orange"
          onClick={() => setView("Home")}
        >
          Home
        </div>

        <div
          className="nav-item"
          active-color="green"
          onClick={() => setView("Allrecepies")}
        >
          All Recipies
        </div>
        <div
          className="nav-item"
          active-color="red"
          onClick={() => setView("Addrecepie")}
        >
          Add recepie
        </div>
        <div className="search-bar" active-color="red">
          <input type="text" onChange={e=>setQuery(e.target.value)}/>
          <button onClick={handleSearch}>search</button>
        </div>
        <span className="nav-indicator"></span>
      </nav>
      {view === "Home" && <Home changeView={changeView}/>}
      {view === "Allrecepies" && <AllRecepies data={data} fetchData={fetchData} changeView={changeView} click={click}/>}
      {view === "Addrecepie" && <Add/>}
      {view === "Editrecepie" && <Edit food={clicked} fetchData={fetchData} changeView={changeView}/>}
      {view === "favorites" && <Favorites/>}
     
      <div></div>
    </div>
  );
}

export default App;
