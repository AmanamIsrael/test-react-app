import { Globe } from "@/components/Globe";

export default function Home() {
  return (
    <main className="w-screen bg-slate-900 text-white h-screen">
      <div className="flex h-full w-full items-center gap-4">
        <div className="w-full h-full grid bg-slate-800 place-content-center">
          <div className="font-medium w-full h-max">Contact Us</div>
        </div>

        <Globe />
      </div>
    </main>
  );
}
