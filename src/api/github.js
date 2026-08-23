const GITHUB_API_BASE_URL = 
    'https://api.github.com';

export async function fetchRepositoryInfo(owner, repoName) {
    const response = await fetch(
        `${GITHUB_API_BASE_URL}/repos/${owner}/${repoName}`
    );

    if (!response.ok) {
        throw new Error('Не удалось загрузить данные репозитория.')
    }

    return response.json();
}