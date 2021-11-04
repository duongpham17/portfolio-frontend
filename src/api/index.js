import axios from 'axios';

const development = "http://localhost:8000";

const production = "https://portfoliobackend--api.herokuapp.com";

const url = production;

export default axios.create({
    baseURL:`${url}/api`,
    withCredentials: true,
    credentials: "include",
    headers: {
        "Content-Type" : "application/json",
    },
});