import { type MouseEvent, useState, type WheelEvent } from "react";

/**
 * ProfileImage component displays a profile picture with interactive zoom and drag capabilities.
 * It allows the user to adjust the image position and scale.
 */
export function ProfileImage() {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: WheelEvent) => {
    const scaleAmount = -e.deltaY * 0.001;
    const newScale = Math.min(Math.max(0.5, scale + scaleAmount), 5);
    setScale(newScale);
  };

  return (
    <div className="no-print-controls flex w-full justify-center">
      <button
        className="relative z-10 size-52 cursor-move overflow-hidden rounded-full border-4 border-slate-700 bg-slate-800 shadow-xl"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onWheel={handleWheel}
        title="Verschieben: Ziehen | Zoom: Mausrad"
        type="button"
      >
        <img
          alt="Nils Reith"
          className="pointer-events-none object-cover"
          height={120}
          src="/foto.jpg"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            transformOrigin: "center",
            transition: isDragging ? "none" : "transform 0.1s ease-out",
          }}
          width={120}
        />
      </button>
    </div>
  );
}
