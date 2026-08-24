import { useCallback, useEffect, useState } from "react";
import { fetchRepositoryInfo } from "../api/github.js";

function GitHubRepoInfo({ owner, repoName }) {
    const [repo, setRepo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const [ownerInput, setOwnerInput] = useState('');
    const [repoNameInput, setRepoNameInput] = useState('');
    
    const [ activeRepository, setActiveRepository] = useState({
        owner,
        repoName
    })

    const loadRepo = useCallback(async () => {
        try {
            setIsLoading(true);
            setErrorMessage('');

            const data = await fetchRepositoryInfo(
                activeRepository.owner,
                activeRepository.repoName
            );

            setRepo(data);
        } catch (error) {
            setErrorMessage(error.message);
        } finally {
            setIsLoading(false);
        }
    }, [activeRepository]);

    function handleSubmit(event) {
        event.preventDefault();

        const trimmedOwner = ownerInput.trim();
        const trimmedRepoName = repoNameInput.trim();

        if (!trimmedOwner || !trimmedRepoName) {
            setErrorMessage('Заполни owner и название проекта');
            return;
        }

        setActiveRepository({
            owner: trimmedOwner,
            repoName: trimmedRepoName
        });
    } 

    useEffect(() => {
        loadRepo();
    }, [loadRepo]);

    return (
        <section className="repo-info">
            <p className="eyebrow">GitHubAPI</p>

            <h2>Информация о репозитории</h2>

            <form className="repo-info__form" onSubmit={handleSubmit}>
                <label>
                    Owner
                    <input
                        type="text"
                        value={ownerInput}
                        onChange={(event) => setOwnerInput(event.target.value)}
                        placeholder="Например: facebook" 
                    />
                </label>

                <label>
                    Repository
                    <input 
                        type="text"
                        value={repoNameInput}
                        onChange={(event) => setRepoNameInput(event.target.value)}
                        placeholder="Например: react"
                    /> 
                </label>

                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Загружаем...' : 'Загрузить'}
                </button>
            </form>

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