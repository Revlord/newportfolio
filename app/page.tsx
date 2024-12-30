import { AppleCardsCarouselDemo } from "@/components/AppleCards";
import { Footer } from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

//this is page.tsx where mostly your home page code goes
export default function Home() {
  return ( //tailwind works, so does its extension
    <main className="relative bg-black-100 flex
    justify-center items-center flex-col
    mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        {/* <FloatingNav className=""
        navItems={navItems}/> */}
        <Hero/>
        <Grid/>
        <AppleCardsCarouselDemo/>
        <Footer></Footer>
      </div>
    </main>
  );
}
