import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { SidebarItem as SidebarItemType } from "../../sidebar-data";

interface SidebarItemProps extends SidebarItemType {
  isCollapsed: boolean;
  onHashHover?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onHashHoverLeave?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ 
  icon, 
  label, 
  href, 
  badge, 
  activeColor, 
  isCollapsed, 
  hasHover,
  onClick,
  onHashHover,
  onHashHoverLeave,
  isCollapsedOnly
}) => {
  const pathname = usePathname();
  const isActive = href && pathname?.startsWith(href);
  
  // Don't render if this is a collapsed-only item and sidebar is not collapsed
  if (isCollapsedOnly && !isCollapsed) {
    return null;
  }

  const baseClasses = cn(
    "flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors",
    isCollapsed ? "justify-center" : "",
    isActive ? "bg-white/10 text-white" : activeColor || "text-gray-300 hover:bg-gray-700 active:bg-gray-700"
  );

  const content = (
    <>
      <img src={icon} className="w-5 h-5" alt={label} />
      {!isCollapsed && (
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold">{label}</span>
          {badge && (
            <span className={cn("text-xs font-medium", badge.color)}>
              {badge.text}
            </span>
          )}
        </div>
      )}
      {!isCollapsed && hasHover && (
        <svg
          className="w-3 h-3 text-gray-500 ml-auto"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={baseClasses}
        aria-current={isActive ? 'page' : undefined}
      >
        {content}
      </Link>
    );
  }

  return (
    <div
      className={baseClasses}
      onClick={onClick}
      onMouseEnter={hasHover ? onHashHover : undefined}
      onMouseLeave={hasHover ? onHashHoverLeave : undefined}
    >
      {content}
    </div>
  );
};

export default SidebarItem;
