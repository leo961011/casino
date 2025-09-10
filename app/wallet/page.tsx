"use client";

import React, { useEffect, useMemo, useState, Suspense } from "react";
import InviteFriends from "@/features/alliance/components/InviteFriends";
import Management from "@/features/alliance/components/Management";
import Performance from "@/features/alliance/components/Performance";
import Report from "@/features/alliance/components/Report";
import Introduction from "@/features/alliance/components/Introduction";
import AllianceBottomBar from "@/features/alliance/components/AllianceBottomBar";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Deposit from "@/features/wallet/components/Deposit";
import Withdraw from "@/features/wallet/components/Withdraw";
import Swap from "@/features/wallet/components/Swap";
import Transaction from "@/features/wallet/components/Transaction";
import GameHistory from "@/features/wallet/components/GameHistory";
import DataStatistics from "@/features/wallet/components/DataStatistics";
import CurrencyNotesIcon from "@/components/ui/icons/currency-notes";
import PrintDollarIcon from "@/components/ui/icons/print-dollar";
import SwapDiagonalIcon from "@/components/ui/icons/swap-diagonal";
import ReceiptIcon from "@/components/ui/icons/receipt";
import MedalStarAlt2Icon from "@/components/ui/icons/medal-star-alt-2";
import DoughnutChartIcon from "@/components/ui/icons/doughnut-chart";
import WalletBottomBar from "@/features/wallet/components/WalletBottomBar";

function WalletPageContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const tabSlugToName = useMemo(
    () =>
      ({
        deposit: "Deposit",
        withdraw: "Withdraw",
        swap: "Swap",
        transaction: "Transaction",
        gamehistory: "GameHistory",
        datastatistics: "Datastatistics",
      } as const),
    []
  );

  const tabNameToSlug = useMemo(
    () =>
      ({
        Deposit: "deposit",
        Withdraw: "withdraw",
        Swap: "swap",
        Transaction: "transaction",
        GameHistory: "gamehistory",
        Datastatistics: "datastatistics",
      } as const),
    []
  );

  const [activeTab, setActiveTab] = useState<string>("Deposit");

  useEffect(() => {
    const fromQuery = searchParams.get("tab");
    if (fromQuery && tabSlugToName[fromQuery as keyof typeof tabSlugToName]) {
      setActiveTab(tabSlugToName[fromQuery as keyof typeof tabSlugToName]);
    }
  }, [searchParams, tabSlugToName]);

  const updateQuery = (nextTabName: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", tabNameToSlug[nextTabName as keyof typeof tabNameToSlug]);
    router.replace(`${pathname}?${params.toString()}`);
  };

  const navigationItems = [
    { name: "Deposit", icon: (<CurrencyNotesIcon className="w-6 h-6" />) },
    { name: "Withdraw", icon: (<PrintDollarIcon className="w-6 h-6"/>) },
    { name: "Swap", icon: (<SwapDiagonalIcon className="w-6 h-6"/>) },
    { name: "Transaction", icon: (<ReceiptIcon className="w-6 h-6"/>) },
    { name: "GameHistory", icon: (<MedalStarAlt2Icon className="w-6 h-6"/>) },
    { name: "Datastatistics", icon: (<DoughnutChartIcon className="w-6 h-6"/>) },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "Deposit":
        return <Deposit />;
      case "Withdraw":
        return <Withdraw />;
      case "Swap":
        return <Swap />;
      case "Transaction":
        return <Transaction />;
      case "GameHistory":
        return <GameHistory />;
      case "DataStatistics":
        return <DataStatistics />;
      default:
        return <Deposit />;
    }
  };

  return (
    <>
      <div className="flex flex-col 2xl:w-[70%] w-full lg:w-[97%] max-w-[120rem]  gap-16 lg:py-6 mx-auto justify-between pb-20 lg:pb-8">
        {/* Left Sidebar Navigation */}
        <div className="bg-[#FFFFFF0A] rounded-lg h-full [@media(max-width:1024px)]:hidden w-full ">
          <div className="flex p-3 gap-1 justify-between">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  setActiveTab(item.name);
                  updateQuery(item.name);
                }}
                className={`w-fit flex items-center gap-1 p-2  rounded-lg transition-all duration-200 ${
                  activeTab === item.name
                    ? "bg-[#FFFFFF14] text-white shadow-lg"
                    : "text-gray-300 hover:bg-[rgba(255,255,255,0.08)]"
                }`}
              >
                { item.icon }
                <span className="font-bold text-[0.875rem]">{item.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Content Area */}
        <div className="flex-1 lg:bg-white-4 p-4 rounded-[12px]">{renderContent()}</div>
      </div>
      
      {/* Mobile Bottom Navigation */}
      <WalletBottomBar />
    </>
  );
}

// Wrapper component with Suspense boundary
export default function WalletPage() {
  return (
    <Suspense fallback={<div>Loading wallet...</div>}>
      <WalletPageContent />
    </Suspense>
  );
}
