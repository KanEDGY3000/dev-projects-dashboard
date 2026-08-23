import { useEffect, useState } from "react";
import { fetchRepositoryInfo } from "../api/github.js";

function GitHubRepoInfo() {
    const [repo, setRepo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        async function loadRepo() {
            try {
                setIsLoading(true);
                setErrorMessage('');

                const data = await fetchRepositoryInfo(
                    'KanEDGY3000',
                    'dev-projects-dashboard'
                );

                setRepo(data);
            } catch (error) {
                setErrorMessage(error.message);
            } finally {
                setIsLoading(false);
            }
        }

        loadRepo();
    }, []);

    return (
        <section className="repo-info">
            <p className="eyebrow">GitHubAPI</p>

            <h2>Информация о репозитории</h2>

            {isLoading && (
                <p className="repo-info_message">
                    Загружаем данные репозитория...
                </p>
            )}

            {errorMessage && (
                <p className="repo-info__message repo-info__message--error">
                    {errorMessage}
                </p>
            )}

            {repo && !isLoading && !errorMessage && (
                <div className="repo-info__stats">
                    <h3>{repo.name}</h3>

                    <p>
                        {repo.description || 'Описание репозитория не добавлено'}
                    </p>

                    <div className="repo-info__stats">
                        <span>⭐ Stars: {repo.stargazers_count}</span>
                        <span>⑂ Forks: {repo.forks_count}</span>
                    </div>
                </div>
            )}
        </section>
    );
}

export default GitHubRepoInfo;