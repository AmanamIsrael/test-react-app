import { ContactWrapper } from "@/components/ContactWrapper";
import { Globe } from "@/components/Globe";

export default function Home() {
  return (
    <main className="w-screen bg-slate-900 text-white h-max md:h-screen pb-4 mb:pb-0">
      <div className="flex flex-col md:flex-row h-full w-full items-center gap-4">
        <ContactWrapper />
        <Globe />
      </div>
    </main>
  );
}
