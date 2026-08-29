import { useCallback, useEffect, useState } from 'react';
import { fetchRepositoryInfo } from '../api/github.js';
import RepoSearchForm from './RepoSearchForm.jsx';
import RepoCard from './RepoCard.jsx';

function GitHubRepoInfo({ owner, repoName }) {
    const [repo, setRepo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    const [ownerInput, setOwnerInput] = useState('');
    const [repoNameInput, setRepoNameInput] = useState('');

    const [activeRepository, setActiveRepository] = useState({
        owner,
        repoName,
    });

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
            setRepo(null);
            setErrorMessage(error.message);
        } finally {
            setIsLoading(false);
        }
    }, [activeRepository]);

    useEffect(() => {
        loadRepo();
    }, [loadRepo]);

    function handleSubmit(event) {
        event.preventDefault();

        const trimmedOwner = ownerInput.trim();
        const trimmedRepoName = repoNameInput.trim();

        if (!trimmedOwner || !trimmedRepoName) {
            setErrorMessage('Заполни owner и название репозитория.');
            return;
        }

        setActiveRepository({
            owner: trimmedOwner,
            repoName: trimmedRepoName,
        });

        setOwnerInput('');
        setRepoNameInput('');
    }

    return (
        <section className="repo-info">
            <p className="eyebrow">GitHub API</p>

            <h2>Информация о репозитории</h2>

            <p className='repo-info__current'>
                Сейчас открыт: {activeRepository.owner} / {activeRepository.repoName}
            </p>

            {isLoading && (
                <p className="repo-info__message">
                    Загружаем данные репозитория...
                </p>
            )}

            {errorMessage && (
                <p className="repo-info__message repo-info__message--error">
                    {errorMessage}
                </p>
            )}

            {repo && !isLoading && !errorMessage && (
                <RepoCard repo={repo} />
            )}

            <button
                className="repo-info__refresh"
                type="button"
                onClick={loadRepo}
                disabled={isLoading}
            >
                {isLoading ? 'Обновляем...' : 'Обновить данные'}
            </button>

            <div className='repo-info__manual'>
                <h3>Загрузить другой репозиторий</h3>

                <RepoSearchForm
                ownerInput={ownerInput}
                repoNameInput={repoNameInput}
                onOwnerInputChange={setOwnerInput}
                onRepoNameInputChange={setRepoNameInput}
                onSubmit={handleSubmit}
                isLoading={isLoading}
                />
            </div>
        </section>
    );
}

export default GitHubRepoInfo;