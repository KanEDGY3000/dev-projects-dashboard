
export const PROJECT_STATUSES = {
    all: 'all',
    completed: 'completed',
    inProgress: 'in-progress',
    planned: 'planned',
};

export const PROJECT_STATUS_LABELS = {
    [PROJECT_STATUSES.completed]: 'Завершён',
    [PROJECT_STATUSES.inProgress]: 'В работе',
    [PROJECT_STATUSES.planned]: 'Запланирован',
};

export const PROJECT_STATUS_FILTERS = [
    {
        value: PROJECT_STATUSES.all,
        label: 'Все',
    },
    {
        value: PROJECT_STATUSES.completed,
        label: 'Завершённые',
    },
    {
        value: PROJECT_STATUSES.inProgress,
        label: 'В работе',
    },
    {
        value: PROJECT_STATUSES.planned,
        label: 'Запланированные',
    },
];