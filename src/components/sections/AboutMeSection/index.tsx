import { SectionTitle } from '../../base'
import aboutMeData from '../../../content/aboutMeData.json'
import avatar from '../../../assets/images/about-me.png'
import './index.css'

export const AboutMeSection = () => {
    const data = aboutMeData as any;

    return (
        <section id="about" className="about-me">
            <div className="am-container">
                <SectionTitle title={data.title} subtitle={data.subtitle} />
                <div className="bio-section">
                    <div className="bio-left">
                        <div className="instructor-photo-wrapper">
                            <img src={avatar} alt="Hanife Kaptan" className="instructor-photo" />
                            {/* <div className="instructor-badge">Mentor</div> */}
                        </div>
                        <div className="instructor-labels">
                            <h3 className="instructor-name">{data.instructorName || 'Hanife Kaptan'}</h3>
                            <p className="instructor-role">AI Mühendisi & Teknik Mentor</p>
                        </div>
                    </div>
                    <div className="bio-right">
                        <p className="bio-text">{data.bio}</p>
                        {data.credentials && data.credentials.length > 0 && (
                            <ul className="credentials-list" aria-label="Öne çıkan nitelikler">
                                {data.credentials.map((c: string, i: number) => <li key={i}>{c}</li>)}
                            </ul>
                        )}
                        {data.why && <p className="bio-why">{data.why}</p>}
                        {data.experience && (
                            <ul className="experience-list" aria-label="Deneyim alanları">
                                {data.experience.map((e: string, i: number) => <li key={i}>{e}</li>)}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMeSection
