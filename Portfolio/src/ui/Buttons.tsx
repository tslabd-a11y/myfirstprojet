import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  type?: "submit" | "button";
  className?: string;
  onClick?: () => void;
}
export const Buttons = ({
  children,
  className,
  onClick,
  type = "button",
}: IProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={
        "px-4 py-2  border-cyan border-[0.3px] rounded-full justify-center text-white text-lg font-bold flex gap-1 items-center  hover:scale-110 transition-all duration-500 " +
        className
      }
    >
      {children}
    </button>
  );
};
