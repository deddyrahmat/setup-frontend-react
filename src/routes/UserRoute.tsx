import { Route, Routes } from "react-router-dom";

import PageUser from "../pages/Users/PageUser";
import CreateUser from "../pages/Users/CreateUser";

export default function UserRoute() {
    return (
        <Routes>
            <Route path="/" element={<PageUser />} />
            <Route path="/create" element={<CreateUser />} />
        </Routes>
    );
}