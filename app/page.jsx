import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Slider from "@/components/Slider";
import Cardcontainer from "@/components/Cardcontainer";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Slider />
      <Cardcontainer />
    </main>
  );
}
