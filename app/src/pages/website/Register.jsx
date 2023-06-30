import React from "react";
import Input from "../../components/Input";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <section className="bg-gray-900 h-[100vh] flex justify-center items-center">
        <div class="max-w-4xl w-1/3 p-6 mx-auto rounded-md shadow-md bg-slate-800">
          <h2 class="text-2xl text-center font-semibold text-gray-200 capitalize">
            Register
          </h2>
          <form>
            <div className="mb-4">
              <Input type="text" placeholder="Full Name" labelName="Full Name" />
            </div>
            <div className="mb-4">
              <Input type="email" placeholder="Email" labelName="Email" />
            </div>
            <div className="mb-4">
              <Input type="number" placeholder="Phone No." labelName="Phone No." />
            </div>
            <div className="mb-4">
              <Input
                type="password"
                placeholder="Password"
                labelName="Password"
              />
            </div>
            <div className="mb-4">
              <Input
                type="password"
                placeholder="Confirm Password"
                labelName="Confirm Password"
              />
            </div>
            <div class="flex justify-center mt-6">
              <button class="py-2.5 leading-5 text-black transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-gray-600 hover:text-white focus:outline-none focus:bg-gray-600 w-1/2">
                Register
              </button>
            </div>
            <p className="text-center text-white mt-4">
              Already have an Account?{" "}
              <Link className="text-blue-300 underline" to="/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
