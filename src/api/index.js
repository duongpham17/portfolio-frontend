import axios from 'axios';

const development = "http://localhost:8000";

const production = "";

const url = development;

export default axios.create({
    baseURL:`${url}/api`,
    withCredentials: true,
    credentials: "include",
    headers: {
        "Content-Type" : "application/json",
    },
});