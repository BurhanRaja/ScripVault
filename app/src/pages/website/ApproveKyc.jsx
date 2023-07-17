import React from "react";
import { sendEmailLoginThunk } from "../../features/email/sendLoginEmail";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { approveKycThunk } from "../../features/kyc/kyc";

const ApproveKyc = ({ setAlert }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEmail = () => {
    let data = {
      id: localStorage.getItem("userId"),
    };
    dispatch(approveKycThunk(data)).then((data) => {
      if (!data?.payload?.success) {
        setAlert({
          show: true,
          type: "danger",
          message: `Error approving KYC.`,
        });
      } else {
        dispatch(sendEmailLoginThunk(localStorage.getItem("userId"))).then(
          (data) => {
            if (!data?.payload.success) {
              setAlert({
                show: true,
                type: "warning",
                message: `${data.payload?.message}`,
              });
              return;
            } else {
              setAlert({
                show: true,
                type: "success",
                message: "KYC approved successfully. You will recieve an email. Please Verify to login.",
              });
              localStorage.clear()
              navigate("/login");
              return;
            }
          }
        );
      }
    });
  };

  return (
    <>
      <div className="text-center h-[100vh] flex justify-center items-center">
        <div>
          <h1 className="text-xl mb-5">
            As, it is a demo app. Please Approve your KYC, to proceed further.
          </h1>
          <button
            onClick={handleEmail}
            className="p-3 px-5 text-lg font-semibold rounded-md bg-black text-white"
          >
            Approve KYC
          </button>
        </div>
      </div>
    </>
  );
};

export default ApproveKyc;
