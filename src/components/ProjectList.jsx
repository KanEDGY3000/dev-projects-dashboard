import ProjectsCard from "./ProjectCard.jsx";

function ProjectsList({ project }) {
    return (
        <section className="projects-section">
            <div className="section-header">
                <p className="eyebrow">Portfolio progress</p>

                <h2>Проекты</h2>

                <p>Здесь собраны учебные и портфолио-проеты, которые показывают рост frontend-навыков</p>

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