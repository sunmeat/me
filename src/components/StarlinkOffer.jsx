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
                <span className="starlink-offer__orbit starlink-offer__orbit--1" />
                <span className="starlink-offer__orbit starlink-offer__orbit--2" />
            </div>

            <div className="starlink-offer__scan" aria-hidden="true" />

            <div className="starlink-offer__content">
                <div className="starlink-offer__eyebrow">
                    <span className="starlink-offer__status" />
                    STARLINK REFERRAL
                </div>

                <div className="starlink-offer__main">
                    <div className="starlink-offer__copy">
                        <div className="starlink-offer__label">LIMITED OFFER</div>

                        <h2 className="starlink-offer__title">
                            1 MONTH <span>FREE</span>
                        </h2>

                        <p className="starlink-offer__text">
                            Activate Starlink through my referral link and get
                            one month of service free.
                        </p>
                    </div>

                    <a
                        className="starlink-offer__button"
                        href="https://starlink.com/ua?referral=RC-DF-15338060-21168-90&app_source=share"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Activate Starlink
                        <span className="starlink-offer__button-arrow" aria-hidden="true">
                            →
                        </span>
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