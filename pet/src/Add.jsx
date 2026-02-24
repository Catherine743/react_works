import React, { useState } from "react";
import { addPetAPI } from "./services/allAPI";
import { useNavigate } from "react-router-dom";

function Add() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    age: "",
    medicalHistory: "",
    vaccinationDate: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addPetAPI(formData);
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <h3>Add Pet</h3>

      <form onSubmit={handleSubmit}>
        <input name="name" onChange={handleChange} placeholder="Name" className="form-control mb-2" />
        <input name="breed" onChange={handleChange} placeholder="Breed" className="form-control mb-2" />
        <input name="age" onChange={handleChange} placeholder="Age" className="form-control mb-2" />
        <input name="medicalHistory" onChange={handleChange} placeholder="Medical History" className="form-control mb-2" />
        <input type="date" name="vaccinationDate" onChange={handleChange} className="form-control mb-2" />

        <button className="btn btn-primary">Add Pet</button>
      </form>
    </div>
  );
}

export default Add;