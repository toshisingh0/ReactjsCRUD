import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  const [tabledark, setTableDark] = useState("");
  
  function getData() {
    axios
      .get("https://644d708c57f12a1d3ddf50ce.mockapi.io/crud")
      .then((res) => {
       console.log(res.data);
       setData(res.data);
      });
  }

  function handleDelete(id) {
    axios
      .delete(`https://644d708c57f12a1d3ddf50ce.mockapi.io/crud/${id}`)
      .then(() => {
        getData();
      });
  }

  const setToLocalStorage = (id, name, email) =>{
    localStorage.setItem("id",id)
    localStorage.setItem("name",name)
    localStorage.setItem("email",email)
  }



  useEffect(() => {
    getData();
  },[]);
  getData();

  return (
    <>
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        onClick={() => {
          if (tabledark === "table-dark") setTableDark("");
          else setTableDark("table-dark");
        }}
      />
    </div>
    <div className="d-flex justify-content-between m-2">
        <h2>Read Opreation</h2>
        <Link to="/">
          <button className="btn btn-info">Create</button>
        </Link>
    </div>
      <table className={`table ${tabledark}`}>
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Action</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
          <tbody>
            <tr>
              <th scope="row">{eachData.id}</th>
              <td>{eachData.name}</td>
              <td>{eachData.email}</td>
              <td> <Link to="/update"><button type="button" className="btn btn-success"onClick={() =>  setToLocalStorage(eachData.id,eachData.name,eachData.email)}>Edit</button></Link></td>
              <td><button type="button" className="btn btn-danger" onClick={() => handleDelete(eachData.id)}>Delete</button></td>
            </tr>
          </tbody>
            </>
          )
        })
      }
      </table>
    </>
  );
}

export default Read;
