export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#fef9f7] relative flex items-center justify-center px-6">

      {/* Background Layer */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(255, 160, 146, 0.25) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 244, 228, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(255, 160, 146, 0.15) 0%, transparent 50%)
          `,
        }}
      />

      {/* Content Layer */}
      <div className="relative z-10 mx-auto max-w-2xl text-center">

        <h1 className="text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
          Chhotelal
        </h1>

        <p className="mt-5 text-lg text-muted sm:text-xl">
          Small name.{" "}
          <span className="font-medium text-foreground">
            Big potential.
          </span>
        </p>

      </div>

    </main>
  );
}