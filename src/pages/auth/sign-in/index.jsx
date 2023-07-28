import React from 'react'
import { Input, Button } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
const SignIn = () => {
  return (
    <div className=" bg-background min-h-[100vh] flex flex-col items-center ">
      <div className="flex flex-col justify-center items-center lg:p-4 w-[90%] lg:w-[600px] text-center">
        <div className=" text-[80px] font-black text-gradient-to-r ">Notes</div>

        <div className="flex flex-col font-mono my-[30px]">
          <div className="w-[100%] lg:w-[456px] text-primary text-[28px]  font-medium ">
            Welcome Back!
          </div>
          <div className=" text-primary mt-2">
            Don't an account?&nbsp;
            <Link to="/" className="no-underline">
              <span className=" text-accent">Sign Up</span>
            </Link>
          </div>
        </div>

        <div className=" w-[100%] lg:w-[456px] h-[400px]">
          <form action="submit" className="flex flex-col gap-[8px] w-[100%]">
            

            <div>
              <div className=" w-[100%] text-start text-primary text-base font-normal font-mono">
                Email
              </div>
              <Input
                type="email"
                variant="unstyled"
                className=" border min-h-[45px] border-gray-300 focus:border-secondary  focus:border-2"
              />
            </div>

            <div>
              <div className=" w-[100%] text-start text-primary text-base font-normal font-mono">
                Password
              </div>
              <Input
                type="password"
                variant="unstyled"
                className=" border min-h-[45px] border-gray-300 focus:border-secondary  focus:border-2"
              />
            </div>

            <Button colorScheme="teal" variant="solid" className="mt-4">
             Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn