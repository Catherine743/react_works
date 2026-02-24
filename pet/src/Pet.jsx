import React, { useEffect, useState } from "react";
import { getAllPetsAPI, deletePetAPI } from "./services/allAPI";
import { useNavigate } from "react-router-dom";

function Pet() {

  const [pets, setPets] = useState([]);
  const [filterBreed, setFilterBreed] = useState("");
  const [filterAge, setFilterAge] = useState("");

  const navigate = useNavigate();

  // Fetch all pets
  const fetchPets = async () => {
    const result = await getAllPetsAPI();
    if (result.status === 200) {
      setPets(result.data);
    }
  };

  useEffect(() => {
    fetchPets();
  }, []);

  // Delete pet
  const handleDelete = async (id) => {
    await deletePetAPI(id);
    fetchPets();
  };

  // Vaccination Reminder (next 7 days)
  const isUpcoming = (date) => {
    if (!date) return false;

    const today = new Date();
    const vacDate = new Date(date);
    const diff = (vacDate - today) / (1000 * 60 * 60 * 24);

    return diff >= 0 && diff <= 7;
  };

  // Filtering logic
  const filteredPets = pets.filter((pet) =>
    (filterBreed
      ? pet.breed.toLowerCase().includes(filterBreed.toLowerCase())
      : true) &&
    (filterAge ? pet.age === filterAge : true)
  );

  return (
    <div className="container mt-4">

      <h3 className="mb-3">All Pets</h3>

      {/* 🔍 Filter Section */}
      <div className="row mb-4">
        <div className="col-md-6">
          <input
            type="text"
            placeholder="Filter by Breed"
            className="form-control"
            onChange={(e) => setFilterBreed(e.target.value)}
          />
        </div>

        <div className="col-md-6">
          <input
            type="number"
            placeholder="Filter by Age"
            className="form-control"
            onChange={(e) => setFilterAge(e.target.value)}
          />
        </div>
      </div>

      {/* 🐶 Pet Cards */}
      <div className="row">
        {filteredPets.length > 0 ? (
          filteredPets.map((pet) => (
            <div key={pet.id} className="col-md-4">
              <div
                className="card p-3 mb-3"
                style={{
                  backgroundColor: isUpcoming(pet.vaccinationDate)
                    ? "#ffe6e6"
                    : "white"
                }}
              >
                <h5>{pet.name}</h5>
                <p><strong>Breed:</strong> {pet.breed}</p>
                <p><strong>Age:</strong> {pet.age}</p>
                <p><strong>Medical History:</strong> {pet.medicalHistory}</p>
                <p><strong>Vaccination Date:</strong> {pet.vaccinationDate}</p>

                {isUpcoming(pet.vaccinationDate) && (
                  <p className="text-danger fw-bold">
                    Vaccination Due Soon!
                  </p>
                )}

                <div className="mt-2">
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
            </div>
          ))
        ) : (
          <p className="text-muted">No pets found</p>
        )}
      </div>
    </div>
  );
}

export default Pet;