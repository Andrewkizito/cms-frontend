"use client";

// Hooks
import React, { useState } from "react";

// UI Components
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FormInput from "@/components/ui/form-input";
import Link from "next/link";

const LoginForm: React.FC = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (field: string, value: string) => {
    setCredentials({ ...credentials, [field]: value });
  };

  const handleSubmit = () => {
    // Perform login authentication with username and password
    console.log("Username:", credentials.username);
    console.log("Password:", credentials.password);
    // Reset the form fields after submission
    setCredentials({ username: "", password: "" });
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Enter your credentials to log in.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <FormInput
            id="username"
            label="Username or Email"
            type="text"
            value={credentials.username}
            onChange={(value) => handleChange("username", value)}
            placeholder="Enter your username or email"
          />
          <FormInput
            id="password"
            label="Password"
            type="password"
            value={credentials.password}
            onChange={(value) => handleChange("password", value)}
            placeholder="Enter your password"
          />
          <Link href="/forgot-password" className="text-primary text-xs">
            Forgot Password?
          </Link>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button type="submit" onClick={handleSubmit} className="w-full">
          Login
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
