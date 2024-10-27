// src/components/CarConsultationStatus.tsx
import React from 'react';
import Image from 'next/image';

const Section3 = () => {
  const consultations = [
    { id: 1, name: "Kia K8 2021년 상담...", status: "상담 완료" },
    { id: 2, name: "G80 2016년 상담...", status: "상담 완료" },
    { id: 3, name: "카니발 2020년 상담...", status: "상담 완료" },
    { id: 4, name: "티볼리 2015년 상담...", status: "상담 완료" },
    { id: 5, name: "레이 2019년 상담...", status: "상담 완료" },
  ];

  return (
    <div className="relative p-5 m-4 min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/WorldMap.png"
          alt="World Map Background"
          layout="fill"
          objectFit="cover"
          quality={80}
          priority
        />
      </div>
      <div className="flex flex-col bg-custom-orange mx-4 p-6 rounded-2xl shadow-2xl w-full max-w-xl">
        <h2 className="text-white text-lg sm:text-xl lg:text-2xl text-center font-bold mb-5">
          실시간 차량상담 접수 현황
        </h2>
        <div className="border-t-4 border-white mb-10 w-full" />
        <div className="flex flex-col gap-5">
          {consultations.map((item) => (
            <div
              key={item.id}
              className="flex sm:flex-row gap-[20px] items-center justify-between bg-custom-sblue text-white p-3 rounded-lg"
            >
              <span className="bg-white text-custom-orange text-xs font-bold p-2 rounded-md mb-2 sm:mb-0 sm:mr-2">
                NEW
              </span>
              <span className="flex-1 text-center sm:text-left">{item.name}</span>
              <span className="text-sm mt-2 sm:mt-0">{item.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section3;
