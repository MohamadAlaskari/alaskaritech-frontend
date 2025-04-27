import About from "@/components/sections/about/About";
import Banner from "@/components/sections/banner/Banner";
import Blog from "@/components/sections/blog/Blog";
import Contact from "@/components/sections/contact/Contact";
import Hero from "@/components/sections/hero/Hero";
import Services from "@/components/sections/services/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <About/>
      <Services/>
      <Blog/>
      <Banner/>
      <Contact/>
    </>

  );
}
