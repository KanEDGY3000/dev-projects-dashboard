function ProjectsCard({ project }) {
    return (
        <article className="project-card">
            <div className="project-card__header">
                <h3>{project.title}</h3>
                <span className="project-card__status">{project.status}</span>
            </div>

            <p className="project-card__description">{project.description}</p>

            <ul className="project-card__technologies">
                {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                ))}
            </ul>

        </article>
    );
}

export default ProjectsCard;