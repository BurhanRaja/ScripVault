import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearUserInfoState, getUserThunk } from "../../features/user/info";
import {
  clearNominateState,
  getNominateThunk,
} from "../../features/user/nominate";

const UserAccount = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [dob, setDob] = useState("");
  const [pan, setPan] = useState("");
  const [sourceWealth, setSourceWealth] = useState("");
  const [address, setAddress] = useState("");

  const [acctNo, setAcctNo] = useState("");
  const [acctType, setAcctType] = useState("");
  const [country, setCountry] = useState("");
  const [ifsc, setIfsc] = useState("");

  const [nomRelation, steNomRelation] = useState("");
  const [nomFullName, setNomFullName] = useState("");
  const [nomDob, setNomDob] = useState("");
  const [nomAddress, setNomAddress] = useState("");

  const { user, isLoading: userLoading } = useSelector(
    (state) => state.infoReducer
  );

  const { nominate, isLoading: nominateLoading } = useSelector(
    (state) => state.nominateReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearUserInfoState());
    dispatch(clearNominateState());

    dispatch(getUserThunk());
    dispatch(getNominateThunk());
  }, []);

  useEffect(() => {
    if (!userLoading && user) {
      setFullName(user?.basic?.full_name);
      setEmail(user?.basic?.email);
      setPhone(user?.basic?.phone);

      setDob(user?.info?.dob);
      setPan(user?.info?.pan);
      setSourceWealth(user?.info?.sourceWealth);
      setAddress(user?.info?.address);

      setAcctNo(user?.bank?.accountNumber);
      setAcctType(user?.bank?.accountType);
      setIfsc(user?.bank?.ifsc);
      setCountry(user?.bank?.country);
    }
  }, [user, isLoading]);

  useEffect(() => {
    if (nominate && !nominateLoading) {
      setNomFullName(nominate?.nominate?.name);
      steNomRelation(nominate?.nominate?.relationship);
      setNomDob(nominate?.nominate?.dob);
      setNomAddress(nominate?.nominate?.address);
    }
  }, [nominate, nominateLoading]);

  return (
    <>
      <section className='bg-gray-200 flex justify-center items-center'>
        <div class='max-w-4xl w-[80%] p-6 my-10 mx-auto rounded-md shadow-md bg-white'>
          <form onSubmit={handleUserSubmit}>
            <p className='text-3xl text-center font-bold text-gray-900 capitalize mb-6'>
              User
            </p>
            <div class='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
              <div className='mb-4'>
                <Input
                  type='text'
                  placeholder='Full Name'
                  labelName='Full Name'
                  value={fullName}
                  handleValue={(val) => {
                    setFullName(val);
                  }}
                  handleFocus={() => {}}
                />
              </div>
              <div className='mb-4'>
                <Input
                  type='email'
                  placeholder='Email'
                  labelName='Email'
                  value={email}
                  handleValue={(val) => {
                    setEmail(val);
                  }}
                  handleFocus={() => {}}
                />
              </div>
              <div className='mb-4'>
                <Input
                  type='number'
                  placeholder='Phone No.'
                  labelName='Phone No.'
                  value={phone}
                  handleValue={(val) => {
                    setPhone(val);
                  }}
                  handleFocus={(val) => {}}
                />
              </div>
            </div>
            <div class='flex justify-center mt-6'>
              <button class='py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-600focus:outline-none focus:bg-gray-600 w-1/2'>
                Submit
              </button>
            </div>
          </form>
        </div>
        <div class='max-w-4xl w-[60%] p-6 my-10 mx-auto rounded-md shadow-md bg-white'>
          <form onSubmit={handleInformationSubmit}>
            <p className='text-3xl text-center font-bold text-gray-900 capitalize mb-6'>
              User Information
            </p>
            <div class='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
              <div className='mb-4'>
                <Input
                  type='date'
                  labelName='Date of Birth'
                  placeholder='Date of Birth'
                  value={dob}
                  handleValue={(val) => {
                    setDob(val);
                  }}
                  handleFocus={() => {}}
                />
                {/* {dob === "" && error && (
                  <small className='text-red-500'>{error}</small>
                )} */}
              </div>
              <div className='mb-4'>
                <Input
                  type='text'
                  labelName='PAN Number'
                  placeholder='PAN No.'
                  value={pan}
                  handleValue={(val) => {
                    setPan(val);
                  }}
                  handleFocus={() => {}}
                />
                {/* {panNum === "" && error && (
                  <small className='text-red-500'>{error}</small>
                )} */}
              </div>
              <div className='mb-4'>
                <Input
                  type='text'
                  labelName='Source Wealth'
                  placeholder='Source Wealth'
                  value={sourceWealth}
                  handleValue={(val) => {
                    setSourceWealth(val);
                  }}
                  handleFocus={() => {}}
                />
                {/* {sourceWealth === "" && error && (
                  <small className='text-red-500'>{error}</small>
                )} */}
              </div>
              <div className='mb-4'>
                <TextArea
                  label='Address'
                  placeholderText='Address'
                  value={address}
                  handleValue={(val) => {
                    setAddress(val);
                  }}
                />
                {/* {address === "" && error && (
                  <small className='text-red-500'>{error}</small>
                )} */}
              </div>
            </div>
            <div class='flex justify-center mt-6'>
              <button class='py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-600focus:outline-none focus:bg-gray-600 w-1/2'>
                Submit
              </button>
            </div>
          </form>
        </div>
        <div class='max-w-4xl w-[60%] p-6 my-10 mx-auto rounded-md shadow-md bg-white'>
          <form onSubmit={handleBankDetailsSubmit}>
            <p className='text-3xl text-center font-bold text-gray-900 capitalize mb-6 mt-6'>
              Bank Details
            </p>
            <div class='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
              <div className='mb-4'>
                <Input
                  type='text'
                  labelName='Acct No.'
                  placeholder='Account Number'
                  value={acctNo}
                  handleValue={(val) => {
                    setAcctNo(val);
                  }}
                  handleFocus={() => {}}
                />
                {/* {!checkAcctNo && error && (
                  <small className='text-red-500'>{error}</small>
                )} */}
              </div>
              <div className='mb-4'>
                <Input
                  type='text'
                  labelName='Acct Type'
                  placeholder='Account Type'
                  value={acctType}
                  handleValue={(val) => {
                    setAcctType(val);
                  }}
                  handleFocus={() => {}}
                />
                {/* {acctType === "" && error && (
                  <small className='text-red-500'>{error}</small>
                )} */}
              </div>
              <div className='mb-4'>
                <Input
                  type='text'
                  labelName='IFSC Code'
                  placeholder='ifsc code'
                  value={ifsc}
                  handleValue={(val) => {
                    setIfsc(val);
                  }}
                  handleFocus={() => {}}
                />
                {/* {ifscCode === "" && error && (
                  <small className='text-red-500'>{error}</small>
                )} */}
              </div>
              <div className='mb-4'>
                <Input
                  type='text'
                  labelName='Country'
                  placeholder='Country'
                  value={country}
                  handleValue={(val) => {
                    setCountry(val);
                  }}
                  handleFocus={() => {}}
                />
                {/* {country === "" && error && (
                  <small className='text-red-500'>{error}</small>
                )} */}
              </div>
            </div>
            <div class='flex justify-center mt-6'>
              <button class='py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-600focus:outline-none focus:bg-gray-600 w-1/2'>
                Submit
              </button>
            </div>
          </form>
        </div>
        <div class='max-w-4xl w-[60%] p-6 my-10 mx-auto rounded-md shadow-md bg-white'>
          <form onSubmit={handleNominateSubmit}>
            <p className='text-3xl text-center font-bold text-gray-900 capitalize mb-6 mt-6'>
              User Nominate
            </p>
            <div class='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
              <div className='mb-4'>
                <Input
                  type='text'
                  labelName='Nominate Relationship'
                  placeholder=''
                  value={nomRelation}
                  handleValue={(val) => {
                    setNomRelation(val);
                  }}
                  handleFocus={() => {}}
                />
                {/* {!checkAcctNo && error && (
                  <small className='text-red-500'>{error}</small>
                )} */}
              </div>
              <div className='mb-4'>
                <Input
                  type='text'
                  labelName='Nominate Full Name'
                  placeholder=''
                  value={nomFullName}
                  handleValue={(val) => {
                    setNomFullName(val);
                  }}
                  handleFocus={() => {}}
                />
                {/* {acctType === "" && error && (
                  <small className='text-red-500'>{error}</small>
                )} */}
              </div>
              <div className='mb-4'>
                <Input
                  type='date'
                  labelName='Nominate DOB'
                  placeholder=''
                  value={nomDob}
                  handleValue={(val) => {
                    setNomDob(val);
                  }}
                  handleFocus={() => {}}
                />
                {/* {ifscCode === "" && error && (
                  <small className='text-red-500'>{error}</small>
                )} */}
              </div>
              <div className='mb-4'>
                <TextArea
                  label='Nominate Address'
                  placeholderText=''
                  value={nomAddress}
                  handleValue={(val) => {
                    setNomAddress(val);
                  }}
                />
                {/* {country === "" && error && (
                  <small className='text-red-500'>{error}</small>
                )} */}
              </div>
            </div>
            <div class='flex justify-center mt-6'>
              <button class='py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-600focus:outline-none focus:bg-gray-600 w-1/2'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default UserAccount;
