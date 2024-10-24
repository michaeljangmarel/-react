import axios from "axios";

export const roomAxioInstance  = axios.create({
    baseURL : "http://localhost:4500/room",
    timeout : 10000 ,
    headers : {"Content-Type" : "application/json"}
})