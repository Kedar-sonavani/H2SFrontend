import Navbar from './components/navbar';
import HeroSection from './components/hero-section';
import FeaturesSection from './components/feature';
import IntroductionSection from './components/IntroductionSection';
// import Testimonials from './components/Testimonials';
import FeaturesShowcase from './components/FeaturesShowcase';
// import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/footer';

// This component assumes Tailwind CSS is set up in your React project.
// You can add the Inter font in your main CSS file or index.html.

const App = () => {
    return (
        <div className="bg-black" style={{ fontFamily: "'Inter', sans-serif" }}>
            <Navbar />
            <main>
                <HeroSection />
                <FeaturesSection />
                <FeaturesShowcase />
                <IntroductionSection />
                {/* <Testimonials /> */}
            </main>
            <Footer />
        </div>
    );
};

export default App;
