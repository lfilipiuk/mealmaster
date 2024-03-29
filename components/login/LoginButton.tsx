import React from "react";

interface LoginButtonProps {
  text: string;
  secondary?: boolean;
}

const LoginButton = ({ text, secondary }: LoginButtonProps) => {
  return (
    // eslint-disable-next-line @next/next/no-html-link-for-pages
    <a
      className={`py-3 px-4 w-40 ${
        secondary ? "bg-green text-white" : "bg-white"
      } text-center font-semibold rounded-full shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 ease-in-out inline-block`}
      href="/api/auth/login"
    >
      {text}
    </a>
  );
};

export default LoginButton;
