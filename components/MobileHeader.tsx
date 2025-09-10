"use client"

import React from 'react';
import { cn } from '@/lib/utils';
import BlackButton from './ui/Button/BlackButton';
import ArrowLeftStrokeIcon from './ui/icons/arrow-left-stroke';
import HeadphoneMicIcon from './ui/icons/headphone-mic';

interface MobileHeaderProps {
  title?: string;
  onBackClick?: () => void;
  onSupportClick?: () => void;
  className?: string;
  showBackButton?: boolean;
  isHeadSet: boolean;
}

export function MobileHeader({ title = 'Support/Legal support', onBackClick, onSupportClick, className, showBackButton = true, isHeadSet }: MobileHeaderProps) {
  return (
    <div className={cn(
      "fixed top-0 left-0 right-0 z-50",
      "flex w-full justify-between items-center gap-3 sm:gap-4 px-3 sm:px-4 py-3 sm:py-4",
      "border-t border-b border-[#2A3546] ",
      "bg-[rgba(17,25,35,0.54)] backdrop-blur-[32px]",
      "min-h-[56px] sm:min-h-[64px]", // Ensure minimum touch target height
      className
    )}>
      <div className='flex gap-4 items-center'>
        {/* Back Button */}
      {showBackButton && (
        <BlackButton onClick={onBackClick}>
          <ArrowLeftStrokeIcon  className='w-4 h-4' />
        </BlackButton>
      )}

      {/* Title */}
      <h1 className={cn(
        "flex-1 text-white font-montserrat text-base sm:text-lg font-bold",
        showBackButton ? "text-center sm:text-left" : "text-center",
        "truncate px-2 sm:px-0" // Handle long titles on small screens
      )}>
        {title}
      </h1>
      </div>

      {/* Support Button */}
      {
        isHeadSet && (
          <BlackButton onClick={onSupportClick}>
            <HeadphoneMicIcon className='w-4 h-4' />
          </BlackButton>
        )
      }
    </div>
  );
}
