import React, { useLayoutEffect, useRef } from "react";
import "./style.css";

type Props = {
  top?: number;
  left?: number;
  children?: React.ReactNode;
  onCloseRequest?(): void;
  fitInViewport?: boolean;
};

export function Popover({
  children,
  left,
  top,
  onCloseRequest,
  fitInViewport = false,
}: Props) {
  const popoverRef = useRef<HTMLDivElement>(null);

  // ensure the popover doesn't overflow the viewport
  useLayoutEffect(() => {
    if (fitInViewport && popoverRef.current) {
      const element = popoverRef.current;
      const { x, y, width, height } = element.getBoundingClientRect();

      const viewportWidth =
        typeof window !== "undefined" ? window.innerWidth : 0;
      if (x + width > viewportWidth) {
        element.style.left = viewportWidth - width + "px";
      }
      const viewportHeight =
        typeof window !== "undefined" ? window.innerHeight : 0;
      if (y + height > viewportHeight) {
        element.style.top = viewportHeight - height + "px";
      }
    }
  }, [fitInViewport]);

  return (
    <div className="popover" style={{ top: top, left: left }} ref={popoverRef}>
      <div
        className="cover"
        onClick={onCloseRequest}
        onContextMenu={e => {
          e.preventDefault();
          if (onCloseRequest) onCloseRequest();
        }}
      />
      {children}
    </div>
  );
}
