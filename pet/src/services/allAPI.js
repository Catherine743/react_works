import commonAPI from "./commonAPI";
import server_url from "./serverUrl";

// PET APIs
export const addPetAPI = async (pet) => {
    return await commonAPI("POST", `${server_url}/pets`, pet);
};

export const getAllPetsAPI = async () => {
    return await commonAPI("GET", `${server_url}/pets`, {});
};

export const editPetAPI = async (id, pet) => {
    return await commonAPI("PUT", `${server_url}/pets/${id}`, pet);
};

export const deletePetAPI = async (id) => {
    return await commonAPI("DELETE", `${server_url}/pets/${id}`, {});
};

export const getSinglePetAPI = async (id) => {
    return await commonAPI("GET", `${server_url}/pets/${id}`, {});
};
