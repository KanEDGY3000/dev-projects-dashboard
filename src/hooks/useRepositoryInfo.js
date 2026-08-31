import { useCallback, useEffect, useState } from 'react';
import { fetchRepositoryInfo } from '../api/github.js';

export function useRepositoryInfo(activeRepository) {

    const [repo, setRepo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

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

    return {
        repo,
        isLoading,
        errorMessage,
        loadRepo,
    }
};