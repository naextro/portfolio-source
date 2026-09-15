import PropTypes from "prop-types"
import ProjectCard from "./ProjectCard";
import { useCMS } from '../cms/CMSContext'

const Work = () => {
    const { content } = useCMS();

    return (
        <section id="work" className="section">
            <div className="container">
                <h2 className="headline-2 mb-8 reveal-up">
                    My portfolio Highlights
                </h2>
                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {content.work.map(({imgSrc,title,tags,projectLink},key)=>(
                        <ProjectCard 
                        key={key}
                        imgsrc={imgSrc}
                        title={title}
                        tags={tags}
                        projectLink={projectLink}
                        classes="reveal-up"
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Work