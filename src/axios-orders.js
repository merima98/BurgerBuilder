import axios from "axios";

const { REACT_APP_BASE_URL } = process.env;

const instance = axios.create({
  baseURL: `https://${REACT_APP_BASE_URL}.firebaseio.com/`,
});
export default instance;
