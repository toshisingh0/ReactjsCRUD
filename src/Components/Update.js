import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";


const Update = () => {
  
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const history = useNavigate();
  

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  },[]);

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("clciekd");
    axios
      .put(`https://644d708c57f12a1d3ddf50ce.mockapi.io/crud/${id}`, {
        name: name,
        email: email,
      })
      .then(() => {
        history("/read");
      });
  };

  return (
    <>
    <h2>Update Opreation</h2>
     <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value = {name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value = {email}
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleUpdate}
        >
          Update
        </button>
        <Link to="/read">
          <button className="btn btn-info mx-2"> Back </button>
        </Link>
     </form>
    </>
  );
}

export default Update;
