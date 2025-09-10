import { Dropdown } from "@/components/ui";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

const Transaction: React.FC = () => {
  const [selectedOption1, setSelectedOption1] = useState("Past 90 days");
  const [selectedOption2, setSelectedOption2] = useState("All currencies");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const [selectedOption3, setSelectedOption3] = useState("Hash Betting");
  const [selectedOption4, setSelectedOption4] = useState("All status");

  const options1 = [
    {
      value: "Past 90 days",
      label: "Past 90 days"
    }
  ]

  const options2 = [
    {
      value: "All currencies",
      label: "All currencies"
    }
  ]

  const options3 = [
    {
      value: "Hash Betting",
      label: "Hash Betting"
    }
  ]

  const options4 = [
    {
      value: "All status",
      label: "All status"
    }
  ]

  const history = [
    {
      time: "2025-06-20",
      type: "Top Up",
      quantity: "1000",
      state: "To be paid"
    },
    {
      time: "2025-06-20",
      type: "Top Up",
      quantity: "1000",
      state: "To be paid"
    },
    {
      time: "2025-06-20",
      type: "Top Up",
      quantity: "1000",
      state: "To be paid"
    },
    {
      time: "2025-06-20",
      type: "Top Up",
      quantity: "1000",
      state: "To be paid"
    },
    {
      time: "2025-06-20",
      type: "Top Up",
      quantity: "1000",
      state: "To be paid"
    },
    {
      time: "2025-06-20",
      type: "Top Up",
      quantity: "1000",
      state: "To be paid"
    },
    {
      time: "2025-06-20",
      type: "Top Up",
      quantity: "1000",
      state: "To be paid"
    },
    {
      time: "2025-06-20",
      type: "Top Up",
      quantity: "1000",
      state: "Recharge successful"
    },
  ]

  return (
    <div className=" [@media(max-width:660px)]:w-full flex flex-col gap-4">
      <p className="text-[18px] font-bold  text-white [@media(max-width:660px)]:hidden">
        Transaction
      </p>
      <div className="grid grid-cols-2 gap-4">
        <Dropdown 
          options={options1} 
          className="text-casper font-bold text-[14px] border-none" 
          value={selectedOption1}  
          onChange={setSelectedOption1}
        />
        <Dropdown 
          options={options2} 
          className="text-casper font-bold text-[14px] border-none" 
          value={selectedOption2}  
          onChange={setSelectedOption2}
        />
        <Dropdown 
          options={options3} 
          className="text-casper font-bold text-[14px] border-none" 
          value={selectedOption3}  
          onChange={setSelectedOption3}
        />
        <Dropdown 
          options={options4} 
          className="text-casper font-bold text-[14px] border-none" 
          value={selectedOption4}  
          onChange={setSelectedOption4}
        />
      </div>
      <div>
        <div className="grid h-[56px] border-b text-center   border-ebony-clay items-center grid-cols-4 gap-4 py-2 px-4 rounded-t-[8px] bg-mirage text-blue-bayoux text-[12px] font-bold">
          <span className="word-break">Time</span>
          <span className="word-break">Type</span>
          <span className="word-break text-center">Quantity</span>
          <span className="word-break text-center">State</span>
        </div>
        <div className="flex flex-col rounded-[8px] overflow-hidden">
          {
            history.map((item, index) => 
              <div key={index}  className={cn("grid text-[12px] h-12 items-center grid-cols-4 gap-4 py-2 px-4 font-bold", index % 2 === 0 ? "bg-white-4": "bg-white-8")}>
                <span className="text-white text-center font-bold ">{item.time}</span>
                <span className="text-white text-center font-medium ">{item.type}</span>
                <span className="text-white justify-center font-bold flex items-center gap-1">{item.quantity} <img src="/icons/coin-icon/USDT.svg" className="h-4 w-4"/></span>
                <span className={cn("font-bold   ", item.state.includes("success")?"text-malachite": "text-white")}>{item.state}</span>


              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Transaction;
