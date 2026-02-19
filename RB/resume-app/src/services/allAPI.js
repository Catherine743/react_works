import commonAPI from './commonAPI';
import server_url from './serverUrl';

// addResumeAPI - POST
export const addResumeAPI = async(resume) => {
    return await commonAPI('POST',`${server_url}/resumes`,resume); // axios
}

// editResumeAPI - PUT
export const editResumeAPI = async(id, resume) => {
    return await commonAPI('PUT',`${server_url}/resumes/${id}`,resume); // axios
}

// addDownloadHistoryAPI
export const addDownloadHistoryAPI = async(resume) => {
    return await commonAPI('POST',`${server_url}/history`, resume);
}

// getDownloadHistoryAPI
export const getDownloadHistoryAPI = async() => {
    return await commonAPI('GET',`${server_url}/history`,{});
}

// deleteDowmloadHistoryAPI
export const deleteDownloadHistoryAPI = async(id) => {
    return await commonAPI('DELETE',`${server_url}/history/${id}`,{});
}