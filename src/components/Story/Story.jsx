import "./Story.css";



function Story () {

    return (
        <section
            className="story container"
            id="our-story"
            aria-labelledby="story-title"
        >
            <div className="story__header">
                <div>
                    <p className="story__eyebrow">
                        Our point of view
                    </p>

                    <h2 className="story__title" id="story-title">
                        <span>Fewer things.</span>
                        <span>Better choices.</span>
                    </h2>
                </div>

                <p className="story__description">
                    Forma brings together useful objects for work, travel, and
                    life at home. We look for comfortable design, thoughtful
                    details, and pieces that fit naturally into your day.
                </p>
            </div>

            <ul className="story__values">
                <li className="story__value">
                    <span className="story__number" aria-hidden="true">
                        01
                    </span>

                    <div>
                        <h3 className="story__value-title">
                            Useful by design
                        </h3>

                        <p className="story__value-description">
                            A clear purpose, practical features, and nothing
                            that gets in the way.
                        </p>
                    </div>
                </li>

                <li className="story__value">
                    <span className="story__number" aria-hidden="true">
                        02
                    </span>

                    <div>
                        <h3 className="story__value-title">
                            Easy to live with
                        </h3>

                        <p className="story__value-description">
                            Comfortable shapes and simple details that make
                            everyday routines a little easier.
                        </p>
                    </div>
                </li>

                <li className="story__value">
                    <span className="story__number" aria-hidden="true">
                        03
                    </span>

                    <div>
                        <h3 className="story__value-title">
                            Details that matter
                        </h3>

                        <p className="story__value-description">
                            From fabric textures to useful pockets, the small
                            things deserve attention.
                        </p>
                    </div>
                </li>
            </ul>
        </section>
    );
}

export default Story;