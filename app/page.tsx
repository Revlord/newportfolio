import Hero from "@/components/Hero";
import { LampDemo } from "@/components/ui/Lamp";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

//this is page.tsx where mostly your home page code goes
export default function Home() {
  return ( //tailwind works, so does its extension
    <main className="relative bg-black-100 flex
    justify-center items-center flex-col
    mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <Hero/>
      </div>
    </main>
  );
}

//also just as a side note, IMPORT react icons, its so easy and fun to use!