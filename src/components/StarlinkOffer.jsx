import "./styles/StarlinkOffer.css";

function StarlinkOffer() {
    return (
        <section className="starlink-offer" aria-label="Starlink referral offer">
            <div className="starlink-offer__space" aria-hidden="true">
                <span className="star star--1" />
                <span className="star star--2" />
                <span className="star star--3" />
                <span className="star star--4" />
                <span className="star star--5" />
                <span className="star star--6" />
                <span className="star star--7" />
                <span className="star star--8" />

                <span className="starlink-offer__orbit starlink-offer__orbit--1" />
                <span className="starlink-offer__orbit starlink-offer__orbit--2" />

                <span className="starlink-offer__satellite">
                    <span className="starlink-offer__satellite-core" />
                    <span className="starlink-offer__satellite-panel" />
                    <span className="starlink-offer__satellite-panel" />
                </span>
            </div>

            <div className="starlink-offer__scan" aria-hidden="true" />

            <div className="starlink-offer__content">
                <div className="starlink-offer__eyebrow">
                    <span className="starlink-offer__status" />
                    STARLINK
                    <span className="starlink-offer__signal">
                        ● ● ●
                    </span>
                </div>

                <div className="starlink-offer__main">
                    <div className="starlink-offer__copy">
                        <div className="starlink-offer__label">
                            REFERRAL OFFER
                        </div>

                        <h2 className="starlink-offer__title">
                            1 MONTH
                            <span> FREE</span>
                        </h2>

                        <p className="starlink-offer__text">
                            Activate Starlink through my referral and get
                            one month of service free.*
                        </p>
                    </div>

                    <a
                        className="starlink-offer__button"
                        href="https://starlink.com/ua?referral=RC-DF-15338060-21168-90&app_source=share"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>Activate Starlink</span>

                        <svg
                            className="starlink-offer__button-logo"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path d="M3 17.8c3.9-.2 7.4-1.7 10.1-4.4 2.7-2.7 4.2-6.2 4.4-10.1l3.2 3.2c-.5 4.1-2.2 7.7-5.1 10.6-2.9 2.9-6.5 4.6-10.6 5.1L3 17.8Z" />
                            <path d="M3.2 11.8c2.6-.2 4.9-1.2 6.7-3 1.8-1.8 2.8-4.1 3-6.7l2.2 2.2c-.4 2.7-1.6 5-3.5 6.9-1.9 1.9-4.2 3.1-6.9 3.5l-1.5-2.9Z" />
                        </svg>
                    </a>
                </div>

                <div className="starlink-offer__footer">
                    <p className="starlink-offer__note">
                        *Offer subject to Starlink eligibility and terms.
                    </p>

                    <span className="starlink-offer__coordinates">
                        LOW EARTH ORBIT · 550 KM
                    </span>
                </div>
            </div>
        </section>
    );
}

export default StarlinkOffer;