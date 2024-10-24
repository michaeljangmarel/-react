import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchCommon } from "../../redux/action/Action";

export const getAllRoom  = async() => {
    const dis = useDispatch();
  const res =  await axios.get("http://localhost:4500/room/all");
  dis(fetchCommon(res.data));
}
  

 
