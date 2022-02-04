import axios from "axios";

const login = (email , password) => {
axios.post("https://car-rental-x.herokuapp.com/car-rental/api/" , {email , password});
};
