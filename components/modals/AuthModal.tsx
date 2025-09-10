"use client";

import { useEffect, useState } from "react";
import { setAuthUser } from "@/lib/auth";
import { X, Eye, EyeOff, ChevronDown } from "lucide-react";
import { useSidebar } from "../../context/SidebarProvider";
import { cn } from "@/lib/utils";
import { useModalScrollPrevention } from "@/hooks/useModalScrollPrevention";

import './style.css';
import TDButton from "../ui/Button/TDButton";
import TonIcon from "../ui/icons/TONIcon";
import GoogleIcon from "../ui/icons/GoogleIcon";
import MetamaskIcon from "../ui/icons/MetamaskIcon";
import TelegramIcon from "../ui/icons/TelegramIcon";

interface SocialButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
}


const SocialButton = ({ icon, onClick }: SocialButtonProps) => (
  <button
    onClick={onClick}
    className="flex h-9 w-9 items-center justify-center text-casper rounded-lg bg-white-4 backdrop-blur-[32px] transition-colors hover:bg-white-8"
    style={{
      boxShadow: "0 1px 0 0 rgba(255, 255, 255, 0.16) inset",
    }}
  >
    {icon}
  </button>
);




const TrustWalletIcon = () => (
  <svg width="25" height="24" viewBox="0 0 16 16" fill="none">
    <path
      d="M7.5 14.5554C3.51622 12.6038 1.9815 9.29679 1.98145 7.51141V3.14716L7.5 1.35419V14.5554Z"
      fill="#A7B5CA"
      stroke="#A7B5CA"
    />
    <g style={{ mixBlendMode: "luminosity" }}>
      <path
        d="M14.5184 2.78533L8 0.666687V15.3334C12.656 13.3776 14.5184 9.6295 14.5184 7.51131V2.78533Z"
        fill="url(#paint0_linear_trust)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_trust"
        x1="12.7869"
        y1="-0.360368"
        x2="7.86282"
        y2="15.133"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B1B9C3" />
        <stop offset="1" stopColor="#171F29" />
      </linearGradient>
    </defs>
  </svg>
);

