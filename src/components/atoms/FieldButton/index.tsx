import { memo, ReactEventHandler, ReactNode } from "react";

type Props = {
  classNames?: string;
  type?: "button" | "submit" | "reset";
  isLoading?: boolean;
  isDisabled?: boolean;
  children?: ReactNode;
  onClick?: ReactEventHandler;
};

const FieldButton = memo(function FButton({
  classNames,
  type = "button",
  isLoading,
  isDisabled,
  onClick,
  children,
}: Props) {
  return (
    <button
      type={type}
      className={classNames}
      onClick={onClick}
      disabled={isDisabled}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
});

export default FieldButton;
