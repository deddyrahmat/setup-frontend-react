import * as Yup from "yup";
import { Formik, Form } from "formik";
import FieldButton from "../../atoms/FieldButton";
import FieldInput from "../../atoms/FieldInput";

type FormType = {
  handleSubmit: any;
  isLoading: boolean;
};

function Login({ isLoading = false, handleSubmit }: FormType) {
  const AuthSchema = Yup.object().shape({
    email: Yup.string()
      .email("Format email tidak sesuai")
      .required("Harus diisi"),
    password: Yup.string().required("Harus diisi"),
  });

  return (
    <div className="container mb-10 space-y-4 md:space-y-6">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={AuthSchema}
        onSubmit={(values) => {
          // same shape as initial values
          handleSubmit(values);
        }}
        enableReinitialize
      >
        {({ errors, touched, handleChange, values }: any) => {
          return (
            <Form>
              <div className="mb-8">
                <FieldInput
                  type="text"
                  label="Email"
                  name="email"
                  placeholder="Your Email"
                  errors={errors?.email}
                  touched={touched?.email}
                  size="w-full"
                  onChange={handleChange}
                  valueField={values.email || ""}
                />
              </div>
              <div className="mb-8">
                <FieldInput
                  type="password"
                  name="password"
                  label={"password"}
                  placeholder="Your Password"
                  errors={errors?.password}
                  touched={touched?.password}
                  size="w-full"
                  onChange={handleChange}
                  valueField={values.password || ""}
                />
              </div>
              <div className="mb-8">
                <FieldButton
                  type="submit"
                  isLoading={isLoading}
                  isDisabled={!!isLoading}
                  classNames="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Login
                </FieldButton>
              </div>
              <div className="mb-8">
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Sign up
                  </a>
                </p>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default Login;
