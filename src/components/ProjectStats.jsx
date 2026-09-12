
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

    const stats = [
        {
            id: 'total',
            value: totalProjects,
            label: 'Всего проектов',
        },
        {
            id: 'completed',
            value: completedProjects,
            label: 'Завершено',
        },
        {
            id: 'in-progress',
            value: inProgressProjects,
            label: 'В работе',
        },
        {
            id: 'planned',
            value: plannedProject,
            label: 'Запланировано',
        },
    ]

    return (
        <section className="project-stats" aria-label="Статистика проектов">
            {stats.map((stats) => (
                <ProjectStat
                    key={stats.id}
                    value={stats.value}
                    label={stats.label}
                />
            ))}
        </section>
    );
}

export default ProjectStats;