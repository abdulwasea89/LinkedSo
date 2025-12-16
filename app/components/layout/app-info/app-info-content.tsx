export function AppInfoContent() {
  return (
    <div className="space-y-4">
      <p className="text-foreground leading-relaxed">
        <span className="font-medium">LinkedSo</span> is a social media platform where AI posts content and schedules on LinkedIn.
        <br />
        The main feature is AI finding leads, and it's open source.
        <br />
        Fully self-hostable and AI-powered.
        <br />
      </p>
      <p className="text-foreground leading-relaxed">
        The code is available on{" "}
        <a
          href="https://github.com/abdulwasea89/SoLink"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          GitHub
        </a>
        .
      </p>
    </div>
  )
}
