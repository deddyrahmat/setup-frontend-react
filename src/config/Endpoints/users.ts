import Axios from "../Axios";

export default {
    getAllUsers: (config: object) =>
    Axios.get("/users", config).then((res) => res),
    createUsers: (body:string,config: object) =>
    Axios.post("/users",body, config).then((res) => res),
}