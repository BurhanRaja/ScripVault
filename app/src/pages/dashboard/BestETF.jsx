import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearBestETFState,
  getBestETFThunk,
} from "../../features/etfs/bestETF";
import BestETFMap from "../../components/dashboard/BestETFMap";
import { useParams } from "react-router-dom";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import ETFModal from "../../components/dashboard/modals/ETFModal";

const BestETF = () => {
  const { name } = useParams();

  const [etfName, setETFName] = useState("");
  const [etfSymbol, setETFSymbol] = useState("");
  const [isModal, setIsModal] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const { isSuccess, isLoading, isError, bestETF } = useSelector(
    (state) => state.bestETFReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (name) {
      dispatch(clearBestETFState());
      dispatch(getBestETFThunk(name));
    }
  }, [name]);

  const handleBuy = () => {};

  return (
    <>
      {isModal && (
        <ETFModal
          name={etfName}
          setModal={(val) => setIsModal(val)}
          handleBuy={() => handleBuy()}
          quantity={quantity}
          setQuantity={(val) => setQuantity(val)}
        />
      )}
      <div className='bg-gray-100 p-2'>
        <div className='bg-white rounded-md p-5'>
          <div className='p-5'>
            <h1 className='text-2xl font-bold mb-5'>
              {name === "sector"
                ? "Best Sector ETFs"
                : name === "bond"
                ? "Best Bond ETFs"
                : name === "gold"
                ? "Best Gold ETFs"
                : "Best Index ETFs"}
            </h1>
            {isLoading && !isSuccess && !isError && (
              <>
                {" "}
                <span className='w-full mb-3 h-5 block rounded bg-gray-200 p-8 animate-pulse'></span>
                <span className='w-full mb-3 h-5 block rounded bg-gray-200 p-8 animate-pulse'></span>
                <span className='w-full mb-3 h-5 block rounded bg-gray-200 p-8 animate-pulse'></span>
                <span className='w-full mb-3 h-5 block rounded bg-gray-200 p-8 animate-pulse'></span>
                <span className='w-full mb-3 h-5 block rounded bg-gray-200 p-8 animate-pulse'></span>
              </>
            )}

            <BestETFMap
              data={bestETF?.data}
              setModal={(val) => setIsModal(val)}
              setSymbol={(val) => setETFSymbol(val)}
              setName={(val) => setETFName(val)}
            />

            {isError && (
              <p className='text-red-500 text-3xl'>Some Error Occurred.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BestETF;
