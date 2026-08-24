function RepoCard({ repo }) {
    return (
        <div className="repo-info__card">
            <h3>{repo.name}</h3>

            <p>
                {repo.description || 'Описание репозитория не добавлено.'}
            </p>

            <div className="repo-info__stats">
                <span>⭐ Stars: {repo.stargazers_count}</span>
                <span>⑂ Forks: {repo.forks_count}</span>
            </div>
        </div>
    );
}

export default RepoCard;