import Image from "next/image";

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


        <Image
          src="/logo.png"
          alt="Chhotelal Logo"
          width={300}
          height={200}
          priority
          className="mx-auto mt-6"
        />

      </div>

    </main>
  );
}