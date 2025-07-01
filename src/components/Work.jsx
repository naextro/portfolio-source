import PropTypes from "prop-types"
import ProjectCard from "./ProjectCard";



const Work = () => {
const works = [
  {
    imgSrc: 'images/anon.png',
    title: 'E-Commerce Landing Page',
    tags: ['Commerce', 'Development'],
    projectLink: 'https://aanon.vercel.app/'
  },
  {
    imgSrc: 'images/aureoles_0.jpg',
    title: 'Aureoles Discord Bot',
    tags: ['Development', 'API'],
    projectLink: 'https://github.com/naextro/AureolesBot'
  },
  {
    imgSrc: 'images/vlc.png',
    title: 'VLC Discord Rich Presence',
    tags: ['API', 'Development'],
    projectLink: 'https://github.com/naextro/VLC_RPC'
  },
  {
    imgSrc: 'images/cryptknex.png',
    title: 'Crypto wallet landing page',
    tags: ['Commerce', 'Development'],
    projectLink: 'https://cryptknex.vercel.app/'
  },

];




  return (
    <section id="work" className="section">
        <div className="container">
            <h2 className="headline-2 mb-3">
                My portfolio Highlights
            </h2>
            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({imgSrc,title,tags,projectLink},key)=>(
                    <ProjectCard 
                    key={key}
                    imgsrc={imgSrc}
                    title={title}
                    tags={tags}
                    projectLink={projectLink}
                    
                    
                    />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Work