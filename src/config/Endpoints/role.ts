import Axios from "../Axios";

export default {
  getAllRole: (config: object) => Axios.get("/role", config).then((res) => res),
};
