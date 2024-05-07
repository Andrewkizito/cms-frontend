import LoginForm from "@/components/pages/auth/LoginForm";
import Image from "next/image";
import React from "react";

const Login = () => {
  return (
    <div className="h-screen w-screen bg-muted flex flex-col gap-5 items-center justify-center">
      <Image src="/logo.png" alt="Logo" width={130} height={130} />
      <LoginForm />
    </div>
  );
};

export default Login;
