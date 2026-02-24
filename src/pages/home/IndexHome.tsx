import Features from "./Features";
import Gallery from "./Gallery";
import Hero from "./Hero";
import Pricing from "./Pricing";
import SynthesisWorkflow from "./SynthesisWorkflow";

const IndexHome = () => {
  return (
    <div className="bg-black">
      <div id="hero">
        <Hero />
      </div>
      <div id="workflow">
        <SynthesisWorkflow />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
    </div>
  );
};

export default IndexHome;
