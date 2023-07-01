// we need a base path that we can use to refer our requests to the location of our routes
import sendRequest from "./send-request" 
const BASE_URL = '/api/items'
// const BASE_URL = 'https://eden-nursery.onrender.com/api/users'

export async function getAll() {
    return sendRequest(BASE_URL);
}