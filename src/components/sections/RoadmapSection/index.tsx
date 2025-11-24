import { SectionTitle } from '../../base'
import roadmapData from '../../../content/roadmapData.json'
import './index.css'

type Step = {
    id: number
    stage: string
    weekRange: string
    title: string
    shortTitle: string
    displayTitle?: string
    tags?: string
    description: string
    outcome: string
    deliverables: string[]
    icon?: string
}

const Icon = ({ name }: { name?: string }) => {
    if (name === 'ml') {
        return (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="10" cy="10" r="8" />
                <path d="M4 10h12M10 4v12" />
            </svg>
        )
    }
    if (name === 'deploy') {
        return (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10 3v14M5 8l5-5 5 5" />
            </svg>
        )
    }
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="4" y="4" width="12" height="12" rx="2" />
            <path d="M7 7h6v6H7z" />
        </svg>
    )
}

const RoadmapStep = ({ step, isLast }: { step: Step; isLast: boolean }) => (
    <div className="rs-step">
        <div className="rs-card">
            <div className="rs-stage-bar">
                <span className="rs-pill rs-pill-stage">{step.stage.toUpperCase()}</span>
                <span className="rs-pill rs-pill-weeks">{step.weekRange.toUpperCase()}</span>
            </div>
            <div className="rs-icon-box" aria-hidden>
                <Icon name={step.icon} />
            </div>
            <h3 className="rs-title">{step.displayTitle || step.title}</h3>
            <p className="rs-tags">{step.tags || step.shortTitle}</p>
            <p className="rs-desc">{step.description}</p>
            <div className="rs-output-box">
                <strong>ÇIKTI:</strong> <span>{step.outcome}</span>
            </div>
            <ul className="rs-deliverables">
                {step.deliverables.map(d => (
                    <li key={d}>{d}</li>
                ))}
            </ul>
        </div>
        {!isLast && <div className="rs-connector" aria-hidden />}
    </div>
)

export const RoadmapSection = () => {
    const data: any = roadmapData
    const steps: Step[] = data.roadmapSteps
    return (
        <section className="roadmap-section">
            <div className="container">
                <SectionTitle title={data.title} subtitle={data.subtitle} />
                <div className="rs-flow">
                    {steps.map((s, i) => (
                        <RoadmapStep key={s.id} step={s} isLast={i === steps.length - 1} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default RoadmapSection
