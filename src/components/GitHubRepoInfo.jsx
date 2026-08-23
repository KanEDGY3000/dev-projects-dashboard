import { useCallback, useEffect, useState } from "react";
import { fetchRepositoryInfo } from "../api/github.js";

function GitHubRepoInfo({ owner, repoName }) {
    const [repo, setRepo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    const loadRepo = useCallback(async () => {
        try {
            setIsLoading(true);
            setErrorMessage('');

            const data = await fetchRepositoryInfo(owner, repoName);

            setRepo(data);
        } catch (error) {
            setErrorMessage(error.message);
        } finally {
            setIsLoading(false);
        }
    }, [owner, repoName]);

    useEffect(() => {
        loadRepo();
    }, [loadRepo]);

    return (
        <section className="repo-info">
            <p className="eyebrow">GitHubAPI</p>

            <h2>Информация о репозитории</h2>

            <button
                className="repo-info__refresh"
                type="button"
                onClick={loadRepo}
                disabled={isLoading}
            >
                {isLoading ? 'Обновляем...' : 'Обновить данные'}
            </button>

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