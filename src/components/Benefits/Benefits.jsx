import "./Benefits.css";

function Benefits() {
    return (
        <section
            className="benefits container"
            aria-label="Shopping benefits"
        >
            <ul className="benefits__list">
                <li className="benefits__item">
                    <p className="benefits__text">
                        Free shipping over €100
                    </p>
                </li>

                <li className="benefits__item">
                    <p className="benefits__text">
                        30-day easy returns
                    </p>
                </li>

                <li className="benefits__item">
                    <p className="benefits__text">
                        Considered quality
                    </p>
                </li>
            </ul>
        </section>
    );
}

export default Benefits;