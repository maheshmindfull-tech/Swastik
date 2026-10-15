import Belief from "../components/Belief";
import BrandStrip from "../components/BrandStrip";
import Expertise from "../components/Expertise";
import HappyClients from "../components/HappyClients";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Welcome from "../components/Welcome";

export default function Home() {
  return (
    <>
      <Hero />
      <Belief />
      <Welcome />
      <Projects />
      <BrandStrip />
      <Expertise />
      <HappyClients />
      <Testimonials />
    </>
  );
}
