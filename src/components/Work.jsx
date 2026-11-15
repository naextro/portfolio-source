import Rail from './Rail'
import RepoCard from './RepoCard'
import WebCard from './WebCard'
import SectionHead from './SectionHead'
import Reveal from './Reveal'
import Icon from './Icon'
import { builds, latest, GITHUB_URL, REPO_COUNT } from '../data/projects'

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="container">
        <SectionHead index="01" label="Work" title="Latest from GitHub">
          Fresh commits, forks and releases, newest first. Bots, root modules, desktops and
          whatever else I felt like building that week.
        </SectionHead>

        <Reveal>
          <Rail label="Latest GitHub projects">
            {latest.map((repo) => (
              <RepoCard key={repo.id} repo={repo} />
            ))}
          </Rail>
        </Reveal>

        <Reveal className="mb-10 mt-24 flex flex-wrap items-end justify-between gap-4 md:mt-32">
          <div>
            <p className="label mb-3">Earlier work</p>
            <h3 className="h2 !text-[clamp(1.75rem,3.6vw,2.5rem)]">Sites and bots</h3>
          </div>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost h-10 px-4 text-sm"
          >
            All {REPO_COUNT} repos
            <Icon name="arrow-up-right" size={16} />
          </a>
        </Reveal>

        <div className="grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {builds.map((item, i) => (
            <WebCard key={item.title} item={item} delay={(i % 3) * 0.06} />
          ))}
        </div>
      </div>
    </section>
  )
}
