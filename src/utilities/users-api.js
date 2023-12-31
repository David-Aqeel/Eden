// we need a base path that we can use to refer our requests to the location of our routes
import sendRequest from "./send-request" 
const BASE_URL = '/api/users'
// const BASE_URL = 'https://eden-nursery.onrender.com/api/users'


export async function signUp(userData) {
    return sendRequest(BASE_URL, 'POST', userData);
//     // fetch uses an options obj as a second arg to make requests
//     const res = await fetch(BASE_URL, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json'},
//         body: JSON.stringify(userData)
//     })

//     if (res.ok) {
//         return res.json()
//     } else {
//         throw new Error ('Invalid Sign-Up')
//     }
}

export async function login(credentials) {
    return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
    // // fetch uses an options obj as a second arg to make requests
    // const res = await fetch(`${BASE_URL}/login`, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json'},
    //     body: JSON.stringify(credentials)
    // })
    // // check that the request was successful
    // if (res.ok) {
    //     return res.json()
    // } else {
    //     throw new Error ('Invalid Log In')
    // }
}

export async function checkToken() {
    return sendRequest(`${BASE_URL}/check-token`);

}