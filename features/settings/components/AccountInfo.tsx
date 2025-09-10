import React, { useState } from "react";
import EditIcon from "@/components/ui/icons/edit";
import TDButton from "@/components/ui/Button/TDButton";
import FlatButton from "@/components/ui/Button/FlatButton";
import ModalContainer from "@/components/modals/ModalContainer";
import TelegramIcon from "@/components/ui/icons/TelegramIcon";




const AccountInfo: React.FC = () => {
 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div className=" [@media(max-width:660px)]:w-full">
      <div className="w-full  flex flex-col gap-4">
        {/* AccountInfo Header */}
        <h1 className="text-lg sm:text-xl hidden lg:block font-bold text-white ">User Information</h1>
        <div className="rounded-[12px] bg-white-4 p-4 overflow-hidden flex gap-4 justify-between">
          <div className="flex gap-4 items-center">
            <div className="relative flex flex-col items-center gap-[-10px]">
              <div className="relative">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/381f33b8ee9dde920a0b2278348be945b8886b91?width=128"
                  alt="User avatar"
                  className="w-16 h-16 rounded-2xl shadow-[0_1px_0_0_rgba(255,255,255,0.16)_inset] backdrop-blur-[32px]"
                />
                {/* VIP Badge - positioned to overlap the bottom of the avatar */}
                <div className="absolute -bottom-2.5 left-1/2 transform -translate-x-1/2 z-10">
                  <div
                    className="h-5 px-2 flex items-center justify-center rounded-2xl border border-white shadow-[0_1px_0_0_rgba(255,255,255,0.08)_inset]"
                    style={{ backgroundColor: '#1BB83D' }}
                  >
                    <span className="text-white text-xs font-bold whitespace-nowrap">VIP 1</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[14px text-white font-bold]">User8527682</span>
              <span className="text-[14px] text-casper">User ID: 59363996</span>
            </div>
          </div>
          <div onClick={toggleModal} className="bg-mirage-4 cursor-pointer active:bg-mirage hover:bg-mirage flex gap-1 text-[14px] h-9 items-center px-3 text-casper font-bold rounded-[8px] overflow-hidden">
            <EditIcon className="w-6 h-6" />
            Edit
          </div>
        </div>
        <div className="rounded-[12px] bg-white-4 p-4 lg:items-center justify-between flex lg:flex-row flex-col gap-4">
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-white text-[14px]">Email Address</h2>
            <p className="text-[14px] text-casper">
              Link your email to protect your account security and recover your password.
            </p>
          </div>
          <TDButton type="blue" className="lg:w-[164px] w-full h-[41px] text-gallery font-bold text-[14px]" onClick={() => { }}>Go to binding</TDButton>
        </div>
        <div className="rounded-[12px] bg-white-4 p-4  flex flex-col gap-4">
          <h2 className="font-bold text-[0.875rem] indent-[1.25rem] text-white">Telegram</h2>
          <div className="p-[6px] gap-1 bg-white-8 justify-between flex items-center pl-4 rounded-[12px]">
            <div className="flex text-casper text-[14px] font-bold gap-1">
              <TelegramIcon color="#A7B5CA" className="w-6 h-6" />
              Not intertwined
            </div>
            <FlatButton className="w-[82px] h-9 font-bold text-gallery text-[12px]">Binding</FlatButton>
          </div>
        </div>

      </div>

      <ModalContainer onClose={toggleModal} isOpen={isModalOpen} title="Edit profile">
        <div className="flex gap-2 flex-col">
          <div className="rounded-[14px] items-center bg-white-4 overflow-hidden p-4 gap-[10px] flex flex-col">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/381f33b8ee9dde920a0b2278348be945b8886b91?width=128"
              alt="User avatar"
              className="w-16 h-16 rounded-2xl shadow-[0_1px_0_0_rgba(255,255,255,0.16)_inset] backdrop-blur-[32px]"
            />
            <span className="font-bold p-3 text-casper text-[12px]">Change avatar</span>
          </div>
          <div className="flex flex-col gap-4 p-4 bg-white-4 rounded-[12px]">
            <div className="input-group">
              <label className="input-label">Pseudonym</label>
              <input
                type="text"
                placeholder="Enter Pseudonym"
                className="form-input rounded-[8px]"
                value={"User8527681"}
              />
            </div>
            <p className="w-[50%] text-casper text-[14px]">Do not use special characters, otherwise it may not be saved.</p>
            <TDButton onClick={toggleModal} type="blue" className="w-full h-[41px] text-gallery font-bold text-[14px]">Save</TDButton>
          </div>
        </div>
      </ModalContainer>

    </div>
  );
};

export default AccountInfo;
