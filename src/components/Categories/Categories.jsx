import audioImage from "../../assets/products/pocket-speaker.webp";
import workspaceImage from "../../assets/products/arc-desk-lamp.webp";
import carryImage from "../../assets/products/daily-backpack.webp";
import "./Categories.css";



function Categories() {

    
    return (
        <section
            className="categories container"
            aria-labelledby="categories-title"
        >
            <div className="categories__header">
                <h2 className="categories__title" id="categories-title">
                    Shop by category.
                </h2>

                <p className="categories__description">
                    Find something that fits your everyday.
                </p>
            </div>

            <div className="categories__grid">
                <article className="categories__item">
                    <img
                        className="categories__image"
                        src={audioImage}
                        alt=""
                        width={1254}
                        height={1254}
                        loading="lazy"
                        decoding="async"
                    />

                    <div className="categories__content">
                        <h3 className="categories__name">Audio</h3>

                        <p className="categories__summary">
                            Headphones, earbuds & speakers.
                        </p>

                        <button
                            className="categories__link"
                            type="button"
                            disabled
                        >
                            Explore audio
                        </button>
                    </div>
                </article>

                <article className="categories__item">
                    <img
                        className="categories__image"
                        src={workspaceImage}
                        alt=""
                        width={1254}
                        height={1254}
                        loading="lazy"
                        decoding="async"
                    />

                    <div className="categories__content">
                        <h3 className="categories__name">Workspace</h3>

                        <p className="categories__summary">
                            Lighting & desk essentials.
                        </p>

                        <button
                            className="categories__link"
                            type="button"
                            disabled
                        >
                            Explore workspace
                        </button>
                    </div>
                </article>

                <article className="categories__item">
                    <img
                        className="categories__image"
                        src={carryImage}
                        alt=""
                        width={1254}
                        height={1254}
                        loading="lazy"
                        decoding="async"
                    />

                    <div className="categories__content">
                        <h3 className="categories__name">Everyday carry</h3>

                        <p className="categories__summary">
                            Bags, bottles & daily essentials.
                        </p>

                        <button
                            className="categories__link"
                            type="button"
                            disabled
                        >
                            Explore everyday carry
                        </button>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Categories;