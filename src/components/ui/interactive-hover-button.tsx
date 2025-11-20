import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Button", className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative cursor-pointer overflow-hidden rounded-lg bg-[#F5B700] px-8 py-4 text-center font-bold text-lg text-[#0A1F44] transition-all duration-300 shadow-xl hover:shadow-2xl hover:bg-[#ffc61a]",
        className,
      )}
      {...props}
    >
      <span className="inline-flex items-center gap-3 translate-x-0 transition-all duration-300 group-hover:translate-x-2">
        {text}
        <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
      </span>
      <div className="absolute inset-0 h-full w-0 bg-[#ffc61a]/20 transition-all duration-300 group-hover:w-full -z-10 rounded-lg"></div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };
