import React from "react";
import Input from "../../components/Input";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

const Login = () => {
  return (
    <>
      <div className='flex justify-end items-center'>
        <button className='p-2 me-10 absolute top-3'>
          <Link to='/'>
            <RxCross2 className='text-3xl' />
          </Link>
        </button>
      </div>
      <section className='bg-gray-200 h-[100vh] flex justify-center items-center'>
        <div class='max-w-4xl w-1/3 p-6 mx-auto rounded-md shadow-md bg-white'>
          <h2 class='text-3xl text-center font-bold text-gray-900 capitalize mb-6'>
            Login
          </h2>
          <form>
            <div className='mb-4'>
              <Input type='email' placeholder='Email' labelName='Email' />
            </div>
            <div className='mb-4'>
              <Input
                type='password'
                placeholder='Password'
                labelName='Password'
              />
            </div>
            <div class='flex justify-center mt-6'>
              <button class='py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-600focus:outline-none focus:bg-gray-600 w-1/2'>
                Login
              </button>
            </div>
            <p className='text-center text-gray-800 mt-4'>
              Don't have an Account?{" "}
              <Link className='text-blue-600 underline' to='/register'>
                Register
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
