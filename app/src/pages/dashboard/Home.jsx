import React, { useEffect, useState } from "react";
import StockIndexWidget from "../../components/dashboard/StockIndexWidget";
import MutualFundWidget from "../../components/dashboard/MutualFundWidget";
import TypeMF from "../../components/dashboard/TypeMF";
// name, symbol, currPrice, currPer, currGap, size

// Data
let data = [
  {
    name: "Best Long Term Mutual Funds",
    logo: "/assets/svgs/best-long-term.svg",
    url: "/mutual-funds/best/long-term",
  },
  {
    name: "Best Returns Mutual Funds",
    logo: "/assets/svgs/best-returns.svg",
    url: "/mutual-funds/best/returns",
  },
  {
    name: "Best Tax Saver Mutual Funds",
    logo: "/assets/svgs/best-tax-saver.svg",
    url: "/mutual-funds/best/tax-saver",
  },
  {
    name: "Best Equity Mutual Funds",
    logo: "/assets/svgs/best-equity.svg",
    url: "/mutual-funds/best/equity",
  },
  {
    name: "Best Debt Mutual Funds",
    logo: "/assets/svgs/best-debt.svg",
    url: "/mutual-funds/best/debt",
  },
];

const Home = () => {
  const [randomNumArr, setRandomNumArr] = useState([]);

  const randomNum = () => {
    let numArr = [];
    let num = Math.floor(Math.random() * data.length);
    for (let i = 0; i < 2; i++) {
      if (numArr.includes(num)) {
        num = Math.floor(Math.random() * data.length);
      }
      numArr.push(num);
    }
    return numArr;
  };

  useEffect(() => {
    setRandomNumArr(randomNum());
  }, []);

  return (
    <>
      {/* <div className="p-4">
        <div className="flex justify-evenly">
          <StockWidget
            name={"Nifty 50"}
            symbol={"NFTY50"}
            currPrice={23591.78}
            currPer={0.48}
            currGap={1.72}
            size={"w-[30%]"}
          />
          <StockWidget
            name={"Nifty 50"}
            symbol={"NFTY50"}
            currPrice={23591.78}
            currPer={0.48}
            currGap={1.72}
            size={"w-[30%]"}
          />
        </div>

        <MutualFundWidget
          name="Nippon India Interval Fund-Quarterly Interval Fund-Series-I- Dividend Payout"
          oneYear={5.92903}
          fiveYear={4.045}
        />

        <div className="mutual-fund-recommendations mt-20">
          <h1 className="mb-4 text-3xl font-bold text-center">
            Discover Mutual Funds
          </h1>
          <div className="flex justify-center items-center flex-wrap w-[100%]">
            {data?.map((el, index) => {
              if (randomNumArr.includes(index)) {
                return (
                  <TypeMF
                    key={el.name}
                    name={el.name}
                    logo={el.logo}
                    recommended={true}
                    url={el.url}
                  />
                );
              } else {
                return (
                  <TypeMF
                    key={el.name}
                    name={el.name}
                    logo={el.logo}
                    recommended={false}
                    url={el.url}
                  />
                );
              }
            })}
          </div>
        </div>
      </div> */}

      <div className="bg-gray-100 p-2">
        <div className="flex">
          <div className="w-[69%] p-4 me-2 bg-white rounded-md">
            <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
            <div className="flex justify-evenly my-10">
              <div className="w-[30%] border p-4">
                <h4 className="text-xl font-bold">Total Investment</h4>
                <p className="text-lg mt-4 text-gray-600 font-semibold">
                  ₹ 1,00,000
                </p>
              </div>
              <div className="w-[30%] border p-4">
                <h4 className="text-xl font-bold ">Total Profit</h4>
                <p className="text-lg mt-4 text-green-500 font-semibold">
                  ₹ 1,00,000
                </p>
              </div>
              <div className="w-[30%] border p-4">
                <h4 className="text-xl font-bold">Total Loss</h4>
                <p className="text-lg mt-4 text-red-500 font-semibold">
                  ₹ 1,00,000
                </p>
              </div>
            </div>
            <img src="/assets/images/demo-chart.png" width={800} />
            <h1 className="text-2xl mt-8 font-semibold text-center mb-5">Discover Mutual Funds</h1>
            <div className="flex justify-center items-center flex-wrap w-[100%]">
            {data?.map((el, index) => {
              if (randomNumArr.includes(index)) {
                return (
                  <TypeMF
                    key={el.name}
                    name={el.name}
                    logo={el.logo}
                    recommended={true}
                    url={el.url}
                  />
                );
              } else {
                return (
                  <TypeMF
                    key={el.name}
                    name={el.name}
                    logo={el.logo}
                    recommended={false}
                    url={el.url}
                  />
                );
              }
            })}
          </div>
          </div>
          <div className="w-[29%]">
            <div className="bg-white p-3 rounded-md mb-3">
              <h1 className="text-lg mb-2 font-semibold">Stock Indexes</h1>
              <StockIndexWidget
                name={"Nifty 50"}
                symbol={"NFTY50"}
                currPrice={23591.78}
                currPer={0.48}
                currGap={1.72}
                size={"w-[100%] mb-4"}
              />
              <StockIndexWidget
                name={"Sensex"}
                symbol={"SENSEX"}
                currPrice={23591.78}
                currPer={0.48}
                currGap={1.72}
                size={"w-[100%]"}
              />
            </div>
            <div className="bg-white p-3 rounded-md">
              <h1 className="text-lg mb-2 font-semibold">
                Top Mutual Funds
              </h1>
              <div>
                <MutualFundWidget
                  name="Nippon India Interval Fund-Quarterly Interval Fund-Series-I- Dividend Payout"
                  oneYear={5.92903}
                  fiveYear={4.045}
                  titleText={"text-sm"}
                  valText={"text-sm"}
                />
                <MutualFundWidget
                  name="Nippon India Interval Fund-Quarterly Interval Fund-Series-I- Dividend Payout"
                  oneYear={5.92903}
                  fiveYear={4.045}
                  titleText={"text-sm"}
                  valText={"text-sm"}
                />
                <MutualFundWidget
                  name="Nippon India Interval Fund-Quarterly Interval Fund-Series-I- Dividend Payout"
                  oneYear={5.92903}
                  fiveYear={4.045}
                  titleText={"text-sm"}
                  valText={"text-sm"}
                />
                <MutualFundWidget
                  name="Nippon India Interval Fund-Quarterly Interval Fund-Series-I- Dividend Payout"
                  oneYear={5.92903}
                  fiveYear={4.045}
                  titleText={"text-sm"}
                  valText={"text-sm"}
                />
                <MutualFundWidget
                  name="Nippon India Interval Fund-Quarterly Interval Fund-Series-I- Dividend Payout"
                  oneYear={5.92903}
                  fiveYear={4.045}
                  titleText={"text-sm"}
                  valText={"text-sm"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
