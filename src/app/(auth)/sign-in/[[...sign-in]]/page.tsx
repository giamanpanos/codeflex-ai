import { SignIn } from "@clerk/nextjs";
import React from "react";

// by creating this page and put the URL in the env file we have created the sign in page and it will redirect to the sign up page when click the button in the sign up page
const SignInPage = () => {
  return (
    <main className="flex h-screen w-full items-center justify-center ">
      <SignIn />
    </main>
  );
};

export default SignInPage;
