
function SectionHeader({ eyebrow, title, children }) {
    return (
        <div className="section-header">
            <p className="eyebrow">{eyebrow}</p>

            <h2>{title}</h2>

            {children && (
                <div>
                    {children}
                </div>
            )}
        </div>
    );
}

export default SectionHeader;