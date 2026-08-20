import ProjectsCard from "./ProjectCard.jsx";
import { PROJECT_STATUS_FILTERS } from "../data/projectStatuses.js";
import { projects } from "../data/projects.js";

function ProjectsList({
    projects,
    selectedStatus,
    onStatusChange,
    isCompactView,
    onViewToggle,
}) {
    return (
        <section className="projects-section">
            <div className="section-header">
                <p className="eyebrow">Portfolio progress</p>

                <h2>Проекты</h2>

                <p>Здесь собраны учебные и портфолио-проеты, которые показывают рост frontend-навыков</p>

            </div>

            <div className="status-filters" aria-label="Фильтр проектов по статусу">
                {PROJECT_STATUS_FILTERS.map((filter) => (
                    <button
                        className={
                            selectedStatus === filter.value
                                ? 'status-filter status-filter--active'
                                : 'status-filter'
                        }
                        key={filter.value}
                        type="button"
                        onClick={() => onStatusChange(filter.value)}
                    >
                        {filter.label}
                    </button>
                ))}
            </div>

            <button
                className="view-toggle"
                type="button"
                onClick={onViewToggle}
            >
                {isCompactView ? 'Обычный вид' : 'Компактный вид'}
            </button>

            {projects.length > 0 ? (
                <div className="projects-grid">
                    {projects.map((project) => (
                        <ProjectsCard
                            key={project.id}
                            project={project}
                            isCompactView={isCompactView}
                        />
                    ))}
                </div>
            ) : (
                <p className="empty-message">
                    Проекты не найдены
                </p>
            )}

        </section>
    );
}

export default ProjectsList;