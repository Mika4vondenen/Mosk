import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  onClick?: () => void
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className={cn(className)}>
      <div className="flex items-center gap-3 bg-black/80 border border-white/10 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <button
              key={item.name}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true)
                  setActiveTab(item.name)
                  setTimeout(() => {
                    item.onClick?.()
                    setTimeout(() => setIsAnimating(false), 50)
                  }, 150)
                }
              }}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-all",
                "text-white/60 hover:text-white",
                isActive && "text-white drop-shadow-[0_0_8px_rgba(255,255,255,1)] drop-shadow-[0_0_16px_rgba(100,200,255,0.8)]",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-white/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 35,
                  }}
                  layout
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-white rounded-t-full">
                    <div className="absolute w-12 h-6 bg-white/10 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-white/10 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-white/10 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
