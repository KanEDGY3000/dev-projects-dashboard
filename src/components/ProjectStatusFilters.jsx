
import { PROJECT_STATUS_FILTERS } from "../data/projectStatuses.js";

function ProjectStatusFilters({
    selectedStatus,
    onStatusChange,
}) {
    return (
        <div 
        className="status-filters" 
        aria-label="Фильтр проектов по статусу"
        role="group"
        >
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
                    aria-pressed={selectedStatus === filter.value}
                >
                    {filter.label}
                </button>
            ))}
        </div>
    );
}

export default ProjectStatusFilters;