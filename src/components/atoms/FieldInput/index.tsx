import { memo, ReactEventHandler, ReactNode } from 'react';
import { Field } from 'formik';

type Props = {
  label?: string;
  name: string;
  size?: string;
  valueField?: string;
  errors?: ReactNode;
  touched?: boolean;
  isDisabled?: boolean;
  placeholder: string;
  type: string;
  onChange?: any;
};

const FieldInput = memo(function Input({
  label,
  name,
  size,
  valueField,
  placeholder,
  errors = '',
  touched = false,
  isDisabled,
  type,
  onChange,
}: Props) {
  const className = `${
    isDisabled ? 'pe-none bg-slate' : 'bg-light'
  } placeholder:text-slate-400 text-dark fs-6 focus-ring focus-ring-blue-500 py-1 px-2 text-decoration-none border rounded-2 w-100 h-100`;

  const classSuccess =
    'focus-ring focus-ring-blue-500 py-1 px-2 text-decoration-none border rounded-2';
  const classError =
    'focus-ring focus-ring-slate-400 py-1 px-2 text-decoration-none border-2 rounded-2';

  const Label = memo(function getLabel() {
    return (
      <label
        htmlFor={name}
        className="text-gray-300 font-semibold text-sm lg:text-base"
      >
        {label}
      </label>
    );
  });
  const SectionError = memo(function getErr() {
    return errors && touched ? (
      <div
        className="text-red-400 fs-6 fs-semibold mt-1"
        id={`${name}-helper-text`}
        aria-live="assertive"
      >
        {errors}
      </div>
    ) : null;
  });

  return (
    <>
      <Label />
      <div className={`position-relative ${size}`}>
        <Field
          aria-errormessage={`${name}-helper-text`}
          aria-invalid="true"
          name={name}
          id={name}
          type={type}
          className={`p-2 ${className} ${
            errors && touched ? classError : classSuccess
          }`}
          onChange={onChange}
          value={valueField}
          placeholder={placeholder}
        />
      </div>
      <SectionError />
    </>
  );
});

export default FieldInput;
