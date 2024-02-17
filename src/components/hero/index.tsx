import WeddingCountdown from '../WeddingCountdown';

export default function Hero() {
  return (
    <section
      className="w-full h-screen
      bg-[url('/images/bg-hero-white.webp')]
      dark:bg-[url('/images/bg-hero.webp')] bg-center bg-no-repeat
      flex items-center justify-center flex-col gap-8"
    >
      <h1 className="font-serif text-9xl">
        Save the date
      </h1>
      <h2 className="text-7xl">
        20/04/2025
      </h2>
      <WeddingCountdown />
    </section>
  )
}