
function SectionHeader({ eyebrow, title, children }) {
    return (
        <div className="section-header">
            <p className="eyebrow">{eyebrow}</p>

            <h2>{title}</h2>

            {children && (
                <div className="section-header__description">
                    {children}
                </div>
            )}
        </div>
    );
}

export default SectionHeader;