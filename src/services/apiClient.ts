import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "09b9baab68694b38806633ebcb615d15",
  },
});

export default axiosInstance;
