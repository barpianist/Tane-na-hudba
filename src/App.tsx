/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Video from "./components/Video";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParallaxSection from "./components/ParallaxSection";

export default function App() {
  return (
    <div className="bg-zinc-950 text-zinc-100">
      <Navbar />
      <Hero />
      <ParallaxSection id="Kapela" bgImage="https://picsum.photos/seed/band/1920/1080?blur=4">
        <About />
      </ParallaxSection>
      <ParallaxSection id="Show" bgImage="https://picsum.photos/seed/show/1920/1080?blur=4">
        <Video />
      </ParallaxSection>
      <ParallaxSection id="Služby" bgImage="https://picsum.photos/seed/services/1920/1080?blur=4">
        <Services />
      </ParallaxSection>
      <ParallaxSection id="Galéria" bgImage="https://picsum.photos/seed/gallery/1920/1080?blur=4">
        <Gallery />
      </ParallaxSection>
      <ParallaxSection id="Referencie" bgImage="https://picsum.photos/seed/testimonials/1920/1080?blur=4">
        <Testimonials />
      </ParallaxSection>
      <ParallaxSection id="Kontakt" bgImage="https://picsum.photos/seed/contact/1920/1080?blur=4">
        <Contact />
      </ParallaxSection>
      <Footer />
    </div>
  );
}
