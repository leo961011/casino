import { CopyBox } from "@/components/ui/CopyBox";
import SwapDiagonalIcon from "@/components/ui/icons/swap-diagonal";
import React from "react";

const Swap: React.FC = () => {
  const faqs = [
    {
      question: "How to activate a wallet address?",
      answer:
        "Upgrade bonuses can be applied on the VIP Activity page on a self-service basis after members reach a membership level. Each member can only receive one upgrade bonus for each level.",
    },
    {
      question: "Why do I need to activate the wallet address?",
      answer:
        "Upgrade bonuses can be applied on the VIP Activity page on a self-service basis after members reach a membership level. Each member can only receive one upgrade bonus for each level.",
    },
    {
      question: "Will not activating the wallet address affect withdrawals?",
      answer:
        "Upgrade bonuses can be applied on the VIP Activity page on a self-service basis after members reach a membership level. Each member can only receive one upgrade bonus for each level.",
    },
  ];

  return (
    <div className=" [@media(max-width:660px)]:w-full flex flex-col gap-4">
      <p className="text-[18px] font-bold text-white [@media(max-width:660px)]:hidden">
        Swap
      </p>
      <div className="p-4 flex gap-4 rounded-[12px] bg-white-4 flex-col">

        <h2 className="font-bold text-[14px] text-white flex items-center justify-between indent-[20px]">Send<span >Balance <span className="text-dodger-blue"> 0 USDT</span></span></h2>
        <div className="px-4 h-[47px] flex items-center bg-white-8 rounded-[8px] text-casper font-bold text-[12px]">
          0
        </div>
        <div className="grid grid-cols-4 h-[47px] items-center  gap-4 font-bold text-[12px]">
          <div className=" text-casper text-[12px] font-bold h-full flex items-center justify-center  bg-white-8 rounded-[8px]">Lowest</div>
          <div className=" text-casper text-[12px] font-bold h-full flex items-center justify-center  bg-white-8 rounded-[8px]">25%</div>
          <div className=" text-casper text-[12px] font-bold h-full flex items-center justify-center  bg-white-8 rounded-[8px]">50%</div>
          <div className="text-casper text-[12px] font-bold  h-full flex items-center justify-center bg-white-8 rounded-[8px]">Highest</div>
        </div>

      </div>
      <div className="flex justify-center">
        <SwapDiagonalIcon className="w-8 h-8" color="#A7B5CA" />
      </div>
      <div className="rounded-[12px] overflow-hidden p-4 bg-white-4 flex flex-col gap-4">
        <h2 className="text-[14px] text-gallery font-bold">
          Get
        </h2>
        <div className="rounded-[12px] overflow-hidden bg-white-8 p-1 flex gap-2">
          <div className="h-9 px-3 bg-white-13 rounded-[12px] items-center gap-2 flex">
            <img src="/icons/coin-icon/USDT.svg" className="h-6 w-6" alt="usdt" />
            <span className="text-[14px] font-bold text-gallery uppercase">trx</span>
          </div>
          <div className="flex justify-end  font-bold text-[14px] text-casper uppercase items-center">0</div>
        </div>
      </div>
      <div className="p-4 flex gap-4 rounded-[12px] bg-white-4 flex-col">

        <h2 className="font-bold text-[14px] text-white flex items-center justify-between indent-[20px]">Exchange Address</h2>
        <CopyBox className="bg-white-8">
          <span className="text-casper font-bold break-all p-4 text-[12px]"><span className="text-dodger-blue">TXS3</span>PfAU9hemKkoBWRUfsUkGBSrZGa<span className="text-dodger-blue">gh6X</span></span>
        </CopyBox>

      </div>
      <div className="flex flex-col gap-4 py-4 border-t border-white-8">
        <div className="flex justify-between items-center">
          <span className="text-casper font-medium text-[12px] flex items-center gap-1">Exchange rate:</span>
          <span className="text-white font-bold text-[12px]">1 USDT - NaN TRX</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-casper font-medium text-[12px] flex items-center gap-1">Exchange fee:</span>
          <span className="text-white font-bold text-[12px]">0 USDT</span>
        </div>
      </div>
    </div>
  );
};

export default Swap;
