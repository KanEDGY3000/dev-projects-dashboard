import ProjectsCard from "./ProjectCard.jsx";
import ProjectStatusFilters from "./ProjectStatusFilters.jsx";
import SectionHeader from "./SectionHeader.jsx";

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
                eyebrow="Portfolio progress"
                title="Проекты"
            >
                <p>
                    Здесь собраны учебные и портфолио-проекты, которые показывают рост frontend-навыков
                </p>
            </SectionHeader>

            <ProjectStatusFilters
                selectedStatus={selectedStatus}
                onStatusChange={onStatusChange}
            />

            <button
                className="view-toggle"
                type="button"
                onClick={onViewToggle}
                aria-pressed={isCompactView}
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