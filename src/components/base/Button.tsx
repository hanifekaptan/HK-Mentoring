import './Button.css'

interface ButtonProps {
    children: React.ReactNode
    onClick?: () => void
    variant?: 'primary' | 'secondary' | 'teriary'
    className?: string
    disabled?: boolean
}

export const Button = ({
    children,
    onClick,
    variant = 'primary',
    className = '',
    disabled = false
}: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`btn btn-${variant} ${className}`}
            disabled={disabled}
        >
            {children}
        </button>
    )
}
