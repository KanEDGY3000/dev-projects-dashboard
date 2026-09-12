function RepoSearchForm({
    ownerInput,
    repoNameInput,
    onOwnerInputChange,
    onRepoNameInputChange,
    onSubmit,
    isLoading,
    isSearchDisabled,
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
                    disabled={isLoading}
                    autoComplete="off"
                />
            </label>

            <label>
                Repository
                <input
                    type="text"
                    value={repoNameInput}
                    onChange={(event) => onRepoNameInputChange(event.target.value)}
                    placeholder="Например: react"
                    disabled={isLoading}
                    autoComplete="off"
                />
            </label>

            <button type="submit" disabled={isSearchDisabled}>
                {isLoading ? 'Загружаем...' : 'Загрузить'}
            </button>
        </form>
    );
}

export default RepoSearchForm;