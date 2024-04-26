import { ContactWrapper } from "@/components/ContactWrapper";
import { Globe } from "@/components/Globe";

export default function Home() {
  return (
    <main className="w-screen bg-slate-900 text-white h-screen">
      <div className="flex h-full w-full items-center gap-4">
        <ContactWrapper />
        <Globe />
      </div>
    </main>
  );
}
