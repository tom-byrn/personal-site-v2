"use client"
import { Button } from "@/components/ui/button"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import ImageCard from "./image-card"
import NeuralNet from "@/public/images/NeuralNetImage.png"
import Link from "next/link"
import { KepriSite } from "./site"
import { Card, CardDescription, CardTitle } from "./ui/card"
import { AuroraText } from "./magicui/aurora-text"

export default function Projects() {
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
            bg-gradient-to-r from-[#ffffff] via-[#ffffff] to-[#ffffff]
            bg-clip-text text-transparent
            gradient-animate
            py-2
          `}
        >
          Projects
        </h1>


        <div className="mt-15 mb-2 md:mx-37.5">
          <Card className="px-7.5">
            <CardTitle className="text-4xl font-bold">Kepri Solar</CardTitle>
            <Link href="https://kepri.ie">
              <KepriSite/>
            </Link>
          </Card>
        </div>

        <div className="flex justify-center">
          <div className="md:transform md:scale-115 mt-25 mb-35">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-8">
              <Link href="https://github.com/tom-byrn/MNIST-Neural-Network">
                <ImageCard
                  imageSrc="/images/NeuralNetImage.png"
                  title="Convolutional Neural Network"
                  description="CNN for identifying hand-written letters based on the MNIST data set"
                />
              </Link>

              <Link href="https://devpost.com/software/contex-ai">
                <ImageCard
                  imageSrc="/images/Contex.png"
                  title="Contex - Hack Ireland 2025"
                  description="A component library for building Agentic AI-friendly websites"
                />
              </Link>

              <Link href="https://github.com/tom-byrn/flylow-app">
                <ImageCard
                  imageSrc="/images/Flylow.png"
                  title="Flylow Web App"
                  description="A web app that tells you when the best time to book your flight is"
                />
              </Link>

              <Link href="https://github.com/tom-byrn/well-quest">
                <ImageCard
                  imageSrc="/images/Well-Quest.jpg"
                  title="Well-Quest"
                  description="A platform for organising events and promoting wellness in the workplace"
                />
              </Link>
            </div>
          </div>
        </div>
        <Button className="p-8 text-2xl">
          <a
            href="https://github.com/tom-byrn"
            target="_blank"
            rel="noopener noreferrer"
          >
            See More
          </a>
        </Button>



      </div>
    </div>
  )
}
