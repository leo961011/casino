import React, { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { DropdownSelect } from "@/components/ui/DropdownSelect";
import CopyIcon from "@/components/ui/icons/copy";
import InfoCircleIcon from "@/components/ui/icons/info-circle";
import TDButton from "@/components/ui/Button/TDButton";



const Deposit: React.FC = () => {
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
    { value: "uah", label: "UAH", icon: <img src="/icons/flag-icon/ua.svg" className="h-6 rounded-[4px]" /> },
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
        {/* Deposit Header */}
        <h1 className="text-lg sm:text-xl font-bold text-white hidden lg:block">
          {
            selectedCurrencyType === "Crypto" ? "Deposit": "To replenish"
          }
          </h1>
        <div className="grid grid-cols-2 gap-4 bg-white-4 rounded-[12px] overflow-hidden p-1 h-11">
          {
            ["Crypto", "Fiat"].map((item, index) => <button className={cn("text-[14px] font-bold rounded-[8px] overflow-hidden text-center", selectedCurrencyType === item ? "bg-white-13 text-gallery" : "text-casper")} onClick={() => handleCurrencyTypeClick(item)}>{item}</button>)
          }
        </div>

        {
          selectedCurrencyType === "Crypto" ? (
            <>
              <div className="grid grid-cols-2 gap-4 rounded-[12px] ">
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

              <div className="p-4 flex gap-4 rounded-[12px] bg-white-4">
                <div className="bg-white rounded-[8px] p-2">
                  <img src="images/qr.png" className="h-[125px] w-[124.77px]" alt="qr" />
                </div>
                <div className="flex flex-col justify-between w-full">
                  <h2 className="font-bold text-[14px] text-white indent-[20px]">Wallet Address</h2>
                  <div className="bg-white-8 rounded-[8px] w-full h-[62px] flex justify-center items-center">
                    <span className="text-casper font-bold break-all p-4 text-[12px]"><span className="text-dodger-blue">TXS3</span>PfAU9hemKkoBWRUfsUkGBSrZGa<span className="text-dodger-blue">gh6X</span></span>
                  </div>
                  <div className="flex bg-white-13 justify-center text-casper text-[14px] font-bold items-center rounded-[12px] gap-1 h-[48px] w-full">
                    <CopyIcon />
                    <span>Copy Address</span>
                  </div>
                </div>
              </div>
              <div className="p-4 flex gap-2 rounded-[12px] items-center bg-[#1BB83D21] pl-2">
                <InfoCircleIcon className="h-6 w-6" color="#1BB83D" />
                <p className="font-medium text-[14px] w-[90%] text-white">
                  Please only send USDT to this address. Transfer amounts less than 1
                  USDT will not be received.
                </p>
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
              <div className="rounded-[12px] overflow-hidden p-4 bg-white-4 flex flex-col gap-4">
                <h2 className="text-[14px] font-bold text-white">Replenishment method</h2>
                <div className="bg-mirage rounded-[12px] h-[48px] p-[6px] grid items-center  grid-cols-[auto_auto_56px] pl-2">
                      <div className="flex justify-center items-center">
                        <img src="/images/wallets/transak.png" alt="transak" className="h-6" />
                      </div>
                      <div className="font-medium text-[12px] text-dodger-blue">Transak</div>
                      <div className="text-polo-blue text-[12px] font-bold">
                        10-99999
                      </div>
                </div>
              </div>
              <div className="rounded-[12px] overflow-hidden p-4 bg-white-4 flex flex-col gap-2">
                <h2 className="text-[14px] text-gallery font-bold">
                    No cryptocurrency?
                </h2>
                <p className="text-[14px] text-casper">
                  Follow these simple steps and the funds will be automatically transferred to your wallet as shown below.
                </p>
              </div>
              <div className="rounded-[12px] overflow-hidden p-4 bg-white-4 flex flex-col gap-4">
                <h2 className="text-[14px] text-gallery font-bold">
                    Networks
                </h2>
                <div className="rounded-[12px] overflow-hidden bg-white-8 p-1 flex justify-between">
                  <div className="h-9 w-[148px] px-3 bg-white-13 rounded-[12px] items-center gap-2 flex">
                    <img src="/icons/coin-icon/USDT.svg" className="h-6 w-6" alt="usdt" />
                    <span className="text-[14px] font-bold text-gallery">Tether</span>
                    <span className="text-[14px] font-bold text-casper">USDT</span>
                  </div>
                  <div className="flex justify-end  font-bold text-[14px] text-white uppercase items-center">tron</div>
                </div>
              </div>
              <div className="rounded-[12px] overflow-hidden p-4 bg-white-4 flex flex-col gap-4">
                <h2 className="text-[14px] text-gallery font-bold">
                    Purchase amount
                </h2>
                <div className="rounded-[12px] overflow-hidden bg-white-8 p-1 flex justify-between">
                  <div className="h-9  px-3 bg-white-13 rounded-[12px] items-center gap-2 flex">
                    <img src="/icons/coin-icon/USDT.svg" className="h-6 w-6" alt="usdt" />
                    <span className="text-[14px] font-bold text-gallery">0</span>
                  </div>
                  <div className="flex justify-end  font-bold text-[14px] text-white gap-1 items-center">pay <span className="text-malachite">+0</span></div>
                </div>
              </div>
              <div className="flex gap-2 font-medium text-white text-[14px] py-4">
                Minimum purchase amount <span className="text-dodger-blue">10 USDT</span>
              </div>
              <TDButton onClick={() => {}} className="h-[41px] w-full text-[14px] text-gallery" type="blue">Top up now</TDButton>
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

export default Deposit;
