import React from 'react';
import Image from 'next/image';

const Section2 = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gray-100 px-[50px] py-[50px]">
      <div className="relative w-full max-w-5xl bg-white shadow-lg rounded-[30px] border flex flex-col md:flex-row items-center md:items-start gap-6 px-[50px] pt-[50px] overflow-hidden ">

        {/* Background circles */}
        <div
          className="absolute w-72 h-72 rounded-full bg-[#F864001A] hidden md:block lg:block"
          style={{ top: '4rem', right: '-5rem' }}
        ></div>
        <div
          className="absolute w-72 h-72 rounded-full bg-[#F864001A] md:block hidden lg:block"
          style={{ bottom: '-4rem', left: '-5rem' }}
        ></div>

        {/* Form Container */}
        <div className="w-full flex flex-col flex-grow">
          <div className="flex flex-col gap-2 items-center mb-[40px] text-start sm:items-start sm:ml-[70px] sm:mb-[50px] md:items-start md:ml-[70px] md:mb-[50px] lg:items-start lg:ml-[70px] lg:mb-[50px] xl:items-start xl:ml-[70px] xl:mb-[50px]">
            <h1 className="text-custom-gray font-bold text-[22px] sm:text-[22px] md:text-[25px] lg:text-[28px] xl:text-[30px]">중고차수출 무료 상담</h1>
            <p className="text-custom-gray lg:text-[16px] text-[15px] sm:text-[15px] md:text-[15px] xl:text-[16px]">1:1 실시간 상담으로 쉽고 빠른 내차시세조회</p>
          </div>


          <form className="flex flex-col gap-[40px] sm:gap-[45px] md:gap-[45px] lg:gap-[60px] xl:gap-[60px] mb-[50px]">
            <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row gap-[30px] items-center">
              <label className=" text-custom-gray text-[20px]">차량명</label>
              <input 
                id="carName"
                type="text" 
                placeholder="차량명을 입력해주세요 예. K5" 
                className="flex-1 max-w-[360px] h-[48px] border border-gray-300 rounded p-3"
              />
            </div>

            <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row gap-[30px] items-center">
              <label  className=" text-custom-gray text-[20px]">핸드폰</label>
              <input 
                id="phone"
                type="tel" 
                placeholder="010" 
                className="flex-1 max-w-[360px] h-[48px] border border-gray-300 rounded p-3"
              />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-3">
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  className="accent-gray-500 h-4 w-4 mr-2"
                /> 개인정보 수집/이용 동의
              </label>
              <p className="text-sm text-custom-gray ml-4">내용보기</p>
            </div>

            <button
              className="flex w-full md:w-auto self-center text-[20px] font-bold bg-custom-orange text-white rounded-lg shadow-md p-2">
              1초면 내가 최고가 되게 조작 click!
            </button>
          </form>
        </div>

        {/* Image */}
        <div className="hidden xl:flex flex-none self-end">
          <Image
            src="/Man1.png"
            alt="Man standing with background ellipses"
            width={261}
            height={370}
            className="relative  "
          />
        </div>
      </div>
    </div>
  );
};

export default Section2;
