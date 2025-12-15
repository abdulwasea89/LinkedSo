import { ChatContainer } from "@/app/components/chat/chat-container"
import { LandingPage } from "@/app/components/landing-page"
import { LayoutApp } from "@/app/components/layout/layout-app"
import { MessagesProvider } from "@/lib/chat-store/messages/provider"
import { getUserProfile } from "@/lib/user/api"

export const dynamic = "force-dynamic"

export default async function Home() {
  const user = await getUserProfile()

  if (user) {
    return (
      <MessagesProvider>
        <LayoutApp>
          <ChatContainer />
        </LayoutApp>
      </MessagesProvider>
    )
  }

  return <LandingPage />
}
