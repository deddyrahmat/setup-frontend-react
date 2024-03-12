import { useState, useEffect, memo } from "react";
import { useField } from "formik";

type Props = {
  label?: string;
  nameP: string;
  options: [];
  size?: string;
  isDisabled?: boolean;
};

function Select({
  nameP = "",
  size,
  options,
  isDisabled,
  label,
  ...otherProps
}: Props) {
  const [field, mata] = useField(nameP);

  const [notifError, setNotifError] = useState("text-red-900");

  const configTextfield: any = {
    ...field,
    ...otherProps,
  };

  const className = `${
    isDisabled ? "pe-none bg-slate" : "bg-light"
  } placeholder:text-slate-400 text-dark fs-6 focus-ring focus-ring-blue-500 py-1 px-2 text-decoration-none border rounded-2 w-full`;

  const classSuccess =
    "focus-ring focus-ring-blue-500 py-1 px-2 text-decoration-none border rounded-2";
  const classError =
    "focus-ring focus-ring-red-400 py-1 px-2 text-decoration-none border-2 rounded-2";

  const Label = memo(function getLabel() {
    return (
      <label
        htmlFor={nameP}
        className="text-gray-300 font-semibold text-sm lg:text-base"
      >
        {label}
      </label>
    );
  });
  const SectionError = memo(function getErr() {
    return mata.error && mata.touched ? (
      <div
        className="text-red-400 fs-6 fs-semibold mt-1"
        id={`${nameP}-helper-text`}
        aria-live="assertive"
      >
        {mata.error}
      </div>
    ) : null;
  });

  return (
    <>
      <Label />
      <div className={`position-relative ${size}`}>
        <select
          name={nameP}
          className={`p-2 ${className} ${
            mata.error && mata.touched ? classError : classSuccess
          }`}
          disabled={isDisabled}
          {...configTextfield}
        >
          <option value="">- - -</option>
          {options?.map((opt: any) => (
            <option key={opt.id} value={opt.value} label={opt.label} />
          ))}
        </select>
      </div>
      <SectionError />
    </>
  );
}

export default memo(Select);
