import axios from "axios";


const register = (username, email, password) => {
    return axios.post('http://localhost:5000/api/auth/register', {
        username,
        email,
        password
    })
}

const login = (username, password) => {
    return axios.post('http://localhost:5000/api/auth/login', {
        username,
        password
    }) 
    .then((response) => {
        if(response.data.accessToken) {
            localStorage.setItem('user', JSON.stringify(response.data))
        }
    })
}

const logOut = () => {
    localStorage.removeItem('user')
}

const authService = {
    register,
    login,
    logOut
}

export default authService