import { Button } from '../../base'
import heroContent from '../../../content/heroData.json'
import './index.css'

const getImageUrl = (imageName: string) => {
    return new URL(`../../../assets/images/${imageName}`, import.meta.url).href
}

export const HeroSection = () => {
    const hc = heroContent as any
    const bgUrl = hc.image ? getImageUrl(hc.image) : undefined
    const socialProof = hc.socialProof

    return (
        <section className="hero" style={bgUrl ? { backgroundImage: `url(${bgUrl})` } : undefined}>
            <div className="hero-overlay">
                <div className="hero-content">
                    <h1 className="hero-title">{hc.title}</h1>
                    <p className="hero-subtitle">{hc.subtitle}</p>
                    {socialProof && (
                        <div className="hero-social-proof">
                            <span>✓ {socialProof.flexibleLearning}</span>
                            <span>✓ {socialProof.personalizedSupport}</span>
                            <span>✓ {socialProof.realProjects}</span>
                        </div>
                    )}
                    <Button variant="teriary" className="hero-cta" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                        {hc.ctaText}
                    </Button>
                </div>
            </div>
        </section>
    )
}
