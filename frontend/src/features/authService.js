//Service file is used to fetch data to the backend server
import axios from 'axios';

const API_URL = '/api/users';

//Register user
const registerUser = async (userData) => {
    //Make a post request to DB API
    const response = await axios.post(API_URL, userData);

    //Store response into local storage
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data;
}

// Logout User

const logout = () => {
    localStorage.removeItem('user');
}

const login = async(userData) => {
        //Make a post request to DB API
        const response = await axios.post(`${API_URL}/login`, userData);

        //Store response into local storage
        if (response.data) {
            localStorage.setItem('user', JSON.stringify(response.data))
        }
        return response.data;
}

const authService = {
    registerUser,
    logout,
    login
}

export default authService;