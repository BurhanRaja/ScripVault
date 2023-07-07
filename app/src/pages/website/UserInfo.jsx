import React, { useEffect, useState } from "react";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import { useDispatch, useSelector } from "react-redux";
import { addUserInfoThunk } from "../../features/user/info";
import { useNavigate } from "react-router-dom";

const PAN_NUM_REGEX = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
const ACCOUNT_NUM_REGEX = /^[0-9]{9,18}$/;

const UserInfo = () => {
  const [dob, setDOB] = useState("");
  const [panNum, setPanNum] = useState("");
  const [sourceWealth, setSourceWealth] = useState("");
  const [address, setAddress] = useState("");
  const [acctNo, setAcctNo] = useState("");
  const [acctType, setAcctType] = useState("");
  const [ifscCode, setIFSCCode] = useState("");
  const [country, setCountry] = useState("");

  const [checkPanNum, setCheckPanNum] = useState(false);
  const [checkAcctNo, setCheckAcctNo] = useState(false);

  // Error
  const [error, setError] = useState(false);

  useEffect(() => {
    if (ACCOUNT_NUM_REGEX.test(acctNo)) {
      setCheckAcctNo(true);
    }
  }, [acctNo]);

  useEffect(() => {
    if (PAN_NUM_REGEX.test(panNum)) {
      setCheckPanNum(true);
    }
  }, [panNum]);

  const { isLoading, isSuccess, isError } = useSelector(
    (state) => state.infoReducer
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    let t1 = PAN_NUM_REGEX.test(panNum);
    let t2 = ACCOUNT_NUM_REGEX.test(acctNo);

    if (
      !t1 ||
      !t2 ||
      dob === "" ||
      sourceWealth === "" ||
      address === "" ||
      acctType === "" ||
      ifscCode === "" ||
      country === ""
    ) {
      setError("Please Enter above field correctly.");
      return;
    }

    let data = {
      id: localStorage.getItem("id"),
      dob,
      pan: panNum,
      sourceWealth,
      address,
      accountNumber: acctNo,
      accountType: acctType,
      ifsc: ifscCode,
      country,
    };

    dispatch(addUserInfoThunk(data));
    navigate("/user/nominate");
  };

  return (
    <>
      <section className='bg-gray-200 flex justify-center items-center'>
        <div class='max-w-4xl w-[60%] p-6 my-10 mx-auto rounded-md shadow-md bg-white'>
          <form onSubmit={handleSubmit}>
            <p className='text-3xl text-center font-bold text-gray-900 capitalize mb-6'>
              Information
            </p>
            <div class='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
              <div className='mb-4'>
                <Input
                  type='date'
                  labelName='Date of Birth'
                  placeholder='Date of Birth'
                  value={dob}
                  handleValue={(val) => setDOB(val)}
                  handleFocus={() => {}}
                />
                {dob === "" && error && (
                  <small className='text-red-500'>{error}</small>
                )}
              </div>
              <div className='mb-4'>
                <Input
                  type='text'
                  labelName='PAN Number'
                  placeholder='PAN No.'
                  value={panNum}
                  handleValue={(val) => setPanNum(val)}
                  handleFocus={() => {}}
                />
                {!checkPanNum && error && (
                  <small className='text-red-500'>{error}</small>
                )}
              </div>
              <div className='mb-4'>
                <Input
                  type='text'
                  labelName='Source Wealth'
                  placeholder='Source Wealth'
                  value={sourceWealth}
                  handleValue={(val) => setSourceWealth(val)}
                  handleFocus={() => {}}
                />
                {dob === "" && error && (
                  <small className='text-red-500'>{error}</small>
                )}
              </div>
              <div className='mb-4'>
                <TextArea
                  label='Address'
                  placeholderText='Address'
                  value={address}
                  handleChange={(val) => setAddress(val)}
                />
                {address === "" && error && (
                  <small className='text-red-500'>{error}</small>
                )}
              </div>
            </div>

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
                  handleValue={(val) => setAcctNo(val)}
                  handleFocus={() => {}}
                />
                {!checkAcctNo && error && (
                  <small className='text-red-500'>{error}</small>
                )}
              </div>
              <div className='mb-4'>
                <Input
                  type='text'
                  labelName='Acct Type'
                  placeholder='Account Type'
                  value={acctType}
                  handleValue={(val) => setAcctType(val)}
                  handleFocus={() => {}}
                />
                {acctType === "" && error && (
                  <small className='text-red-500'>{error}</small>
                )}
              </div>
              <div className='mb-4'>
                <Input
                  type='text'
                  labelName='IFSC Code'
                  placeholder='ifsc code'
                  value={ifscCode}
                  handleValue={(val) => setIFSCCode(val)}
                  handleFocus={() => {}}
                />
                {ifscCode === "" && error && (
                  <small className='text-red-500'>{error}</small>
                )}
              </div>
              <div className='mb-4'>
                <Input
                  type='text'
                  labelName='Country'
                  placeholder='Country'
                  value={country}
                  handleValue={(val) => setCountry(val)}
                  handleFocus={() => {}}
                />
                {country === "" && error && (
                  <small className='text-red-500'>{error}</small>
                )}
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

export default UserInfo;
