import React, { useState } from "react";
import EditIcon from "@/components/ui/icons/edit";
import TDButton from "@/components/ui/Button/TDButton";
import { Input } from "@/components/ui";
import FlatButton from "@/components/ui/Button/FlatButton";
import ModalContainer from "@/components/modals/ModalContainer";
import LockKeyholeIcon from "@/components/ui/icons/lock-keyhole";
import CheckIcon from "@/components/ui/icons/check";
import XIcon from "@/components/ui/icons/x";
import EnvelopeIcon from "@/components/ui/icons/envelope";
import MobileIcon from "@/components/ui/icons/mobile";
import { LabeledInput } from "@/components/ui/LabeledInput";
import EyeSlashIcon from "@/components/ui/icons/eye-slash";
import EyeIcon from "@/components/ui/icons/eye";
import CheckCircleIcon from "@/components/ui/icons/check-circle";
import TelegramIcon from "@/components/ui/icons/TelegramIcon";




const Security: React.FC = () => {

  const [passwordModal, setPasswordModal] = useState(false);
  const [withdrawModal, setWithdrawModal] = useState(false);
  const [emailModal, setEmailModal] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const toggleSuccessForm = () => {
    setIsOpen(!isOpen);
    const authContainer = document.getElementById("auth-container");
    const successForm = document.getElementById("success-form");
    if (successForm) {
      successForm.style.display = isOpen ? "block" : "none";
    }
    if (authContainer) {
      authContainer.style.display = isOpen ? "none" : "block";
    }
    console.log(successForm?.style.display, isOpen);

  };

  const togglePasswordModal = () => {
    setPasswordModal(!passwordModal);
  }

  const toggleWithdraw = () => {
    setWithdrawModal(!withdrawModal);
  }

  const toggleEmailModal = () => {
    setEmailModal(!emailModal);
  }

  const securityInfo = [
    {
      title: "Password",
      icon: (<LockKeyholeIcon />),
      state: "ok",
      desc: "For security reasons, it is recommended to change your login password regularly.",
      button: "Change password",
      onClick: togglePasswordModal,
    },
    {
      title: "Withdrawal Password",
      icon: (<LockKeyholeIcon />),
      state: "ok",
      desc: "For security reasons, please create your fund password.",
      button: "Change Withdrawal Password",
      onClick: toggleWithdraw,
    },
    {
      title: "Email address",
      icon: (<EnvelopeIcon />),
      state: "no",
      desc: "You have bound your email address. If you need to modify it, please contact customer service!",
      button: "Verify now",
      onClick: toggleEmailModal,
    },
    {
      title: "Mobile Number",
      icon: (<MobileIcon />),
      state: "no",
      desc: "Bind your phone number to secure your account.",
      button: "Go to binding",
      onClick: () => { },
    }
  ]

  return (
    <div className=" [@media(max-width:768px)]:w-full">
      <div className="w-full  flex flex-col gap-4">
        {/* Security Header */}
        <h1 className="text-lg sm:text-xl hidden lg:block font-bold text-white ">Security</h1>
        <div className="grid lg:grid-cols-2 gap-4">
          {
            securityInfo.map(item =>
              <div key={item.title} className="bg-white-4 justify-between rounded-[12px] p-4 gap-4 flex flex-col">
                <div className="flex justify-between items-center">
                  <div className="flex gap-3 text-casper items-center text-[14px] font-bold">
                    {item.icon}
                    {item.title}
                  </div>
                  {
                    item.state === "ok" ? 
                    <div className="flex gap-2 items-center text-malachite font-medium text-[14px]">
                      <CheckIcon className="w-6 h-6" />
                      <span className="lg:hidden">Verified</span>
                    </div> : 
                    <div className="flex gap-2 items-center text-crimson font-medium text-[14px]">
                      <XIcon className="w-6 h-6"  />
                      <span className="lg:hidden">Not activated</span>
                    </div>
                  }
                </div>
                <div className="text-casper text-[14px]">{item.desc}</div>
                <TDButton onClick={item.onClick} type="blue" className="w-full h-[41px] text-gallery text-[14px]">{item.button}</TDButton>
              </div>
            )
          }
        </div>

        <ModalContainer isOpen={passwordModal} title="Change Login Password" className="lg:w-[30%]" onClose={togglePasswordModal}>
          
          <div className="flex flex-col gap-2">
            <div className="p-4 rounded-[12px] gap-4 flex flex-col bg-white-4">
              <h2 className="font-bold text-white text-[0.875rem]">New login password</h2>
              <div className="password-input-container">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="form-input"
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-6 w-6" />
                  ) : (
                    <EyeIcon className="w-6 h-6" />
                  )}
                </button>
              </div>
              <div className="password-input-container">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="form-input"
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-6 w-6" />
                  ) : (
                    <EyeIcon className="w-6 h-6" />
                  )}
                </button>
              </div>
              <h2 className="font-bold text-white text-[0.875rem]">Confirm login password</h2>

              <div className="password-input-container">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="form-input"
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-6 w-6" />
                  ) : (
                    <EyeIcon className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <TDButton type="blue" onClick={togglePasswordModal} className="w-full h-[41px] text-gallery text-[14px]">Submit</TDButton>
        </ModalContainer>
        <ModalContainer isOpen={withdrawModal} title="Set Withdrawal Password" className="lg:w-[30%]" onClose={toggleWithdraw}>
          <div className="flex flex-col gap-2">
            <div className="p-4 rounded-[12px] gap-4 flex flex-col bg-white-4">
              <h2 className="font-bold text-white text-[0.875rem]">Login Password</h2>
              <div className="password-input-container">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="form-input"
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-6 w-6" />
                  ) : (
                    <EyeIcon className="w-6 h-6" />
                  )}
                </button>
              </div>
              <h2 className="font-bold text-white text-[0.875rem]">Withdrawal Password</h2>

              <div className="password-input-container">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="form-input"
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-6 w-6" />
                  ) : (
                    <EyeIcon className="w-6 h-6" />
                  )}
                </button>
              </div>
              <h2 className="font-bold text-white text-[0.875rem]">Withdrawal Password</h2>

              <div className="password-input-container">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="form-input"
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-6 w-6" />
                  ) : (
                    <EyeIcon className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="p-4 bg-white-4 flex justify-between rounded-[8px] h-[56px] items-center">
            <span className="text-dodger-blue font-bold text-[12px]">q106316519@gmail.com</span>
            <span className="text-malachite font-medium flex gap-2 items-center">
              <CheckCircleIcon />
              Verified
            </span>
          </div>
          <TDButton type="blue" onClick={toggleWithdraw} className="w-full h-[41px] text-gallery text-[14px]">Submit</TDButton>
        </ModalContainer>
        <ModalContainer isOpen={emailModal} title="Verify Email" className="lg:w-[30%] " onClose={toggleEmailModal}>
          <div className="flex flex-col gap-2">
            <div className="rounded-[12px] flex flex-col gap-4 p-4 bg-white-4">
              <h2 className="text-white text-[14px] font-bold">Email</h2>
              <div className="rounded-[0.75rem] bg-white-8 p-2 flex justify-between items-center">
                <span className="text-white font-medium text-[12px]">q106316519@gmail.com</span>
                <FlatButton className="w-[64px] h-9  text-gallery font-bold text-[12px]">Send</FlatButton>
              </div>
            </div>
            <h2 className="text-[12px] text-white font-bold indent-[20px]">Change email to verify</h2>
            <div className="p-4 rounded-[12px] bg-[#1BB83D21] font-medium text-[14px] text-white">
              Changing it won't affect the original email, which remains usable for login.
            </div>
            <div className="rounded-[12px] bg-white-4 p-4 flex flex-col gap-4">
              <h2 className="text-white text-[14px] font-bold">Verification Code</h2>
                <input
                  type="text"
                  placeholder=""
                  className="form-input"
                />
            </div>
          <TDButton type="blue" onClick={toggleEmailModal} className="w-full h-[41px] text-gallery text-[14px]">Bind</TDButton>

          </div>

        </ModalContainer>

      </div>




    </div>
  );
};

export default Security;
