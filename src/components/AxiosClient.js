import axios from "axios";

const AxiosClient = axios.create({
  baseURL: "http://movies.z4.tdplab.com/",
});

export default AxiosClient;
