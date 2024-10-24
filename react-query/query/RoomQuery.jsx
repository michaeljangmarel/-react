import axios from "axios";
import { axioInstance } from "../api/RoomAxios";
 
export const fetchRoom = async() => {
      const {data} = await axioInstance.get("/books")
      return data ;
}

export const addRoom  = async (roomObj) => {
    const {data} = await axioInstance.post("/save" , roomObj)
    return data ;
}