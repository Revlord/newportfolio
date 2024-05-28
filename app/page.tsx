
import { Footer } from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { LampDemo } from "@/components/ui/Lamp";
import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

//this is page.tsx where mostly your home page code goes
export default function Home() {
  return ( //tailwind works, so does its extension
    <main className="relative bg-black-100 flex
    justify-center items-center flex-col
    overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav className=""
        navItems={navItems}/>
        <Hero/>
        <Grid/>
        <RecentProjects/>
        <Footer></Footer>
      </div>
    </main>
  );
}

//also just as a side note, IMPORT react icons, its so easy and fun to use!