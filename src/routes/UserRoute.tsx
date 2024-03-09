import { Route, Routes } from "react-router-dom";

import PageUser from "../pages/Users/PageUser";
import CreateUser from "../pages/Users/CreateUser";
import UpdateUser from "../pages/Users/UpdateUser";

export default function UserRoute() {
  return (
    <Routes>
      <Route path="/" element={<PageUser />} />
      <Route path="/create" element={<CreateUser />} />
      <Route path="/update/:id" element={<UpdateUser />} />
    </Routes>
  );
}
