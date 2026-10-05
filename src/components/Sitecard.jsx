import Icon from "./Icon.jsx";

function SiteCard({site}) {
    return (
        <a className="site-card" href={site.url} target="_blank" rel="noopener noreferrer">
            <div className="site-card__top">
                <div className="site-card__icon">{site.mono}</div>
                <div className="site-card__heading">
                    <h3>{site.name}</h3>
                    <span className="site-card__domain">{site.domain}</span>
                </div>
            </div>
            <p className="site-card__desc">{site.desc}</p>
            <div className="site-card__foot">
                <span className="tag tag--soft">{site.tag}</span>
                <span className={`site-card__status site-card__status--${site.status}`}>
                    <span className="site-card__status-dot" />
                    {site.status === "live" ? "Live" : "Forever alive"}
                </span>
                <span className="site-card__link">
                    Visit <Icon name="external" size={13} />
                </span>
            </div>
        </a>
    );
}

export default SiteCard;