/* eslint-disable react/button-has-type */
import React, { useEffect, useState, ReactEventHandler } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import FieldInput from "../../components/atoms/FieldInput";
import FieldButton from "../../components/atoms/FieldButton";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import ApiUser from '../../config/Endpoints/users';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


type FormType = {
    dataUser?: any;
    edit?: boolean;
};

function CreateUser({
    dataUser,
    edit = false,
}: FormType) {
    const UserSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, "Terlalu Singkat!")
            .max(25, "Terlalu Panjang!")
            .required("Harus diisi"),
        roleId: Yup.number()
            .required("Harus diisi"),
        email: Yup.string()
            .email("Format email tidak sesuai")
            .min(2, "Terlalu Singkat!")
            .max(70, "Terlalu Panjang!")
            .required("Harus diisi"),
        password: Yup.string()
            .min(6, "minimal 6 karakter")
            .required("Harus diisi"),
    });

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const {token} = useAppSelector((state:any )=> state.auth )
    const handleSubmit = async (values: any) => {
        try {
            setIsLoading(true);
            // const {name, roleId, email, password} = values;

            const config = {
                headers: {
                    "content-type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            };
            const res = await ApiUser.createUsers(values, config);
            if (res?.data) {
                navigate("/user")
            }
        } catch (error: any) {
            toast.error(error?.response?.data?.message[0] || "Terjadi kegagalan server. Silahkan coba kembali beberapa saat lagi");
        }
    };

    return (
        <div className="border rounded w-full py-3">
            <Formik
                initialValues={{
                    name: edit ? dataUser.name : "",
                    roleId: edit ? dataUser.roleId : "",
                    email: edit ? dataUser.email : "",
                    password: edit ? dataUser.password : "",
                }}
                validationSchema={UserSchema}
                onSubmit={(values) => {
                    // same shape as initial values
                    handleSubmit(values);
                }}
                enableReinitialize
            >
                {({ errors, touched, handleChange, values }: any) => {
                    return (
                        <Form>
                            <div className="mb-2">
                                <FieldInput
                                    type="text"
                                    label="Nama User"
                                    name="name"
                                    placeholder="Nama User"
                                    errors={errors?.name}
                                    touched={touched?.name}
                                    size="w-100"
                                    onChange={handleChange}
                                    valueField={values.name}
                                />
                            </div>
                            <div className="mb-2">
                                <FieldInput
                                    type="text"
                                    label="Email User"
                                    name="email"
                                    placeholder="Email User"
                                    errors={errors?.email}
                                    touched={touched?.email}
                                    size="w-100"
                                    onChange={handleChange}
                                    valueField={values.email}
                                />
                            </div>
                            <div className="mb-2">
                                <FieldInput
                                    type="number"
                                    label="Role User"
                                    name="roleId"
                                    placeholder="Role User"
                                    errors={errors?.roleId}
                                    touched={touched?.roleId}
                                    size="w-100"
                                    onChange={handleChange}
                                    valueField={values.roleId}
                                />
                            </div>
                            <div className="mb-2">
                                <FieldInput
                                    type="password"
                                    name="password"
                                    label="password"
                                    placeholder="password"
                                    errors={errors?.password}
                                    touched={touched?.password}
                                    size="w-100"
                                    onChange={handleChange}
                                    valueField={values.password}
                                />
                            </div>
                            <div className="mb-2">
                                <FieldButton
                                    type="submit"
                                    isLoading={isLoading}
                                    isDisabled={!!isLoading}
                                    classNames="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    {edit ? "Edit" : "Simpan"}
                                </FieldButton>
                            </div>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
}

export default CreateUser;