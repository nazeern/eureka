import { BlurTop, BlurBottom } from "../ui/blur";
import Navbar from "../ui/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-50">
        <Navbar />
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <BlurTop />
        <div className="h-screen bg-background flex flex-col items-center my-20">
          {children}
        </div>
        <BlurBottom />
      </div>
    </div>
  );
}
