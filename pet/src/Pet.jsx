import React, { useEffect, useState } from "react";
import { getAllPetsAPI, deletePetAPI } from "./services/allAPI";
import { useNavigate } from "react-router-dom";

function Pet() {

  const [pets, setPets] = useState([]);
  const navigate = useNavigate();

  const fetchPets = async () => {
    const result = await getAllPetsAPI();
    if (result.status === 200) {
      setPets(result.data);
    }
  };

  useEffect(() => {
    fetchPets();
  }, []);

  const handleDelete = async (id) => {
    await deletePetAPI(id);
    fetchPets();
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {pets.map(pet => (
          <div key={pet.id} className="col-md-4">
            <div className="card p-3 mb-3">
              <h5>{pet.name}</h5>
              <p>Breed: {pet.breed}</p>
              <p>Age: {pet.age}</p>
              <p>Vaccination: {pet.vaccinationDate}</p>

              <button
                className="btn btn-warning me-2"
                onClick={() => navigate(`/edit/${pet.id}`)}
              >
                Edit
              </button>

              <button
                className="btn btn-danger"
                onClick={() => handleDelete(pet.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pet;