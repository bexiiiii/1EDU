import React from "react"
import Image from "next/image"
import { Puzzle } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import AnimatedNumberCountdown from "@/components/ui/countdown-number"

export default function Home() {
  return (
    <div>
      <main>
        <div className="flex min-h-screen flex-col items-center justify-center gap-4">
          <Image
            src="/1edu_logo.png"
            alt="Лого 1EDU"
            width={200}
            height={80}
            priority
          />

          <Badge
            variant="outline"
            className="rounded-[14px] border border-black/10 text-base text-neutral-800 md:left-6"
          >
            <Puzzle className="fill-[#D2F583] stroke-1 text-neutral-800" /> &nbsp;
            Скоро тут будет CRM для УЧЕБНЫХ ЦЕНТРОВ
          </Badge>

          <AnimatedNumberCountdown
            endDate={new Date("2026-02-28")}
            className="my-4"
          />
        </div>
      </main>
    </div>
  )
}
