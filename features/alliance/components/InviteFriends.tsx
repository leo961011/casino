import React from "react";
import FAQ from "./FAQ";
import {  UnifiedButton } from "@/components/ui";
import FlatButton from "@/components/ui/Button/FlatButton";
import { CopyBox } from "@/components/ui/CopyBox";
import { TwitterIcon, X, XIcon, YoutubeIcon } from "lucide-react";
import BlackButton from "@/components/ui/Button/BlackButton";
import FacebookIcon from "@/components/ui/icons/FacebookIcon";
import InstagramIcon from "@/components/ui/icons/InstagramIcon";
import YouTubeIcon from "@/components/ui/icons/YouTubeIcon";
import DiscordIcon from "@/components/ui/icons/DiscordIcon";
import TikTokIcon from "@/components/ui/icons/TikTokIcon";
import TelegramIcon from "@/components/ui/icons/TelegramIcon";

const InviteFriends: React.FC = () => {
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
    <div className="flex-1 [@media(max-width:1024px)]:p-0">
      {/* Header Section */}
      <div className="mb-8 [@media(max-width:1024px)]:hidden">
        <h1 className="text-[1.125rem] font-bold text-white mb-6">
          Invite Friends
        </h1>
        <div className=" bg-[linear-gradient(170deg,#ED1D49_5%,#111923_90%)] rounded-[0.75rem] p-10  text-left h-[7.1875rem] relative overflow-hidden">
          <img src="/images/banner/invite-banner.png" className="w-[81%] h-full center absolute top-0 left-1/2 transform -translate-x-1/2  " alt="" />
          <span className="text-white text-[1.125rem] font-bold relative z-10">
            Invite friends
          </span>{" "}
        </div>
      </div>

      {/* Referral Section */}
      <div className="grid grid-cols-2 gap-6 mb-8 [@media(max-width:1500px)]:grid-cols-1">
        <div className="bg-[#FFFFFF0A] rounded-[0.75rem] p-5 ">
          <label className="block text-white text-[0.875rem] font-bold mb-3 ">
            Referral link
          </label>
          <div className="flex items-center gap-3">
            <CopyBox className="w-full bg-white-8 h-12">https://magic88.game/?AgentCode=330395</CopyBox>
          </div>
        </div>

        <div className="bg-[#FFFFFF0A] rounded-[0.75rem] p-5 ">
          <label className="block text-white text-sm font-bold mb-3">
            Referral code
          </label>
          <div className="flex items-center gap-3">
            <CopyBox className="w-full bg-white-8 h-12">330395</CopyBox>

          </div>
        </div>
      </div>

      {/* Share via Social Media and Statistics Section */}
      <div className="grid grid-cols-2 gap-6 mb-8 [@media(max-width:1500px)]:grid-cols-1">
        {/* Left Card: Share via Social Media */}
        <div className="bg-white-4 rounded-[0.75rem] p-5  [@media(max-width:375px)]:p-2">
          <h3 className="text-gray-300 text-[0.875rem] font-bold mb-4">
            Share via social media
          </h3>
          <div className=" flex justify-around">
           <BlackButton>
              <TelegramIcon color="#A7B5CA" className="w-4 h-4" />
           </BlackButton>
           <BlackButton>
              <FacebookIcon color="#A7B5CA" className="w-4 h-4" />
           </BlackButton>
           <BlackButton>
              <XIcon color="#A7B5CA" className="w-4 h-4"/>
           </BlackButton>
           <BlackButton>
              <InstagramIcon color="#A7B5CA" className="w-4 h-4"/>
           </BlackButton>
           <BlackButton>
              <YouTubeIcon color="#A7B5CA" className="w-4 h-4"/>
           </BlackButton>
           <BlackButton>
              <DiscordIcon color="#A7B5CA" className="w-4 h-4"/>
           </BlackButton>
           <BlackButton>
              <TikTokIcon color="#A7B5CA" className="w-4 h-4"/>
           </BlackButton>
            
          </div>
        </div>

        {/* Right Card: Statistics */}
        <div className="bg-white-4 rounded-[12px] p-5 ">
          <div className="grid grid-cols-2 gap-4">
            {/* Top Left */}
            <div className="text-center">
              <div className="text-[0.875rem] font-bold text-white mb-1">0</div>
              <div className="text-gray-300 text-[10px]">
                New direct
                <br /> subordinates
              </div>
            </div>
            {/* Top Right */}
            <div className="text-center">
              <div className="text-[0.875rem] font-bold text-white mb-1">0</div>
              <div className="text-gray-300 text-[10px]">
                Direct
                <br /> subordinates
              </div>
            </div>
            {/* Bottom Left */}
            <div className="text-center">
              <div className="text-[0.875rem] font-bold text-[#0C60FF] mb-1">
                0
              </div>
              <div className="text-gray-300 text-[10px]">New team member</div>
            </div>
            {/* Bottom Right */}
            <div className="text-center">
              <div className="text-[0.875rem] font-bold text-[#0C60FF] mb-1">
                0
              </div>
              <div className="text-gray-300 text-[10px]">
                Total team member
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Commission Rewards Section */}
      <div className="mb-8 bg-[#FFFFFF0A] rounded-[12px] p-5 ">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-[0.875rem] font-bold text-white">
            Commission Rewards
          </h3>
          <a
            href="#"
            className="text-[#2283F6] hover:underline font-bold text-[0.875rem]"
          >
            Details
          </a>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex justify-between w-full bg-[#FFFFFF14] rounded-[12px] p-2 pr-4 pl-4 ">
            <div className="flex items-center gap-3">
              <img src="/icons/coin-icon/USDT.svg" alt="coin w-6 h-6" />
              <span className="text-[12px] text-[#2283F6] font-bold">0</span>
            </div>
            <FlatButton className="px-6 py-3 text-[12px] font-bold">
              Claim
            </FlatButton>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <FAQ faqs={faqs} />
    </div>
  );
};

export default InviteFriends;
