import { SectionTitle } from '../../base'
import strategyData from '../../../content/strategyData.json'
import './index.css'

type StrategyItem = {
    id: number
    title: string
    description: string
    example: string
    outcome: string
    metric: string
    icon?: string
}

const StrategyIcon = ({ type }: { type?: string }) => {
    const iconStyle = { width: '48px', height: '48px' }

    if (type === 'project') {
        return (
            <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
            </svg>
        )
    }

    if (type === 'mentor') {
        return (
            <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M7 7l10 10" strokeLinecap="round" />
            </svg>
        )
    }

    if (type === 'tech') {
        return (
            <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="4" y="6" width="16" height="2" rx="1" />
                <rect x="4" y="11" width="16" height="2" rx="1" />
                <rect x="4" y="16" width="10" height="2" rx="1" />
            </svg>
        )
    }

    return (
        <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="9" />
        </svg>
    )
}

const StrategyCard = ({ item }: { item: StrategyItem }) => (
    <article className="strategy-card">
        <div className="strategy-icon-box">
            <StrategyIcon type={item.icon} />
        </div>
        <h3 className="strategy-title">{item.title}</h3>
        <p className="strategy-description">{item.description}</p>
    </article>
)

export const StrategySection = () => {
    const data: any = strategyData
    const items: StrategyItem[] = data.methodologies

    return (
        <section className="strategy-section">
            <div className="container">
                <SectionTitle title={data.title} subtitle={data.subtitle} />
                <div className="strategy-grid">
                    {items.map(item => (
                        <StrategyCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    )
}
