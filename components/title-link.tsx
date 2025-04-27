import Link from "next/link"
import { CardTitle, CardDescription } from "@/components/ui/card"

export function TitleLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  const isExternal = /^https?:\/\//.test(href)

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block space-y-1"
      >
        {children}
      </a>
    )
  }

  // Next.js 13+ will forward className and other props to the underlying <a>
  return (
    <Link href={href} className="block space-y-1">
      {children}
    </Link>
  )
}
