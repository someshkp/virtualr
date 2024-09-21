import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Price from "./components/Price";
import Testimonials from "./components/Testimonials";
import Workflow from "./components/Workflow";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 0x-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Price />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}

export default App;
