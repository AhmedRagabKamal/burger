import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-cc268.firebaseio.com/"
});

export default instance;
