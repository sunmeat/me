import Icon from "./Icon.jsx";

function AppCard({app}) {
    return (
        <a className="app-card" href={app.url} target="_blank" rel="noopener noreferrer">
            <div className="app-card__top">
                <div className="app-card__icon">{app.mono}</div>
                <div className="app-card__heading">
                    <h3>{app.name}</h3>
                    <span className="app-card__pkg">{app.id}</span>
                </div>
            </div>
            <p className="app-card__desc">{app.desc}</p>
            <div className="app-card__foot">
                <span className="tag tag--soft">{app.tag}</span>
                {app.rating ? (
                    <span className="app-card__rating">
            <Icon name="star" size={13}/>
                        {app.rating}
          </span>
                ) : (
                    <span className="app-card__rating app-card__rating--new"></span>
                )}
                <span className="app-card__link">
          Google Play <Icon name="external" size={13}/>
        </span>
            </div>
        </a>
    );
}

export default AppCard;