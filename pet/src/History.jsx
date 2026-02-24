import React, { useEffect, useState } from "react";
import { getHistoryAPI, deleteHistoryAPI } from "./services/allAPI";

function History() {

  const [historyList, setHistoryList] = useState([]);

  const fetchHistory = async () => {
    const result = await getHistoryAPI();
    if (result.status === 200) {
      setHistoryList(result.data);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  const handleDelete = async (id) => {
    await deleteHistoryAPI(id);
    fetchHistory();
  };

  return (
    <div className="container mt-4">
      <h3>Export History</h3>

      {historyList.length === 0 ? (
        <p>No history available</p>
      ) : (
        <table className="table table-bordered mt-3">
          <thead>
            <tr>
              <th>#</th>
              <th>Pet Name</th>
              <th>Breed</th>
              <th>Action</th>
              <th>Date</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {historyList.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.petName}</td>
                <td>{item.breed}</td>
                <td>{item.action}</td>
                <td>{item.date}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default History;