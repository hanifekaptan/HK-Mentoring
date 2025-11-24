import { SectionTitle } from '../../base'
import testimonialsData from '../../../content/testimonialsData.json'
import './index.css'

const getImagePath = (photoUrl: string | undefined) => {
    if (!photoUrl) return undefined;
    try {
        return new URL(`../../../assets/images/${photoUrl}`, import.meta.url).href;
    } catch {
        return undefined;
    }
}

interface TestimonialProps {
    name: string;
    role?: string;
    text: string;
    metrics?: string;
    github?: string;
    photoUrl?: string;
    highlight?: string;
}

const TestimonialCard = ({ name, role, text, metrics, github, photoUrl, highlight }: TestimonialProps) => {
    const imageSrc = getImagePath(photoUrl);
    return (
        <article className="testimonial-card" aria-label={`${name} başarı hikayesi`}>
            <div className="testimonial-avatar-wrapper">
                {imageSrc ? <img src={imageSrc} alt={name} className="testimonial-photo" /> : <div className="testimonial-avatar" aria-hidden="true" />}
            </div>
            <div className="testimonial-content">
                <header className="testimonial-header">
                    <p className="testimonial-author">{name}</p>
                    {role && <p className="testimonial-role">{role}</p>}
                </header>
                <p className="testimonial-text">"{text}"</p>
                {highlight && <p className="testimonial-highlight">{highlight}</p>}
                {metrics && <p className="testimonial-metrics">{metrics}</p>}
                {github && (
                    <a href={`https://${github}`} target="_blank" rel="noopener noreferrer" className="testimonial-github">
                        {github}
                    </a>
                )}
            </div>
        </article>
    )
}

export const TestimonialsSection = () => {
    const data = testimonialsData as any;

    return (
        <section className="testimonials-section">
            <div className="testimonials-container">
                <SectionTitle title={data.title} subtitle={data.subtitle} />
                {data.testimonials && data.testimonials.length > 0 && (
                    <div className="testimonials-grid">
                        {data.testimonials.map((t: any) => (
                            <TestimonialCard
                                key={t.id}
                                name={t.name}
                                role={t.role}
                                text={t.text}
                                metrics={t.metrics}
                                github={t.github}
                                photoUrl={t.photoUrl}
                                highlight={t.highlight}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default TestimonialsSection
