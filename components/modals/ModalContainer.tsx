"use client"

import { X } from 'lucide-react';
import { useModalScrollPrevention } from '@/hooks/useModalScrollPrevention';
import { ReactNode, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { createPortal } from 'react-dom';

interface ModalContainerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  headerClassName?: string;
  showHeader?: boolean;
  showCloseButton?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
  position?: 'center' | 'bottom' | 'top' | 'responsive';
  usePortal?: boolean;
  zIndex?: number;
  backdropClassName?: string;
  onBackdropClick?: () => void;
  disableBackdropClick?: boolean;
  fullHeight?: boolean;
  maxHeight?: string;
  width?: string;
  topSpace?: string
}

const sizeClasses = {
  sm: 'max-w-sm sm:max-w-md',
  md: 'max-w-md sm:max-w-lg', 
  lg: 'max-w-lg sm:max-w-2xl',
  xl: 'max-w-4xl sm:max-w-6xl',
  '2xl': 'max-w-4xl sm:max-w-7xl',
  '3xl': 'max-w-4xl sm:max-w-[90vw]',
  full: 'w-full'
};

const positionClasses = {
  center: 'items-center',
  bottom: 'items-end',
  top: 'items-start',
  'responsive': 'items-end sm:items-center' // Responsive: bottom on mobile, center on desktop
};

export default function ModalContainer({ 
  isOpen, 
  title,
  onClose, 
  className = "",
  contentClassName = "",
  headerClassName = "",
  children,
  showHeader = true,
  showCloseButton = true,
  size = 'xl',
  position = 'responsive',
  usePortal = true,
  zIndex = 10000,
  backdropClassName = "",
  onBackdropClick,
  disableBackdropClick = false,
  width,
  topSpace = "0"
}: ModalContainerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  // Prevent background scrolling when modal is open
  useModalScrollPrevention(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      // Small delay to ensure the element is rendered before animation
      const timer = setTimeout(() => setIsVisible(true), 10);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
      // Wait for animation to complete before unmounting
      const timer = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (!disableBackdropClick && e.target === e.currentTarget) {
      if (onBackdropClick) {
        onBackdropClick();
      } else {
        onClose();
      }
    }
  };

  if (!shouldRender) return null;

  const modalContent = (
    <div 
      className={cn(
        "fixed inset-0 flex p-2 sm:p-4 backdrop-blur-[0.3125rem] justify-center bg-black/80",
        positionClasses[position],
        backdropClassName
      )}
      style={{ zIndex, overflowY: 'auto' }}
      onClick={handleBackdropClick}
    >
      <div 
        className={cn(
          "relative z-[10001] !w-[56.25rem] mx-auto overflow-visible",
          "transform transition-all duration-300 ease-out",
          isVisible
            ? "translate-y-0"
            : position === 'bottom' 
              ? "translate-y-full" 
              : position === 'top'
              ? "-translate-y-full"
              : position === 'responsive'
              ? "translate-y-full sm:translate-y-8"
              : "translate-y-8",
          width ? "" : sizeClasses[size],
          // Ensure minimum width on larger screens
          "sm:min-w-[25rem]",
          className
        )}
        style={{
          maxWidth: width || undefined,
          width: width || undefined
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={cn("flex flex-col items-start w-full mx-auto", topSpace)}>
          {/* Header */}
          {showHeader && (
            <div className={cn(
              "flex items-center gap-4 w-full px-6 py-4 rounded-t-[0.875rem] bg-gradient-to-b from-[rgba(17,25,35,0.54)] to-[#002554] border-t border-white-16 backdrop-blur-[2rem]",
              headerClassName
            )}>
              {title && (
                <h2 className="flex-1 text-white font-montserrat text-lg font-bold">
                  {title}
                </h2>
              )}
              {showCloseButton && (
                <button
                  onClick={onClose}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white-4 bg-white-4 shadow-[inset_0_0.0625rem_0_0_rgba(255,255,255,0.16)] backdrop-blur-[2rem] hover:bg-white-8 transition-colors"
                >
                  <X className="h-4 w-4 text-[white]" />
                </button>
              )}
            </div>
          )}

          {/* Content */}
          <div className={cn(
            "flex flex-col gap-6 p-4 w-full rounded-b-[0.875rem] bg-[rgba(17,25,35,0.54)] backdrop-blur-[2rem]",
            contentClassName
          )}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );

  // Use portal to render at document root level if specified
  if (usePortal && typeof document !== 'undefined') {
    return createPortal(modalContent, document.body);
  }

  return modalContent;
}

