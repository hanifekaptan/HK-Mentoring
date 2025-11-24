import { SectionTitle } from '../../base'
import pricingData from '../../../content/pricingData.json'
import './index.css'

type PricingOption = {
    id: number
    title: string
    price: string
    currency: string
    duration: string
    includes: string[]
    excludes: string[]
    bestFor: string
    highlighted: boolean
}

type ComparisonFeature = {
    label: string
    starter: string | boolean
    flexible: string | boolean
}

const PriceCard = ({ opt }: { opt: PricingOption }) => (
    <article className={`price-card ${opt.highlighted ? 'price-card-highlight' : ''}`}>
        {opt.highlighted && <div className="price-badge">Popüler</div>}
        <h3 className="price-title">{opt.title}</h3>
        <div className="price-amount">
            <strong>{opt.price}</strong>
            <span className="price-currency">{opt.currency}</span>
        </div>
        <div className="price-duration">{opt.duration}</div>
        <div className="price-includes">
            <ul>
                {opt.includes.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
        {opt.excludes.length > 0 && (
            <div className="price-excludes">
                <ul>
                    {opt.excludes.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
        )}
    </article>
)

export const PricingSection = () => {
    const data: any = pricingData
    const options: PricingOption[] = data.pricingOptions
    const features: ComparisonFeature[] = data.comparisonFeatures

    const renderFeatureStatus = (val: string | boolean) => {
        if (typeof val === 'boolean') {
            return val ? <span className="check-mark">✓</span> : <span className="x-mark">✗</span>
        }
        const normalized = val.toLowerCase()
        if (normalized.includes('dahil değil')) {
            return <span className="x-mark">✗</span>
        }
        if (normalized.includes('dahil')) {
            return <span className="check-mark">✓</span>
        }
        return <span style={{ fontSize: '0.7rem', color: '#5563a3' }}>{val}</span>
    }

    return (
        <section id="pricing" className="pricing-section">
            <div className="ps-container">
                <SectionTitle title={data.title} subtitle={data.subtitle} />

                <div className="pricing-cards">
                    {options.map(opt => (
                        <PriceCard key={opt.id} opt={opt} />
                    ))}
                </div>

                <div className="pricing-comparison">
                    <table className="comparison-table">
                        <thead>
                            <tr>
                                <th className="comparison-header-empty"></th>
                                <th className="comparison-header">Başlangıç</th>
                                <th className="comparison-header">Esnek Mentörlük</th>
                            </tr>
                        </thead>
                        <tbody>
                            {features.map((feat, i) => (
                                <tr key={i}>
                                    <td className="comparison-label">{feat.label}</td>
                                    <td className="comparison-value">{renderFeatureStatus(feat.starter)}</td>
                                    <td className="comparison-value">{renderFeatureStatus(feat.flexible)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="pricing-cta">
                    <h3 className="cta-title">{data.ctaText}</h3>
                    <p className="cta-subtitle">{data.ctaSubtext}</p>
                    <a href="#contact" className="cta-button">{data.ctaButtonText}</a>
                </div>
            </div>
        </section>
    )
}

export default PricingSection
