import React, { useEffect, useState } from "react";
import Input from "../../components/Input";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { userRegisterThunk } from "../../features/user/auth";

const EMAIL_REGEX = /^[a-z0-9._]+@[a-z]+\.[a-z]{2,4}$/;
const NAME_REGEX = /^[A-Za-z]+\s[A-Za-z]{2,20}$/;
const PASSWORD_REGEX = /^[A-Za-z0-9!@#$%^&*]{2,20}$/;

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [checkEmail, setCheckEmail] = useState(false);
  const [checkName, setCheckName] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);

  const [matchPassword, setMatchPassword] = useState(false);

  const [error, setError] = useState("");

  useEffect(() => {
    if (NAME_REGEX.test(fullName)) {
      setCheckName(true);
    }
  }, [fullName]);

  useEffect(() => {
    if (EMAIL_REGEX.test(email)) {
      setCheckEmail(true);
    }
  }, [email]);

  useEffect(() => {
    if (PASSWORD_REGEX.test(password)) {
      setCheckPassword(true);
    }
  }, [password]);

  useEffect(() => {
    if (password === confirmPassword) {
      setMatchPassword(true);
    }
  }, [confirmPassword]);

  const { isLoading, isError, isSuccess, id } = useSelector(
    (state) => state.authReducer
  );
  const dispatch = useDispatch();

  const handleSubmit = () => {
    let t1 = NAME_REGEX.test(fullName);
    let t2 = EMAIL_REGEX.test(email);
    let t3 = PASSWORD_REGEX.test(password);
    let t4 = password === confirmPassword;

    if (!t1 || !t2 || !t3 || !t4) {
      setError("Please enter above field correctly.");
    }

    let data = {
      full_name: fullName,
      email,
      phone,
      password,
    };

    dispatch(userRegisterThunk(data));
  };

  useEffect(() => {
    if (id) {
      localStorage.setItem("userId", id);
    }
  }, [id]);

  return (
    <>
      <div className="flex justify-end items-center">
        <button className="p-2 me-10 absolute top-3">
          <Link to="/">
            <RxCross2 className="text-3xl" />
          </Link>
        </button>
      </div>
      <section className="bg-gray-200 flex justify-center items-center">
        <div class="max-w-4xl w-1/2 p-6 my-10 mx-auto rounded-md shadow-md bg-white">
          <h2 class="text-3xl text-center font-bold text-gray-900 capitalize mb-6">
            Register
          </h2>
          <form>
            <div className="mb-4">
              <Input
                type="text"
                placeholder="Full Name"
                labelName="Full Name"
                value={fullName}
                handleValue={(val) => setFullName(val)}
              />
            </div>
            <div className="mb-4">
              <Input type="email" placeholder="Email" labelName="Email" />
            </div>
            <div className="mb-4">
              <Input
                type="number"
                placeholder="Phone No."
                labelName="Phone No."
              />
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
              <button class="py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-600focus:outline-none focus:bg-gray-600 w-1/2">
                Register
              </button>
            </div>
            <p className="text-center text-gray-800 mt-4">
              Already have an Account?{" "}
              <Link className="text-blue-600 underline" to="/login">
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
