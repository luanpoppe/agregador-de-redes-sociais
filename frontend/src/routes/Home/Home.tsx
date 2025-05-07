import { Header } from "@/components/Header";
import { HomeContent } from "./HomeContent";

export function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row gap-6">
        <HomeContent />
      </div>
    </div>
  );
}
