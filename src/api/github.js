const REPO_API_URL = 
    'https://api.github.com/repos/KanEDGY3000/dev-projects-dashboard';

export async function fetchRepositoryInfo() {
    const response = await fetch(REPO_API_URL);

    if (!response.ok) {
        throw new Error('Не удалось загрузить данные репозитория.')
    }

    return response.json();
}