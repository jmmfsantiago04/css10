import React from 'react';
import Image from 'next/image';

interface CardData {
  imageUrl: string;
  title: string;
  dealer: string;
  dealerPrice: string;
  transport: string;
  transportPrice: string;
  discount: string;
}

const cardsData: CardData[] = [
  {
    imageUrl: '/car1.png',
    title: '현대 더 뉴 그랜드 스타렉스',
    dealer: '종고차 매매상사:',
    dealerPrice: '3200만 원',
    transport: '종고차 수송:',
    transportPrice: '3350만 원',
    discount: '최대 150만 원 할인!',
  },
  {
    imageUrl: '/car2.png',
    title: '쉐보래 어매이 크루즈',
    dealer: '중고차 매매상사:',
    dealerPrice: '620만 원',
    transport: '종고차 수송:',
    transportPrice: '750만 원',
    discount: '최대 130만 원 할인!',
  },
  {
    imageUrl: '/car3.png',
    title: '기아 올 뉴 카니발 9인승',
    dealer: '종고차 매매상사:',
    dealerPrice: '1100만 원',
    transport: '종고차 수송:',
    transportPrice: '1320만 원',
    discount: '최대 220만 원 할인!',
  },
  {
    imageUrl: '/car4.png',
    title: '현대 더뉴 i40 살룬',
    dealer: '종고차 매매상사:',
    dealerPrice: '780만 원',
    transport: '종고차 수송:',
    transportPrice: '980만 원',
    discount: '최대 200만 원 할인!',
  },
];

const renderCard = (card: CardData, index: number) => (
  <div key={index} className="w-[17.125rem] h-[28.5rem] bg-white rounded-[1.875rem] shadow-lg flex flex-col overflow-hidden">
    <div className="w-full h-[12.4375rem] relative">
      <Image src={card.imageUrl} alt={`Image of ${card.title}`} layout="fill" objectFit="cover" />
    </div>
    <p className="mt-[0.875rem] px-[3.25rem] text-center text-[0.875rem] font-bold whitespace-nowrap text-ellipsis overflow-hidden">
      {card.title}
    </p>
    <div className="flex flex-col items-center justify-around flex-grow p-4">
      <div className="flex items-center gap-10 text-s16 font-medium whitespace-nowrap text-custom-gray mt-[3.875rem] mb-[1.25rem]">
        <p>{card.dealer}</p><p>{card.dealerPrice}</p>
      </div>
      <div className="flex items-center gap-8 text-s20 font-bold text-custom-gray whitespace-nowrap">
        <p>{card.transport}</p><p>{card.transportPrice}</p>
      </div>
      <button className="w-[12.5rem] h-[2.8125rem] mt-[2rem] mb-[1.125rem] bg-[#4D768A] text-white font-bold rounded-[0.625rem]">
        {card.discount}
      </button>
    </div>
  </div>
);

const Section4 = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-5">
      {cardsData.map(renderCard)}
    </div>
  );
};

export default Section4;
