"use client";

import React, { useEffect, useMemo, useState, Suspense } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import UserSquareIcon from "@/components/ui/icons/user-square";
import FingerprintIcon from "@/components/ui/icons/fingerprint";
import WalletIcon from "@/components/ui/icons/wallet";
import ChecklistIcon from "@/components/ui/icons/checklist";
import AccountInfo from "@/features/settings/components/AccountInfo";
import Security from "@/features/settings/components/Security";
import WalletAdd from "@/features/settings/components/WalletAdd";
import Barrier from "@/features/settings/components/Barrier";
import ChevronDownIcon from "@/components/ui/icons/chevron-down";
import SettingsTabModal from "@/components/modals/SettingsTabModal";

function SettingsPageContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tabSlugToName = useMemo(
    () =>
      ({
        accountinfo: "Account information",
        security: "Security",
        wallet: "Wallet Address",
      } as const),
    []
  );

  const tabNameToSlug = useMemo(
    () =>
      ({
        "Account information": "accountinfo",
        Security: "security",
        "Wallet Address": "wallet",
      } as const),
    []
  );

  const [activeTab, setActiveTab] = useState<string>("Account information");

  useEffect(() => {
    const fromQuery = searchParams.get("tab");
    if (fromQuery && tabSlugToName[fromQuery as keyof typeof tabSlugToName]) {
      setActiveTab(tabSlugToName[fromQuery as keyof typeof tabSlugToName]);
    }
  }, [searchParams, tabSlugToName]);

  useEffect(() => {
    console.log('Active tab changed to:', activeTab);
  }, [activeTab]);

  const updateQuery = (nextTabName: string) => {
    const slug = tabNameToSlug[nextTabName as keyof typeof tabNameToSlug];
    if (slug) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("tab", slug);
      router.replace(`${pathname}?${params.toString()}`);
    }
  };

  const handleTabSelect = (tabName: string) => {
    console.log('Tab selected:', tabName);
    setActiveTab(tabName);
    updateQuery(tabName);
  };

  const navigationItems = [
    { name: "Account information", icon: (<UserSquareIcon className="w-6 h-6" />) },
    { name: "Security", icon: (<FingerprintIcon className="w-6 h-6" />) },
    { name: "Wallet Address", icon: (<WalletIcon className="w-6 h-6" />) },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "Account information":
        return <AccountInfo />;
      case "Security":
        return <Security />;
      case "Wallet Address":
        return <WalletAdd />;
      default:
        return <AccountInfo />;
    }
  };


  return (
    <>
      <div className="flex flex-col w-[70%] max-w-[120rem] [@media(max-width:1444px)]:w-[100%] gap-16 lg:py-6 mx-auto justify-between pb-20 lg:pb-8">
        {/* Left Sidebar Navigation */}
        <div className="md:bg-[#FFFFFF0A] rounded-lg h-full px-4 py-1 w-full ">
          <div className=" grid-cols-3 hidden md:grid p-3 gap-3">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleTabSelect(item.name)}
                className={`w-full flex items-center gap-3 px-4 py-3  rounded-lg transition-all duration-200 ${
                  activeTab === item.name
                    ? "bg-[#FFFFFF14] text-white shadow-lg"
                    : "text-gray-300 hover:bg-[rgba(255,255,255,0.08)]"
                }`}
              >
                {item.icon}
                <span className="font-bold text-[0.875rem]">{item.name}</span>
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-4 md:hidden ">
            <button 
              onClick={() => setIsModalOpen(true)} 
              className="flex justify-between items-center text-casper bg-white-4 rounded-[0.5rem] text-[0.875rem] font-bold h-12 px-4 hover:bg-white-8 transition-colors"
            >
              <span><span>{activeTab}</span></span>
              <ChevronDownIcon />
            </button>
          </div>
        </div>

        {/* Right Content Area */}
        <div key={activeTab} className="flex-1 lg:bg-white-4 p-4 pt-[1.375rem] rounded-[0.75rem]">
          {renderContent()}
        </div>
      </div>
      
      {/* Settings Tab Modal */}
      <SettingsTabModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        activeTab={activeTab}
        onTabSelect={handleTabSelect}
      />
    </>
  );
}

// Wrapper component with Suspense boundary
export default function AllianceClient() {
  return (
    <Suspense fallback={<div>Loading settings...</div>}>
      <SettingsPageContent />
    </Suspense>
  );
}
