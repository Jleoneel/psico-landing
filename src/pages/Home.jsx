import Hero from "../sections/Hero";
import ProblemsGrid from "../sections/ProblemsGrid";
import Services from "../sections/Services";
import AboutMe from "../sections/AboutMe";
import ProcessSteps from "../sections/ProcessSteps";
import Testimonials from "../sections/Testimonials";
import FAQ from "../sections/FAQ";
import CTAFinal from "../sections/CTAFinal";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemsGrid />
      <Services />
      <AboutMe />
      <ProcessSteps />
      <Testimonials />
      <FAQ />
      <CTAFinal />
    </>
  );
}
