import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import FieldInput from "../../atoms/FieldInput";
import FieldButton from "../../atoms/FieldButton";

type FormType = {
  dataUser?: any;
  edit?: boolean;
  handleSubmit: any;
  isLoading: boolean;
};

function FormUser({
  dataUser,
  isLoading,
  edit = false,
  handleSubmit,
}: FormType) {
  const UserSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Terlalu Singkat!")
      .max(25, "Terlalu Panjang!")
      .required("Harus diisi"),
    roleId: Yup.number().required("Harus diisi"),
    email: Yup.string()
      .email("Format email tidak sesuai")
      .min(2, "Terlalu Singkat!")
      .max(70, "Terlalu Panjang!")
      .required("Harus diisi"),
    password: Yup.string().min(6, "minimal 6 karakter").required("Harus diisi"),
  });
  return (
    <div className="container mb-10">
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
                  valueField={values.name || ""}
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
                  valueField={values.email || ""}
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
                  valueField={values.roleId || 0}
                />
              </div>
              <div className="mb-2">
                <FieldInput
                  type="password"
                  name="password"
                  label={edit ? "New Password" : "password"}
                  placeholder={edit ? "New Password" : "password"}
                  errors={errors?.password}
                  touched={touched?.password}
                  size="w-100"
                  onChange={handleChange}
                  valueField={values.password || ""}
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

export default FormUser;
