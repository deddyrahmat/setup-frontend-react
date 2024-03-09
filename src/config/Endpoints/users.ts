import Axios from "../Axios";

export default {
  getAllUsers: (config: object) =>
    Axios.get("/users", config).then((res) => res),
  createUsers: (body: string, config: object) =>
    Axios.post("/users", body, config).then((res) => res),
  updateUser: (body: string, config: object, id: any) =>
    Axios.patch(`/users/${id}`, body, config).then((res) => res),
  deleteUser: (config: object, id: any) =>
    Axios.delete(`/users/${id}`, config).then((res) => res),
  detailUser: (config: object, id: any) =>
    Axios.get(`/users/${id}`, config).then((res) => res),
};
