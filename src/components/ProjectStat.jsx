
function ProjectStat ( { value, label}) {
    return (
        <article className="project-stat">
            <span className="project-stat__value">
                {value}
            </span>

            <span className="project-stat__label">
                {label}
            </span>
        </article>
    );
}

export default ProjectStat;