export default function AuthModal() {
  const { isAuthModalOpen, toggleAuthModal } = useSidebar();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("password123");
  const [referralCode, setReferralCode] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(true);
  const [agreedToNotifications, setAgreedToNotifications] = useState(true);
  const [showReferral, setShowReferral] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useModalScrollPrevention(isAuthModalOpen);

  const login = () => {
    if(email === "dev.com@gmail.com" && password === "123") {
      setAuthUser(email);
    }
    toggleAuthModal();
  };

  const register = () => {
    console.log("register");
    toggleAuthModal();
  };

  useEffect(() => {
    if (isAuthModalOpen) {
      setShouldRender(true);
      const timer = setTimeout(() => setIsVisible(true), 10);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
      const timer = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isAuthModalOpen]);

  if (!shouldRender) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center overflow-hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#0D131C]/73" />

      {/* Modal */}
      <div className={cn(
        "relative w-full max-w-[740px] h-full max-h-screen flex justify-center items-center modal-content-scroll transform transition-all duration-300 ease-out",
        isVisible ? "translate-y-0" : "translate-y-full sm:translate-y-8"
      )}>
        {/* Desktop Layout */}
        <div className="hidden lg:flex w-full h-[670px] rounded-[14px] overflow-hidden bg-[#111923]/54 backdrop-blur-[32px] modal-content-scroll">
          {/* Left Side - Branding */}
          <div className="flex-1 relative">
            {/* Background Image with Gradient Overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#111923]"
              style={{
                backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/1966099a1a2c23b6a4509e98b3ec5376765f2b13?width=740')",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#111923]/90" />

            {/* Bull Character and Text */}
            <div className="relative z-10 flex flex-col items-center justify-between h-full p-8 pt-16">
              {/* Logo/3D Character placeholder */}
              <div className="w-[115px] h-14 rounded-lg flex items-center justify-center">
              </div>

              {/* Welcome Text */}
              <div className="text-center">
                <h1 className="font-black text-[32px] text-[#EDEDED] leading-none mb-2">
                  WELCOME
                </h1>
                <h2 className="font-black text-[32px] text-[#EDEDED] leading-none mb-2">
                  BONUS
                </h2>
                <h3 className="font-black text-[32px] text-[#EDEDED] leading-none mb-4">
                  UP TO 590%
                </h3>
                <p className="text-[#A7B5CA] text-base font-medium">
                  + 225 Free Spins
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="flex-1 flex flex-col p-6">
            {/* Close Button */}
            <div className="flex justify-end mb-6">
              <button
                onClick={toggleAuthModal}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white-4 bg-white-4 backdrop-blur-[32px] hover:bg-white-8 transition-colors"
                style={{
                  boxShadow: "0 1px 0 0 rgba(255, 255, 255, 0.16) inset",
                }}
              >
                <X size={16} className="text-[#A7B5CA]" />
              </button>
            </div>

            {/* Tab Switcher */}
            <div className="flex rounded-xl p-1 mb-6">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-4 px-3 text-sm font-bold transition-colors ${isLogin
                    ? "text-[#EDEDED] border-b-2 border-[#2283F6]"
                    : "text-[#A7B5CA]"
                  }`}
              >
                Log In
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-4 px-3 text-sm font-bold transition-colors ${!isLogin
                    ? "text-[#EDEDED] border-b-2 border-[#2283F6]"
                    : "text-[#A7B5CA]"
                  }`}
              >
                Registration
              </button>
            </div>

            {/* Form */}
            <div className="flex-1 flex flex-col">
              {/* Email Input */}
              <div className="mb-4">
                <div className="relative">
                  <div className="absolute -top-2 left-2 z-10 px-1 bg-gradient-to-b from-[#111923] to-[#0D131C]">
                    <span className="text-xs text-[#93ACD3]">Username / email</span>
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your username or email"
                    className="w-full h-12 px-4 pt-2 bg-[#0D131C] border border-[#55657E] rounded-xl text-white placeholder-[#55657E] text-sm focus:border-[#2283F6] focus:outline-none"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="mb-4">
                <div className="relative">
                  <div className="absolute -top-2 left-2 z-10 px-1 bg-gradient-to-b from-[#111923] to-[#0D131C]">
                    <span className="text-xs text-[#93ACD3]">Password</span>
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={!isLogin && password ? "✱ ✱ ✱ ✱ ✱ ✱ ✱ ✱" : "Enter your password"}
                    className={`w-full h-12 px-4 pt-2 pr-12 bg-[#0D131C] rounded-xl text-sm focus:outline-none ${!isLogin && password
                        ? "border-2 border-[#2283F6] text-white"
                        : "border border-[#55657E] text-white placeholder-[#55657E]"
                      }`}
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? (
                      <Eye size={20} className="text-[#55657E]" />
                    ) : (
                      <EyeOff size={20} className="text-[#55657E]" />
                    )}
                  </button>
                </div>
              </div>

              {/* Forgot Password / Referral Code */}
              {isLogin ? (
                <div className="mb-6">
                  <button className="text-[#2283F6] text-sm font-bold">
                    Forget the password
                  </button>
                </div>
              ) : (
                <div className="mb-4">
                  <button
                    onClick={() => setShowReferral(!showReferral)}
                    className="flex items-center text-[#2283F6] text-sm font-bold"
                  >
                    Referral code/discount code
                    <ChevronDown size={20} className="ml-1" />
                  </button>
                  {showReferral && (
                    <input
                      type="text"
                      value={referralCode}
                      onChange={(e) => setReferralCode(e.target.value)}
                      placeholder="Enter referral code"
                      className="w-full h-12 px-4 mt-2 bg-[#0D131C] border border-[#55657E] rounded-xl text-white placeholder-[#55657E] text-sm focus:border-[#2283F6] focus:outline-none"
                    />
                  )}
                </div>
              )}

              {/* Registration Checkboxes */}
              {!isLogin && (
                <div className="mb-6 space-y-2">
                  <label className="flex items-start gap-3">
                    <div className="relative mt-0.5">
                      <input
                        type="checkbox"
                        checked={agreedToTerms}
                        onChange={(e) => setAgreedToTerms(e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${agreedToTerms
                          ? "bg-[#2283F6] border-[#2283F6]"
                          : "border-[#55657E] bg-transparent"
                        }`}>
                        {agreedToTerms && (
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="text-xs text-[#A7B5CA]">
                      I agree to the{" "}
                      <span className="text-[#2283F6]">"User Agreement"</span>{" "}
                      and confirm that I am over 18 years old
                    </span>
                  </label>

                  <label className="flex items-start gap-3">
                    <div className="relative mt-0.5">
                      <input
                        type="checkbox"
                        checked={agreedToNotifications}
                        onChange={(e) => setAgreedToNotifications(e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${agreedToNotifications
                          ? "bg-[#2283F6] border-[#2283F6]"
                          : "border-[#55657E] bg-transparent"
                        }`}>
                        {agreedToNotifications && (
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="text-xs text-[#A7B5CA]">
                      I agree to receive promotional notifications from{" "}
                      <span className="text-[#2283F6]">ok777.casino</span>
                    </span>
                  </label>
                </div>
              )}

              {/* Submit Button */}
              <TDButton onClick={isLogin ? login : register} type="red" className="w-full h-11 text-[14px] font-bold text-white">
                {isLogin ? "LOG IN" : "REGISTER"}
              </TDButton>

              {/* Spacer */}
              <div className="flex-1" />

              {/* Social Login */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-px bg-[#3C485C]" />
                  <span className="text-sm text-[#A7B5CA]">Log in using</span>
                  <div className="flex-1 h-px bg-[#3C485C]" />
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                  <SocialButton icon={<GoogleIcon />} />
                  <SocialButton icon={<TelegramIcon />} />
                  <SocialButton icon={<MetamaskIcon />} />
                  <SocialButton icon={<TonIcon />} />
                  
                  <SocialButton icon={<TrustWalletIcon />} />
                  <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-white-4 backdrop-blur-[32px] text-[#A7B5CA] text-xs font-bold">
                    +3
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden animation-fade-in absolute top-0 h-full w-full max-w-md mx-auto bg-[#111923]" style={{ WebkitOverflowScrolling: "touch" }}>
          {/* Blue Gradient Background */}
          <div className="relative">
            <div
              className="w-full h-80 bg-gradient-to-b from-[#003A81] to-[#111923]"
              style={{
                filter: "blur(175px)",
                position: "absolute",
                top: 0,
                left: 0,
                transform: "scale(1.5)",
              }}
            />

            {/* Hero Image */}
            <div className="relative h-[312.32px] overflow-hidden">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/e46eb9b989312e0dd83d423e4baeabe941ec23dd?width=804"
                alt="Casino"
                className="w-full h-full object-fill"
              />

              {/* Close Button */}
              <button
                onClick={toggleAuthModal}
                className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-lg border border-white-4 bg-white-4 backdrop-blur-[32px] hover:bg-white-8 transition-colors"
                style={{
                  boxShadow: "0 1px 0 0 rgba(255, 255, 255, 0.16) inset",
                }}
              >
                <X size={16} className="text-[#A7B5CA]" />
              </button>
            </div>
          </div>

          {/* Form Section */}
          <div className="px-4 pb-8 space-y-6 relative flex flex-col justify-between bg-[#111923]">
            <div className="flex flex-col gap-[24px]">
              {/* Tab Switcher */}
              <div className="flex rounded-xl p-1">
                <button
                  onClick={() => setIsLogin(true)}
                  className={`flex-1 py-4 px-3 text-sm font-bold transition-colors ${isLogin
                      ? "text-[#EDEDED] border-b-2 border-[#2283F6]"
                      : "text-[#A7B5CA]"
                    }`}
                >
                  Log In
                </button>
                <button
                  onClick={() => setIsLogin(false)}
                  className={`flex-1 py-4 px-3 text-sm font-bold transition-colors ${!isLogin
                      ? "text-[#EDEDED] border-b-2 border-[#2283F6]"
                      : "text-[#A7B5CA]"
                    }`}
                >
                  Registration
                </button>
              </div>

              {/* Email Input */}
              <div className="relative">
                <div className="absolute -top-2 left-2 z-10 px-1 bg-gradient-to-b from-[#111923] to-[#0D131C]">
                  <span className="text-xs text-[#93ACD3]">Username / email</span>
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your username or email."
                  className="w-full h-12 px-4 pt-2 bg-[#0D131C] border border-[#55657E] rounded-xl text-white placeholder-[#55657E] text-sm focus:border-[#2283F6] focus:outline-none"
                />
              </div>

              {/* Password Input */}
              <div className="relative">
                <div className="absolute -top-2 left-2 z-10 px-1 bg-gradient-to-b from-[#111923] to-[#0D131C]">
                  <span className="text-xs text-[#93ACD3]">Password</span>
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={!isLogin && password ? "✱ ✱ ✱ ✱ ✱ ✱ ✱ ✱" : "Enter your password"}
                  className={`w-full h-12 px-4 pt-2 pr-12 bg-[#0D131C] rounded-xl text-sm focus:outline-none ${!isLogin && password
                      ? "border-2 border-[#2283F6] text-white"
                      : "border border-[#55657E] text-white placeholder-[#55657E]"
                    }`}
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                  <EyeOff size={20} className="text-white" />
                </button>
              </div>

              {/* Registration specific fields */}
              {!isLogin && (
                <div className="space-y-4">
                  {/* Referral Code */}
                  {!showReferral && (
                    <button
                      onClick={() => setShowReferral(!showReferral)}
                      className="flex items-center justify-between w-full text-[#2283F6] text-sm font-bold py-2"
                    >
                      Referral code/discount code
                      <ChevronDown size={20} />
                    </button>
                  )}
                  {showReferral && (
                    <input
                      type="text"
                      value={referralCode}
                      onChange={(e) => setReferralCode(e.target.value)}
                      placeholder="Enter referral code"
                      className="w-full h-12 px-4 mt-2 bg-[#0D131C] border border-[#55657E] rounded-xl text-white placeholder-[#55657E] text-sm focus:border-[#2283F6] focus:outline-none"
                    />
                  )}

                  {/* Submit Button */}
                  <TDButton className="!w-full h-11" type="red" onClick={register}>
                    REGISTER
                  </TDButton>

                  {/* Checkboxes */}
                  <div className="space-y-2">
                    <label className="flex items-start gap-3">
                      <div className="relative mt-0.5">
                        <input
                          type="checkbox"
                          checked={agreedToTerms}
                          onChange={(e) => setAgreedToTerms(e.target.checked)}
                          className="sr-only"
                        />
                        <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${agreedToTerms
                            ? "bg-[#2283F6] border-[#2283F6]"
                            : "border-[#55657E] bg-transparent"
                          }`}>
                          {agreedToTerms && (
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </div>
                      </div>
                      <span className="text-xs text-[#A7B5CA]">
                        I agree to the{" "}
                        <span className="text-[#2283F6]">"User Agreement"</span>{" "}
                        and confirm that I am over 18 years old
                      </span>
                    </label>

                    <label className="flex items-start gap-3">
                      <div className="relative mt-0.5">
                        <input
                          type="checkbox"
                          checked={agreedToNotifications}
                          onChange={(e) => setAgreedToNotifications(e.target.checked)}
                          className="sr-only"
                        />
                        <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${agreedToNotifications
                            ? "bg-[#2283F6] border-[#2283F6]"
                            : "border-[#55657E] bg-transparent"
                          }`}>
                          {agreedToNotifications && (
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </div>
                      </div>
                      <span className="text-xs text-[#A7B5CA]">
                        I agree to receive promotional notifications from{" "}
                        <span className="text-[#2283F6]">ok777.casino</span>
                      </span>
                    </label>
                  </div>
                </div>
              )}

              {/* Login Submit Button */}
              {isLogin && (
                <>
                  <TDButton className="!w-full h-11" type="red" onClick={login}>
                    LOG IN
                  </TDButton>
                </>
              )}
            </div>

            {/* Social Login */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-[#3C485C]" />
                <span className="text-sm text-[#A7B5CA]">Log in using</span>
                <div className="flex-1 h-px bg-[#3C485C]" />
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <SocialButton icon={<GoogleIcon />} />
                <SocialButton icon={<TelegramIcon />} />
                <SocialButton icon={<MetamaskIcon />} />
                <SocialButton icon={<TonIcon />} />
                <SocialButton icon={<TrustWalletIcon />} />
                <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-white-4 backdrop-blur-[32px] text-[#A7B5CA] text-xs font-bold">
                  98
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
