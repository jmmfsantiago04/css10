import React from 'react';
import Image from 'next/image';

const Section1 = () => {
  return (
    <div
      className="w-full h-[26.625rem] sm:h-[18.75rem] md:h-[21.875rem] lg:h-[26.625rem] bg-cover bg-center flex flex-col items-center justify-center relative"
      style={{ backgroundImage: 'url(/banner.png)' }}
    >
      <div className="hidden lg:block xl:block lg:absolute lg:top-0 lg:left-0 xl:absolute xl:top-0 xl:left-0  items-start p-6 sm:p-4 lg:p-8">
        {/* Logo Image with Maximum Size */}
        <Image
            src="/logo1.png"
            alt="logo"
            width={223}
            height={48}
            className="relative  "
          />
      </div>

      <div className="flex flex-col items-center text-center max-w-[1440px] mx-auto ">
        <h1 className="font-bold text-custom-gray text-[18px] mb-5 md:text-[22px] lg:text-[25px] xl:text-[36px]">
          컨테이너, 언제, 서고가 상관없이
        </h1>
        <p className="font-bold text-custom-orange text-[21px] md:text-[26px] lg:text-[30px] xl:text-[48px]">
          중고차 수출을 처음 300만원 비싸게 파세요
        </p>
      </div>
    </div>
  );
};

export default Section1;
