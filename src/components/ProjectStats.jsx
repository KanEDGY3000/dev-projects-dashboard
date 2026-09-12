
import { PROJECT_STATUSES } from "../data/projectStatuses.js";
import ProjectStat from "./ProjectStat.jsx";

function ProjectStats({ projects }) {
    const totalProjects = projects.length;

    const completedProjects = projects.filter(
        (project) => project.status === PROJECT_STATUSES.completed
    ).length;

    const inProgressProjects = projects.filter(
        (project) => project.status === PROJECT_STATUSES.inProgress
    ).length;

    const plannedProject = projects.filter(
        (project) => project.status === PROJECT_STATUSES.planned
    ).length;

    return (
        <section className="project-stats" aria-label="Статистика проектов">
            <ProjectStat
                value={totalProjects}
                label="Всего проектов"
            />

            <ProjectStat
                value={completedProjects}
                label="Завершено"
            />

            <ProjectStat
                value={inProgressProjects}
                label="В работе"
            />

            <ProjectStat
                value={plannedProject}
                label="Запланированно"
            />
        </section>
    );
}

export default ProjectStats;