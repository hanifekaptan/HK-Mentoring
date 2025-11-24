import { HeroSection, RoadmapSection, LearningPathSection, PricingSection, StrategySection, AboutMeSection, CTASection, Footer } from '../components'
import './Home.css'

export const Home = () => {
    return (
        <div className="home">
            <HeroSection />
            <RoadmapSection />
            <LearningPathSection />
            <PricingSection />
            <StrategySection />
            <AboutMeSection />
            <CTASection />
            <Footer />
        </div>
    )
}
