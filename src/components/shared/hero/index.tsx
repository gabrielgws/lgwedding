import WeddingCountdown from "../WeddingCountdown";


export default function Hero() {
  return (
    <section
      className="w-full h-screen
      bg-[url('/images/bg-hero-white.webp')] bg-cover bg-center
      dark:bg-[url('/images/bg-hero.webp')] bg-no-repeat
      flex items-center justify-center flex-col gap-8"
    >
      <h1 className="font-serif text-5xl md:text-9xl">
        Save the date
      </h1>
      <h2 className="text-3xl md:text-7xl">
        20/04/2025
      </h2>
      <WeddingCountdown />
    </section>
  )
}