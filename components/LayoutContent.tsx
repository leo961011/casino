"use client";

import React, { useState, useEffect, Suspense } from 'react';
import ResponsiveHeader from "@/components/ResponsiveHeader";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import Bottombar from "@/components/Bottombar";
import AuthModal from "@/components/modals/AuthModal";

import { useOverlay } from "@/context/OverlayProvider";
import NotificationsPanel from "@/components/ui/notification/Panel";
import NotificationsDrawer from "@/components/overlays/NotificationsDrawer";
import { usePathname } from 'next/navigation';
import dynamic from "next/dynamic";
import PageLoader from "@/components/ui/PageLoader";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { setInitialLoadComplete } from "@/store/slices/loadingSlice";



interface LayoutContentProps {
  children: React.ReactNode;
}

export default function LayoutContent({ children }: LayoutContentProps) {
  const dispatch = useAppDispatch();
  const { isLoading, isInitialLoad } = useAppSelector((state) => state.loading);
  const { isNotificationsOpen, isProfileOpen, closeOverlay } = useOverlay();
  const [isMobileHeader, setIsMobileHeader] = useState(false);
  const pathname = usePathname();
  
  // Check if we're on alliance pages
  const isAlliancePage = pathname?.startsWith('/alliance');
  
  // Check if we're on hashgame pages
  const isHashgamePage = pathname?.startsWith('/hashgames');

  // Handle initial page load
  useEffect(() => {
    if (isInitialLoad) {
      // First time loading, show loading screen
      const timer = setTimeout(() => {
        dispatch(setInitialLoadComplete());
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isInitialLoad, dispatch]);



  // Virtual keyboard state is now handled in the useVirtualKeyboard hook
  // No need for additional body class management here

  // Only show loading on initial app load
  if (isLoading && isInitialLoad) {
    return <PageLoader message="Loading app..." />;
  }

  return (
    <>
      <Suspense fallback={<div>Loading header...</div>}>
        <ResponsiveHeader onHeaderTypeChange={setIsMobileHeader} />
      </Suspense>
      <main className={`w-full ${isMobileHeader ? 'pt-[56px] sm:pt-[64px]' : 'pt-[56px]'} relative z-10 transition-all duration-300`}>
        <div className="w-full max-w-[100vw] min-h-[calc(100vh-56px)]">
          {!isMobileHeader && <Sidebar />}
          <div className={`main-content ${isMobileHeader ? 'w-full' : 'lg:ml-[300px]'} overflow-y-auto ${!isMobileHeader && !isAlliancePage && !isProfileOpen ? 'h-[calc(100vh-56px-59px)]' : 'h-[calc(100vh-56px)]'} ${isNotificationsOpen && !isMobileHeader ? 'lg:mr-[420px]' : ''}`}>
            {children}
            {!isHashgamePage && !isAlliancePage && <Footer />}
          </div>
          {isNotificationsOpen && !isMobileHeader && (
            <div className={`hidden lg:flex w-[420px] ${!isMobileHeader && !isAlliancePage && !isProfileOpen ? 'h-[calc(100vh-56px-59px)]' : 'h-[calc(100vh-56px)]'} bg-[#0f141c] border-l border-gray-700 flex-shrink-0 fixed right-0 top-[56px] z-30`}>
              <NotificationsPanel onClose={closeOverlay} />
            </div>
          )}
        </div>
        
        {/* Mobile notification overlay - show on mobile devices */}
        {isNotificationsOpen && (
          <div className="lg:hidden">
            <NotificationsDrawer onClose={closeOverlay} />
          </div>
        )}
      </main>
      {!isMobileHeader && !isAlliancePage && !isProfileOpen && <Bottombar />}
      

      
      <AuthModal />
    </>
  );
}
