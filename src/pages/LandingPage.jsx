import ComparisonTable from '../components/ComparisonTable'
import FeatureShowcase from '../components/FeatureShowcase'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import PricingSection from '../components/PricingSection'

const LandingPage = () => (
  <div className="min-h-screen">
    <HeroSection />
    <FeatureShowcase />
    <PricingSection />
    <ComparisonTable />
    <Footer />
  </div>
)

export default LandingPage
