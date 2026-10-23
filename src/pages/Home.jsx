import Belief from "../components/Belief";
import useSeo from "../hooks/useSeo";
import { homeSeo } from "../seo";
import BrandStrip from "../components/BrandStrip";
import Expertise from "../components/Expertise";
import HappyClients from "../components/HappyClients";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Welcome from "../components/Welcome";

export default function Home() {
  useSeo(homeSeo);

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
