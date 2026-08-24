function RepoSearchForm({
    ownerInput,
    repoNameInput,
    onOwnerInputChange,
    onRepoNameInputChange,
    onSubmit,
    isLoading,
}) {
    return (
        <form className="repo-info__form" onSubmit={onSubmit}>
            <label>
                Owner
                <input
                    type="text"
                    value={ownerInput}
                    onChange={(event) => onOwnerInputChange(event.target.value)}
                    placeholder="Например: facebook"
                />
            </label>

            <label>
                Repository
                <input
                    type="text"
                    value={repoNameInput}
                    onChange={(event) => onRepoNameInputChange(event.target.value)}
                    placeholder="Например: react"
                />
            </label>

            <button type="submit" disabled={isLoading}>
                {isLoading ? 'Загружаем...' : 'Загрузить'}
            </button>
        </form>
    );
}

export default RepoSearchForm;