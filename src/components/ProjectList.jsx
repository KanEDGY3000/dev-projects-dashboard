import ProjectsCard from "./ProjectCard.jsx";
import ProjectStatusFilters from "./ProjectStatusFilters.jsx";
import SectionHeader from "./SectionHeader.jsx";
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
            <SectionHeader
                eyebrow="GitHub API"
                title="Информация о репозитории"
            >
                Здесь собраны учебные и портфолио-проеты, которые показывают рост frontend-навыков
            </SectionHeader>

            <ProjectStatusFilters
                selectedStatus={selectedStatus}
                onStatusChange={onStatusChange}
            />

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