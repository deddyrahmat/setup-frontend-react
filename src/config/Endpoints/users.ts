import Axios from "../Axios";

export default {
    getAllUsers: (config: object) =>
    Axios.get("/users", config).then((res) => res),
}