export default function Home() {
  return (
    <main className="min-h-screen p-10 bg-neutral-950">
      <h1 className="font-display text-[64px] leading-[0.96] tracking-display">
        Welcome, <em className="italic text-neutral-200">duelist</em>.
      </h1>

      <p className="text-neutral-200 text-[15px] mt-3 max-w-md">
        Click below to start a 1v1 timed coding match.
      </p>

      <button
        className="mt-6 bg-mint-300 text-neutral-1000 rounded-sm font-semibold text-[13px]
                   shadow-mint-300 hover:bg-mint-500 transition"
      >
        Start match
      </button>
    </main>
  );
}