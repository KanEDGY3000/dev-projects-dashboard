
import { PROJECT_STATUS_LABELS } from "../data/projectStatuses";

function ProjectsCard({ project }) {
    return (
        <article className="project-card">
            <div className="project-card__header">
                <h3>{project.title}</h3>
                <span className={`project-card__status project-card__status--${project.status}`}>
                    {PROJECT_STATUS_LABELS[project.status] || 'Без статуса'}
                </span>
            </div>

            <p className="project-card__description">{project.description}</p>

            <ul className="project-card__technologies">
                {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                ))}
            </ul>

            {project.repoUrl && (
                <a
                    className="project-card__link"
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                >
                    Открыть GitHub
                </a>)}

        </article>
    );
}

export default ProjectsCard;