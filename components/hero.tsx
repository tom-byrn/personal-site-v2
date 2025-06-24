"use client"
import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"
import ImageCard from "./image-card"
import Link from "next/link"
import { AuroraText } from "./magicui/aurora-text"
import { HyperText } from "./magicui/hyper-text"

export default function Hero() {
  return (
    <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Global styles for the sliding gradient */}
        <style jsx global>{`
          .gradient-animate {
            /* make the gradient twice as wide so it can scroll */
            background-size: 200% 100%;
            /* animate it from right→left infinitely */
            animation: slideGradient 5s linear infinite;
          }
          @keyframes slideGradient {
            0%   { background-position: 100% 0; }
            100% { background-position: -100% 0; }
          }
        `}</style>

        <h1
          className={`
            cursor-default
            text-4xl sm:text-6xl lg:text-7xl
            font-bold tracking-tight mb-8
            bg-gradient-to-r from-[#aaffef] via-[#f5bbff] to-[#aaffef]
            bg-clip-text text-transparent
            gradient-animate
            py-2
          `}
        >
          <AuroraText>Tom Byrne</AuroraText>
        </h1>

        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 mb-10">
          <span>ISE First Year | SWE Intern @ Stripe</span>
        </p>

        {/*}<p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 mb-10">
          <Link href='https://software-engineering.ie/'><span>ISE First Year </span></Link> | <Link href='https://kepri.ie/'><span>Founder @ Kepri</span></Link>
        </p>{*/}

        {/* Centered social buttons */}
        <div className="flex justify-center space-x-6">
          <Link href="https://github.com/tom-byrn">
            <Button
              variant="ghost"
              className="p-3 rounded-full hover:bg-[#E03AFF] hover:text-white transition cursor-pointer"
            >
              <Github className="h-18 w-18" />
            </Button>
          </Link>

          <Link href="https://linkedin.com/in/tom-byrn">
            <Button
              variant="ghost"
              className="p-3 rounded-full hover:bg-[#2EEAC8] hover:text-white transition cursor-pointer"
            >
              <Linkedin className="h-18 w-18" />
            </Button>
          </Link>

        </div>
      </div>
    </div>
  )
}
