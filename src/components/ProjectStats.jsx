
function ProjectStats({ projects }) {
    const totalProjects = projects.length;

    const completedProjects = projects.filter(
        (project) => project.status === 'completed'
    ).length;

    const inProgressProjects = projects.filter(
        (project) => project.status === 'in-progress'
    ).length;

    const plannedProject = projects.filter(
        (project) => project.status === 'planned'
    ).length;

    return (
        <section className="project-stats" aria-label="Статистика проектов">
            <article className="project-stat">
                <span className="project-stat__value">
                    {totalProjects}
                </span>

                <span className="project-stat__label">Всего проектов</span>
            </article>

            <article className="project-stat">
                <span className="project-stat__value">
                    {completedProjects}
                </span>

                <span className="project-stat__label">Завершено</span>
            </article>

            <article className="project-stat">
                <span className="project-stat__value">
                    {inProgressProjects}
                </span>

                <span className="project-stat__label">В работе</span>
            </article>

            <article className="project-stat">
                <span className="project-stat__value">
                    {plannedProject}
                </span>

                <span className="project-stat__label">Запланированно</span>
            </article>

        </section>
    );
}

export default ProjectStats;