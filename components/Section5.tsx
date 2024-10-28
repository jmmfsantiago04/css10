import React from 'react';
import Image from 'next/image';

const Section5 = () => {
  const backgroundImageUrl = '/Vector.png';

  return (
    <div className='p-5'>
      <div className="lg:max-w-[877px] xl:min-h-[1241px] bg-white rounded-[30px] mx-auto mt-10 shadow-2xl flex flex-col items-center relative overflow-hidden">
        <h1 className="flex text-custom-orange font-bold max-w-[700px] mt-[50px] text-center mx-2 text-[25px] sm:text-[25px] md:text-[42px] lg:text-[42px] xl:text-[45px]">
          왜! 중고차 수수료를 해야 할까요?
        </h1>

        <div className="flex sm:w-[600px] md:w-[700px] lg:w-[700px] xl:w-[700px] border-t-[5px] border-custom-gray" />

        <p className="flex max-w-[475px] text-gray-700 text-center mt-[30px] text-[18px]">
          국내에서 사용된 차량을 해외 시장으로 수출하여 판매하는<br />
          방식은, 국내 중고차 시장에서 거래되는 가격보다 더 높은<br />
          수익을 기대할 수 있는 효과적인 중고차 매매 방식이다.
        </p>

        <div className=''>
          <Image
            src="/Man2.png"
            alt="A man depicting car sales"
            width={442}
            height={447}
            className="self-end hidden lg:block xl:block"
          />
        </div>

        <div
          className="hidden md:block  lg:block xl:block absolute lg:mt-[415px] lg:ml-[-20px] xl:mt-[420px] xl:ml-[-20px] min-w-[990px] min-h-[895px] bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        />

        <div className='flex flex-col pt-0 pb-10 mt-[50px] lg:mt-0 xl:mt-0'>
          <div className='bg-white  m-2 flex flex-col gap-[25px] sm:text-[18px] md:text-[18px] lg:text-[25px] xlg:text-[25px]'>
            <p className="bg-white z-10 rounded-[30px] px-8 py-5 text-[20px] shadow-xl border border-gray-200">
              1. 업계의 오랜이어도 국내 대비 경쟁력이 크지 않음
            </p>
            <p className="bg-white z-10 rounded-[30px] px-8 py-5 text-[20px] shadow-xl border border-gray-200">
              2. 주변업계가 많아도 친절한 직원
            </p>
            <p className="bg-white z-10 rounded-[30px] px-8 py-5 text-[20px] shadow-xl border border-gray-200">
              3. 새 시리즈에 있는 자본금 간접원인 적음
            </p>
            <p className="bg-white z-10 rounded-[30px] px-8 py-5 text-[20px] shadow-xl border border-gray-200">
              4. 피치카카닷넷 50만 원에서 300만 원까지 더 받을 수 있음
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
