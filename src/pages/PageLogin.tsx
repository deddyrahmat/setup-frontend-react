import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useAppDispatch } from "../redux/hooks";
import { USER_LOGIN } from "../redux/authSlice";
import Login from '../components/organisms/Login';
import ApiAuth from '../config/Endpoints/auth';

function PageLogin() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  const onSubmit = async (event : any) => {
    //Preventing page refresh

    event.preventDefault();
    try {
      setIsLoading(true);

      const body = JSON.stringify({
        email: loginData.email,
        password: loginData.password,
      });

      const config = {
        headers: {
          "content-type": "application/json",
        },
      };
      const res = await ApiAuth.Login(body, config);
      if (res?.data?.accessToken) {
        dispatch(USER_LOGIN(res.data.accessToken));
        navigate("/dashboard")
      }
    } catch (error:any) {
      toast.error(error?.response?.data?.message || "Terjadi kegagalan server. Silahkan coba kembali beberapa saat lagi");
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          Sign In
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <Login email={loginData.email} password={loginData.password} onChange={onChange} onSubmit={onSubmit} isLoading={isLoading} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageLogin