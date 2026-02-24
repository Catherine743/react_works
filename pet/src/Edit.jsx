import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getSinglePetAPI, editPetAPI } from "./services/allAPI";

function Edit() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    age: "",
    medicalHistory: "",
    vaccinationDate: ""
  });

  useEffect(() => {
    const fetchPet = async () => {
      const result = await getSinglePetAPI(id);
      if (result.status === 200) {
        setFormData(result.data);
      }
    };
    fetchPet();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await editPetAPI(id, formData);
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <h3>Edit Pet</h3>

      <form onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleChange} className="form-control mb-2" />
        <input name="breed" value={formData.breed} onChange={handleChange} className="form-control mb-2" />
        <input name="age" value={formData.age} onChange={handleChange} className="form-control mb-2" />
        <input name="medicalHistory" value={formData.medicalHistory} onChange={handleChange} className="form-control mb-2" />
        <input type="date" name="vaccinationDate" value={formData.vaccinationDate} onChange={handleChange} className="form-control mb-2" />

        <button className="btn btn-success">Update Pet</button>
      </form>
    </div>
  );
}

export default Edit;