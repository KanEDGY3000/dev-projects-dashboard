
import { projects } from "../data/projects.js";
import { PROJECT_STATUS_LABELS } from "../data/projectStatuses.js";

function ProjectsCard({ project, isCompactView }) {
    return (
        <article
            className={isCompactView
                ? 'project-card project-card--compact'
                : 'project-card'}>
            <div className="project-card__header">
                <h3>{project.title}</h3>

                <div className="project-card__bages">
                    {project.featured && (
                        <span className="project-card__featured">
                            Featured
                        </span>
                    )}
                </div>

                <span className={`project-card__status project-card__status--${project.status}`}>
                    {PROJECT_STATUS_LABELS[project.status] || 'Без статуса'}
                </span>
            </div>

            {!isCompactView && (
                <p className="project-card__description">{project.description}</p>
            )}


            <ul className="project-card__technologies">
                {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                ))}
            </ul>

            {project.repoUrl ? (
                <a
                    className="project-card__link"
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                >
                    Открыть GitHub
                </a>) : (
                <span className="project-card__link project-card__link--disabled">
                    Репозиторий недоступен
                </span>
            )}

        </article>
    );
}

export default ProjectsCard;