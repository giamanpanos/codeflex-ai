import { SignUp } from "@clerk/nextjs";
import React from "react";

// by creating this page and put the URL in the env file we have created the sign up page and it will redirect to the sign up page when click the button in the sign in page
const SignUpPage = () => {
  return (
    <main className="flex h-screen w-full items-center justify-center ">
      <SignUp />
    </main>
  );
};

export default SignUpPage;
