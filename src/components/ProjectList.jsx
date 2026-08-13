import ProjectsCard from "./ProjectCard.jsx";
import { PROJECT_STATUS_FILTERS } from "../data/projectStatuses.js";

function ProjectsList({ project, selectedStatus, onStatusChange, }) {
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

            <div className="projects-grid">
                {project.map((project) => (
                    <ProjectsCard
                        key={project.id}
                        project={project}
                    />
                ))}
            </div>
        </section>
    );
}

export default ProjectsList;