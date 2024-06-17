import Navbar from "@/app/ui/navbar";
import Hero from "@/app/ui/hero";
import { BlurTop, BlurBottom } from "@/app/ui/blur";

export default function Home() {
  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-50">
        <Navbar />
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <BlurTop />
        <Hero />
        <BlurBottom />
      </div>
    </div>
  );
}
