import commonAPI from './commonAPI';
import server_url from './serverUrl';

// addResumeAPI - POST
export const addResumeAPI = async(resume) => {
    return await commonAPI('POST',`${server_url}/resumes`,resume); // axios
}