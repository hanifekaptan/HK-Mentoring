export interface HeroContent {
    title: string;
    subtitle: string;
    image?: string;
    cta: string;
    ctaUrl?: string;
}

export interface Technology {
    name: string;
    description: string;
    icon?: string;
}

export interface Module {
    id: number;
    title: string;
    description: string;
    duration: string;
    technologies: Technology[];
}

export interface ModulesData {
    modules: Module[];
}

export interface AboutContent {
    whyMe: string;
    methodology: string;
    strengths?: string[];
    portfolioUrl?: string;
    expertise?: ExpertiseItem[];
}

export interface ExpertiseItem {
    area: string;
    skills: string[];
}

export interface WhyCourseReason {
    id: number;
    icon: string;
    title: string;
    description: string;
}

export interface WhyCourseData {
    title: string;
    subtitle: string;
    reasons: WhyCourseReason[];
}

export interface StrategyItem {
    id: number;
    title: string;
    description: string;
    details: string[];
}

export interface StrategyData {
    title: string;
    subtitle: string;
    strategies: StrategyItem[];
}

export interface ExpertiseArea {
    id: number;
    area: string;
    icon: string;
    description: string;
    skills: string[];
    projects: string;
}

export interface ExpertiseData {
    title: string;
    subtitle: string;
    expertiseAreas: ExpertiseArea[];
}
