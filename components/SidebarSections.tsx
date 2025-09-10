import React, { useState, useEffect } from "react";
import SidebarItem from "./ui/Button/SidebarButton";
import { sidebarSections, SidebarSection, SidebarItem as SidebarItemType } from "./sidebar-data";

interface SidebarSectionsProps {
  isCollapsed: boolean;
  serviceItemsWithHandler?: SidebarItemType[];
  onHashHover?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onHashHoverLeave?: () => void;
}

const Divider = () => (
  <div className="w-full mx-auto h-[1px] relative bg-[linear-gradient(to_right,#1a2332,#6a7282,#1a2332)]"></div>
);

const SidebarSections: React.FC<SidebarSectionsProps> = ({ 
  isCollapsed, 
  serviceItemsWithHandler,
  onHashHover, 
  onHashHoverLeave 
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [isClient]);

  return (
    <>
      {sidebarSections
        .filter(section => !(isClient && isMobile && section.hideOnMobile))
        .map((section) => {
          // Use service items with handlers if available, otherwise use default items
          const itemsToRender = section.id === "services" && serviceItemsWithHandler 
            ? serviceItemsWithHandler 
            : section.items;
            
          return (
            <div key={section.id}>
              <div className={`${section.className} ${isCollapsed ? "px-2" : ""}`}>
                {itemsToRender.map((item) => (
                  <div key={item.id} className={item.hasHover ? "relative" : ""}>
                    <SidebarItem
                      {...item}
                      isCollapsed={isCollapsed}
                      onHashHover={item.hasHover ? onHashHover : undefined}
                      onHashHoverLeave={item.hasHover ? onHashHoverLeave : undefined}
                    />
                    {item.hasHover && (
                      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                        {/* Floating panel is rendered globally in layout via HashHoverLayer */}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {section.showDivider && <Divider />}
            </div>
          );
        })}
    </>
  );
};

export default SidebarSections;
