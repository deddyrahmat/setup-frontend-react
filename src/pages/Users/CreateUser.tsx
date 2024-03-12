/* eslint-disable react/button-has-type */
import React, { useEffect, useState, ReactEventHandler } from "react";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import ApiUser from "../../config/Endpoints/users";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import FormUser from "../../components/organisms/FormUser";

type FormType = {
  dataUser?: any;
  edit?: boolean;
};

function CreateUser() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const { token } = useAppSelector((state: any) => state.auth);
  const handleSubmit = async (values: any) => {
    try {
      setIsLoading(true);
      const { name, roleId, email, password } = values;
      const role = Number(roleId);

      const config = {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const body = JSON.stringify({
        name,
        roleId: role,
        email,
        password,
      });
      const res = await ApiUser.createUsers(body, config);
      if (res?.data) {
        toast.success("Data berhasil ditambah");
        navigate("/user");
      }
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message[0] ||
          "Terjadi kegagalan server. Silahkan coba kembali beberapa saat lagi"
      );
    }
  };

  return (
    <div className="border rounded w-full p-10">
      <FormUser handleSubmit={handleSubmit} isLoading={isLoading} />
    </div>
  );
}

export default CreateUser;
