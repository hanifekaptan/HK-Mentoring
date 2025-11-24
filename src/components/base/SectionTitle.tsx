import './SectionTitle.css'

interface SectionTitleProps {
    title: string
    subtitle?: string
    className?: string
}

export const SectionTitle = ({ title, subtitle, className = '' }: SectionTitleProps) => {
    return (
        <div className={`section-title ${className}`}>
            <h2 className="section-title-main">{title}</h2>
            {subtitle && <p className="section-title-sub">{subtitle}</p>}
        </div>
    )
}
