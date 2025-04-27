import Link from "next/link"
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Redirect } from "next"

interface ImageCardProps {
  imageSrc: string
  title: string
  description: string
}

export default function ImageCard({
  imageSrc,
  title,
  description,
}: ImageCardProps) {
  return (
    <Card className="w-full max-w-sm rounded-lg overflow-hidden shadow-lg px-4">
      <img
        src={imageSrc}
        alt="Card Image"
        className="w-full h-48 object-cover rounded-lg"
        width={400}
        height={200}
        style={{ aspectRatio: "400/200", objectFit: "cover" }}
      />
      <CardContent className="p-6 space-y-4">
        <div>
            <CardTitle className="text-2xl font-bold">{title}</CardTitle>
            <CardDescription className="text-gray-500">{description}</CardDescription>
        </div>
        <div className="flex justify-between items-center">
        </div>
      </CardContent>
    </Card>
  )
}
