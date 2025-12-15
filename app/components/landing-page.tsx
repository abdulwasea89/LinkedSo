"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function LandingPage() {
  return (
    <div className="flex h-dvh flex-col items-center justify-center bg-background px-4">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-4xl font-bold text-foreground">Welcome to Zola</h1>
        <p className="text-muted-foreground">
          The open-source chat interface for all your AI models.
        </p>
        <div className="space-y-4">
          <Button asChild size="lg">
            <Link href="/auth">Get Started</Link>
          </Button>
          <p className="text-sm text-muted-foreground">
            Sign in to start chatting with your AI models.
          </p>
        </div>
      </div>
    </div>
  )
}