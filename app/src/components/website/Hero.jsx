import React from "react";
import Button from "../Button";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <>
      <section class='text-gray-600 body-font'>
        <div class='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
          <div class='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
            <h1 class='title-font md:text-5xl sm:text-4xl leading-normal font-extrabold text-3xl mb-4 text-gray-900'>
              ScripVault
            </h1>
            <span className="text-3xl font-bold mb-3 text-gray-700">The Best Investment Advisor</span>
            <p class='mb-8 leading-relaxed text-xl'>
              Fast, Efficient and Research oriented Investment Recommendations
              at your fingertips.
            </p>
            <div class='flex justify-center'>
              <Button
                text={
                  <span className='flex items-center justify-between'>
                    Get Started <BsArrowRight className='ms-3 text-lg' />
                  </span>
                }
                textSize='text-lg'
                color='bg-indigo-500'
                hoverColor='hover:bg-indigo-600 hover:scale-105 transition-all duration-150'
                textColor='text-white'
              />
            </div>
          </div>
          <div class='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
            <img
              class='object-cover object-center rounded'
              alt='hero'
              src='https://jamaappprod.s3.ap-south-1.amazonaws.com/Website/new/static/img/home-banner-7.svg'
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
