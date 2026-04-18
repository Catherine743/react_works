import commonAPI from "./commonAPI";
import { server_url } from "./server_url";

// registerAPI
export const registerAPI = async (reqBody) => {
    return await commonAPI("POST", `${server_url}/register`, reqBody)
}

// loginAPI
export const loginAPI = async (reqBody) => {
    return await commonAPI("POST", `${server_url}/login`, reqBody)
}

// googleLoginAPI
export const googleLoginAPI = async (reqBody) => {
    return await commonAPI("POST", `${server_url}/google-login`, reqBody)
}

// addBookAPI
export const addBookAPI = async (reqBody, reqHeader) => {
    return await commonAPI("POST", `${server_url}/user/add-book`, reqBody, reqHeader)
}

// getHomeBooksAPI
export const getHomeBooksAPI = async () => {
    return await commonAPI("GET", `${server_url}/home-books`, {})
}

// getAllBooksAPI
export const getAllBooksAPI = async (reqHeader, searchKey) => {
    return await commonAPI("GET", `${server_url}/all-books?search=${searchKey}`, {}, reqHeader)
}

// getUserProfileAPI
export const getUserProfileBooksAPI = async (reqHeader) => {
    return await commonAPI("GET", `${server_url}/user-books`, {}, reqHeader)
}

// getUserPurchasedAPI
export const getUserPurchasedAPI = async (reqHeader) => {
    return await commonAPI("GET", `${server_url}/user-books/buy`, {}, reqHeader)
}

// viewBook
export const viewBookAPI = async (id, reqHeader) => {
    return await commonAPI("GET", `${server_url}/view/${id}`, {}, reqHeader)
}

// editUserAPI
export const editUserAPI = async (id, reqBody, reqHeader) => {
    return await commonAPI("PUT", `${server_url}/user/${id}/edit`, reqBody, reqHeader)
}