
import { PROJECT_STATUSES } from "./projectStatuses";

export const projects = [
    {
        id: 1,
        title: 'Personal Page',
        description: 'Учебная личная страница с HTML, CSS и JavaScript.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        status: PROJECT_STATUSES.completed,
        // repoUrl: 'KanEDGY3000',
        featured: false,
    },
    {
        id: 2,
        title: 'Users Catalog',
        description: 'Каталог пользователей с загрузкой данных, поиском и избранным.',
        technologies: ['JavaScript', 'API', 'localStorage'],
        status: PROJECT_STATUSES.completed,
        // repoUrl: 'KanEDGY3000',
        featured: false,
    },
    {
        id: 3,
        title: 'Dev Projects Dashboard',
        description: 'React-приложение для отслеживания учебных и портфолио-проектов.',
        technologies: ['React', 'Vite', 'CSS'],
        status: PROJECT_STATUSES.inProgress,
        repoUrl: 'https://github.com/KanEDGY3000/dev-projects-dashboard',
        featured: true,
    },
    {
        id: 4,
        title: 'Weather App',
        description: 'Будущее приложение прогноза погоды с загрузкой данных из API.',
        technologies: ['React', 'API', 'CSS'],
        status: PROJECT_STATUSES.planned,
        // repoUrl: 'KanEDGY3000',
        featured: true,
    },
];