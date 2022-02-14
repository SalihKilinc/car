import axios from "axios";
import autHeader from "./auth-header";
 

const API_URL = process.env.REACT_APP_API_URL;

const getVehicles = (user) => {
    return axios.put(`${API_URL}car/visitors/all`)
  }

  export {getVehicles}