import React, { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { Dropdown, Select } from "@/components/ui";
import { PiIcon } from "lucide-react";
import { DropdownSelect } from "@/components/ui/DropdownSelect";
import CopyIcon from "@/components/ui/icons/copy";
import InfoCircleIcon from "@/components/ui/icons/info-circle";
import TDButton from "@/components/ui/Button/TDButton";
import { CopyBox } from "@/components/ui/CopyBox";
import FlatButton from "@/components/ui/Button/FlatButton";



const Withdraw: React.FC = () => {
  const [selectedCurrencyType, setSelectedCurrencyType] = useState('Crypto');
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [selectedValue, setSelectedValue] = useState("usdt");
  const [selectedNetworkValue, setSelectedNetworkValue] = useState("trc");
  const [selectedCurrencyValue, setSelectedCurrencyValue] = useState("uah");



  const currencyOptions = [
    { value: "usdt", label: "USDT", icon: <img src="/icons/coin-icon/USDT.svg" /> },
  ];

  const currencyOptions1 = [
    { value: "uah", label: "UAH", icon: <img src="/icons/flag-icon/ua.svg" className="h-6 rounded-[0.25rem]" /> },
  ];

  const networkOptions = [
    { value: "trc", label: "TRC20", icon: <img src="/icons/coin-icon/TRX.svg" /> },
  ];

  useEffect(() => {
    const sub = searchParams.get('sub');
    if (sub === 'crypto') setSelectedCurrencyType('Crypto');
    if (sub === 'fiat') setSelectedCurrencyType('Fiat');
  }, [searchParams]);

  const handleCurrencyTypeClick = (gameType: string) => {
    setSelectedCurrencyType(gameType);
    const params = new URLSearchParams(searchParams.toString());
    const value = gameType === 'Crypto' ? 'crypto' : 'fiat';
    params.set('sub', value);
    router.replace(`${pathname}?${params.toString()}`);
  };

  const paymentMethods = [
    {
      icon: "/images/wallets/visa.png",
      alt: "visa",
    },
    {
      icon: "/images/wallets/apay.png",
      alt: "Apple Pay",
    },
    {
      icon: "/images/wallets/mc.png",
      alt: "mc",
    },
    {
      icon: "/images/wallets/gpay.png",
      alt: "gpay",
    },
  ];




  return (
    <div className=" [@media(max-width:660px)]:w-full">
      <div className="w-full flex flex-col gap-4 space-y-4">
        {/* Withdraw Header */}
        <h1 className="text-lg sm:text-xl hidden lg:block font-bold text-white">
          {
            selectedCurrencyType === "Crypto" ? "Crypto": "To replenish"
          }
          </h1>
        <div className="grid grid-cols-2 gap-4 bg-white-4 rounded-[0.75rem] overflow-hidden p-1 h-11">
          {
            ["Crypto", "Fiat"].map((item, index) => <button className={cn("text-[0.875rem] font-bold rounded-[0.5rem] overflow-hidden text-center", selectedCurrencyType === item ? "bg-white-13 text-gallery" : "text-casper")} onClick={() => handleCurrencyTypeClick(item)}>{item}</button>)
          }
        </div>

        {
          selectedCurrencyType === "Crypto" ? (
            <>
              <div className="grid grid-cols-2 gap-4 rounded-[0.75rem] ">
                <DropdownSelect
                  label="Currency"
                  value={selectedValue}
                  options={currencyOptions}
                  onChange={setSelectedValue}
                />
                <DropdownSelect
                  label="Network"
                  value={selectedNetworkValue}
                  options={networkOptions}
                  onChange={setSelectedNetworkValue}
                />

              </div>
              <div className="rounded-[0.75rem] bg-white-4 flex flex-col gap-4">
                <div className="flex justify-between"></div>
              </div>

              <div className="p-4 flex gap-4 rounded-[0.75rem] bg-white-4 flex-col">
                
                  <h2 className="font-bold text-[0.875rem] text-white flex items-center justify-between indent-[1.25rem]">Wallet Address <span className="text-dodger-blue">Address book</span></h2>
                  <CopyBox className="bg-white-8">
                    <span className="text-casper font-bold break-all p-4 text-[0.75rem]"><span className="text-dodger-blue">TXS3</span>PfAU9hemKkoBWRUfsUkGBSrZGa<span className="text-dodger-blue">gh6X</span></span>
                  </CopyBox>
                  
              </div>

              <div className="p-4 flex gap-4 rounded-[0.75rem] bg-white-4 flex-col">
                
                  <h2 className="font-bold text-[0.875rem] text-white flex items-center justify-between indent-[1.25rem]">Withdrawal account<span >Minimum <span className="text-crimson">1 USDT</span></span></h2>
                  <div className="px-4 h-[47px] flex items-center bg-white-8 rounded-[0.5rem] text-casper font-bold text-[0.75rem]">
                        0
                  </div>
                  <div className="grid grid-cols-4 h-[47px] items-center  gap-4 font-bold text-[0.75rem]">
                      <div className=" text-casper text-[0.75rem] font-bold h-full flex items-center justify-center  bg-white-8 rounded-[0.5rem]">Lowest</div>
                      <div className=" text-casper text-[0.75rem] font-bold h-full flex items-center justify-center  bg-white-8 rounded-[0.5rem]">25%</div>
                      <div className=" text-casper text-[0.75rem] font-bold h-full flex items-center justify-center  bg-white-8 rounded-[0.5rem]">50%</div>
                      <div className="text-casper text-[0.75rem] font-bold  h-full flex items-center justify-center bg-white-8 rounded-[0.5rem]">Highest</div>
                  </div>
                  
              </div>

                <div className="">
                  <span className="font-middle text-casper h-[47px] flex border-b border-white-8 items-center gap-1">
                    Available <span className="font-bold text-white">   0.150263 USDT</span>
                  </span>
                  <div className="flex justify-between py-2 items-center">
                    <span className="text-dodger-blue font-medium text-[0.75rem]">Withdraw  amount</span>
                    <span className="text-dodger-blue font-bold text-[0.75rem]">0 USDT</span>
                  </div>
                  <div className="flex justify-between py-2 items-center">
                    <span className="text-casper font-medium text-[0.75rem] flex items-center gap-1">Handing fee: <InfoCircleIcon className="w-6 h-6" /></span>
                    <span className="text-white font-bold text-[0.75rem]">0 USDT</span>
                  </div>
                  <div className="flex justify-between py-2 items-center">
                    <span className="text-casper font-medium text-[0.75rem]">Withdraw  amount</span>
                    <span className="text-white font-bold text-[0.75rem]">0 USDT</span>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <FlatButton className="h-9 w-full text-[0.75rem] font-bold text-gallery">
                  Withdraw money
                </FlatButton>
                <div className="font-medium text-[0.875rem] flex gap-2 text-white items-center">
                  <InfoCircleIcon className="h-6 w-6" color="#1BB83D" />
                  Please set a fund password
                </div>

                <div className="p-4  rounded-[0.75rem] items-center font-medium text-[0.875rem]  text-white bg-[#1BB83D21]">
                    For security reasons, larger or suspicious withdrawals may take 1-6 hours to review. Thank you for your patience!
                </div>
                </div>

            </>
          ) : (
            <>
              <DropdownSelect 
                  label="Currency"
                  value={selectedCurrencyValue}
                  options={currencyOptions1}
                  onChange={setSelectedCurrencyValue} 
              />
              <div className="rounded-[0.75rem] overflow-hidden p-4 bg-white-4 flex flex-col gap-4">
                <h2 className="text-[0.875rem] font-bold text-white">Replenishment method</h2>
                <div className="bg-mirage rounded-[0.75rem] h-[48px] p-[6px] grid items-center  grid-cols-[auto_auto_56px] pl-2">
                      <div className="flex justify-center items-center">
                        <img src="/images/wallets/transak.png" alt="transak" className="h-6" />
                      </div>
                      <div className="font-medium text-[0.75rem] text-dodger-blue">Transak</div>
                      <div className="text-polo-blue text-[0.75rem] font-bold">
                        10-99999
                      </div>
                </div>
              </div>
              <div className="rounded-[0.75rem] overflow-hidden p-4 bg-white-4 flex flex-col gap-2">
                <h2 className="text-[0.875rem] text-gallery font-bold">
                    No cryptocurrency?
                </h2>
                <p className="text-[0.875rem] text-casper">
                  Follow these simple steps and the funds will be automatically transferred to your wallet as shown below.
                </p>
              </div>
              <div className="rounded-[0.75rem] overflow-hidden p-4 bg-white-4 flex flex-col gap-4">
                <h2 className="text-[0.875rem] text-gallery font-bold">
                    Networks
                </h2>
                <div className="rounded-[0.75rem] overflow-hidden bg-white-8 p-1 flex justify-between">
                  <div className="h-9 w-[148px] px-3 bg-white-13 rounded-[0.75rem] items-center gap-2 flex">
                    <img src="/icons/coin-icon/USDT.svg" className="h-6 w-6" alt="usdt" />
                    <span className="text-[0.875rem] font-bold text-gallery">Tether</span>
                    <span className="text-[0.875rem] font-bold text-casper">USDT</span>
                  </div>
                  <div className="flex justify-end  font-bold text-[0.875rem] text-white uppercase items-center">tron</div>
                </div>
              </div>
              <div className="rounded-[0.75rem] overflow-hidden p-4 bg-white-4 flex flex-col gap-4">
                <h2 className="text-[0.875rem] text-gallery font-bold">
                    Purchase amount
                </h2>
                <div className="rounded-[0.75rem] overflow-hidden bg-white-8 p-1 flex justify-between">
                  <div className="h-9  px-3 bg-white-13 rounded-[0.75rem] items-center gap-2 flex">
                    <img src="/icons/coin-icon/USDT.svg" className="h-6 w-6" alt="usdt" />
                    <span className="text-[0.875rem] font-bold text-gallery">0</span>
                  </div>
                  <div className="flex justify-end  font-bold text-[0.875rem] text-white gap-1 items-center">pay <span className="text-malachite">+0</span></div>
                </div>
              </div>
              <div className="flex gap-2 font-medium text-white text-[0.875rem] py-4">
                Minimum purchase amount <span className="text-dodger-blue">10 USDT</span>
              </div>
              <TDButton onClick={() => {}} className="h-[41px] w-full text-[0.875rem] text-gallery" type="blue">Top up now</TDButton>
              <div className="flex gap-4 justify-center items-center">
                {
                  paymentMethods.map(paymentMethod => (
                    <img src={paymentMethod.icon} className="lg:h-8 h-[25.5px]" alt="payment" />
                  )
                )
                }
              </div>
            </>
          )
        }
      </div>

    </div>
  );
};

export default Withdraw;
