import axios from "axios";

export const api = axios.create({
    baseURL: "https://www.meteosource.com/api/v1/free/",
    headers: {
        "Content-Type": "application/json"
    }
})