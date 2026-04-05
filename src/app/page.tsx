export default function Home() {
  return (
    <main className="min-h-screen bg-edgi-paper flex flex-col items-center justify-center px-6">
      <div className="max-w-2xl w-full">
        <p className="text-edgi-ink text-sm font-medium tracking-widest uppercase mb-6">
          Environmental Data & Governance Initiative
        </p>
        <h1 className="text-edgi-ink text-5xl font-bold leading-tight mb-6">
          Regional Climate Center<br />Tool Restoration
        </h1>
        <p className="text-edgi-gray text-lg leading-relaxed mb-10">
          NOAA's six Regional Climate Centers host nearly 200 climate tools 
          relied on by farmers, planners, researchers, and emergency managers. 
          Federal funding cuts are putting them at risk. We're documenting what's 
          being lost and making the case for restoration.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://forms.gle/LwjQZ7YwL6MshKV68"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-edgi-green text-edgi-ink font-medium px-6 py-3 rounded-full text-sm hover:bg-edgi-teal transition-colors"
          >
            Report a tool you use
          </a>
          <a
            href="mailto:restore.local.climate@envirodatagov.org"
            className="border border-edgi-ink text-edgi-ink font-medium px-6 py-3 rounded-full text-sm hover:bg-edgi-paperDark transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </main>
  )
}