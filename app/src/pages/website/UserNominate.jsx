import React from "react";
import Input from "../../components/Input";

const UserNominate = () => {
  return (
    <>
      <section className='bg-gray-200 h-[100vh] flex justify-center items-center'>
        <div class='max-w-4xl w-[60%] p-6 my-10 mx-auto rounded-md shadow-md bg-white'>
          <form>
            <p className='text-3xl text-center font-bold text-gray-900 capitalize mb-6'>
              Your Nominations
            </p>
            <div class='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
              <div className='mb-4'>
                <Input
                  type='text'
                  labelName='Relationship'
                  placeholder='Relationship'
                />
              </div>
              <div className='mb-4'>
                <Input
                  type='text'
                  labelName='Full Name of Nominee'
                  placeholder='Full Name'
                />
              </div>
              <div className='mb-4'>
                <Input
                  type='date'
                  labelName='Date of Birth'
                  placeholder='Date of Birth'
                />
              </div>
              <div className='mb-4'>
                <Input type='text' labelName='Address' placeholder='Address' />
              </div>
            </div>
            <div class='flex justify-evenly mt-6'>
              <button class='py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600focus:outline-none focus:bg-gray-600 w-1/3'>
                Add
              </button>
              <button class='py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-600focus:outline-none focus:bg-gray-600 w-1/3'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default UserNominate;
