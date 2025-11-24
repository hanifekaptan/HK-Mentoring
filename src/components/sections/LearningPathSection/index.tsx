import { SectionTitle } from '../../base'
import learningPathData from '../../../content/learningPathData.json'
import './index.css'

type Module = {
    id: number
    title: string
    summary: string
    hours: string
    projectOutput: string
    topics: string[]
}

const LearningCard = ({ module }: { module: Module }) => (
    <article className="lp-card">
        <header className="lp-card-header">
            <div className="lp-module-meta">
                <span className="lp-module-pill">Modül {module.id}</span>
                <span className="lp-hours">
                    {module.hours}
                </span>
            </div>
            <h3 className="lp-title">{module.title}</h3>
            <div className="lp-output">
                <strong>Çıktı:</strong>
                <span>{module.projectOutput}</span>
            </div>
        </header>
        <div className="lp-card-content">
            <p className="lp-summary">{module.summary}</p>
            <ul className="lp-topics">
                {module.topics.map(topic => (
                    <li key={topic}>{topic}</li>
                ))}
            </ul>
        </div>
    </article>
)

export const LearningPathSection = () => {
    const data: any = learningPathData
    const modules: Module[] = data.modules

    return (
        <section id="modules" className="learningpath-section">
            <div className="lp-container">
                <SectionTitle title={data.title} subtitle={data.subtitle} />
                <div className="lp-grid">
                    {modules.map(module => (
                        <LearningCard key={module.id} module={module} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default LearningPathSection
