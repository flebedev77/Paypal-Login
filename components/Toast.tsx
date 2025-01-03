import React from "react";

export enum ToastType {
  Error,
}

interface ToastProps {
  type: ToastType;
  message: string;
}

const Toast: React.FC<ToastProps> = ({ type, message }) => {
  return (
    <div
      className={`flex justify-center align-center gap-2 p-2 px-4 w-max m-10 rounded-xl ${type == ToastType.Error ? "text-white font-bold bg-red-600" : ""}`}
    >
      {type == ToastType.Error ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          width="1em"
          height="1em"
          className="mt-1"
        >
          <path d="M22.2 17.634L14.002 3.396a2.322 2.322 0 0 0-4.004 0L1.8 17.634a2.204 2.204 0 0 0 0 2.223A2.282 2.282 0 0 0 3.802 21h16.396a2.284 2.284 0 0 0 2-1.143 2.204 2.204 0 0 0 .002-2.223zm-1.3 1.472a.797.797 0 0 1-.701.394H3.802a.797.797 0 0 1-.702-.394.712.712 0 0 1 0-.723l8.2-14.238a.82.82 0 0 1 1.406 0l8.199 14.238a.712.712 0 0 1-.004.723zM11.25 13.5V9.75a.75.75 0 1 1 1.5 0v3.75a.75.75 0 0 1-1.5 0zm1.875 3.375a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0z"></path>
        </svg>
      ) : (
        <div></div>
      )}
      {message}
    </div>
  );
};

export default Toast;
