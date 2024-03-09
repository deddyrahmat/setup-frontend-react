/* eslint-disable react/button-has-type */
import React, { useEffect, useState, ReactEventHandler } from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import ApiUser from '../../config/Endpoints/users';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import FormUser from '../../components/organisms/FormUser';
import { getLocalStorage } from '../../utils/localstorage';

type FormType = {
  dataUser?: any;
  edit?: boolean;
};

function UpdateUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [itemEdit, setItemEdit] = useState({ name: '' });
  useEffect(() => {
    setItemEdit(getLocalStorage('user'));
  }, []);

  const { token } = useAppSelector((state: any) => state.auth);
  const handleSubmit = async (values: any) => {
    try {
      setIsLoading(true);
      // const {name, roleId, email, password} = values;

      const config = {
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      const res = await ApiUser.updateUser(values, config, id);
      if (res?.data) {
        toast.success('Sukses update data');
        navigate('/user');
      }
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message[0] ||
          'Terjadi kegagalan server. Silahkan coba kembali beberapa saat lagi'
      );
    }
  };

  return (
    <div className="border rounded w-full py-3">
      <FormUser
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        edit={true}
        dataUser={itemEdit}
      />
    </div>
  );
}

export default UpdateUser;
