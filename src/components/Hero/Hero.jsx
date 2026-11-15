import heroImage from "../../assets/hero-collection.webp";
import "./Hero.css";



function Hero() {
    return (
        <section className="hero container" aria-labelledby="hero-title">
            <div className="hero__inner">
                <img
                    className="hero__image"
                    src={heroImage}
                    alt=""
                    width={2048}
                    height={768}
                    fetchPriority="high"
                    decoding="async"
                />

                <div className="hero__content">
                    <p className="hero__eyebrow">
                        Less noise. More focus.
                    </p>

                    <h1 className="hero__title" id="hero-title">
                        <span>Good design.</span>
                        <span>Better</span>
                        <span>everyday.</span>
                    </h1>

                    <p className="hero__description">
                        Considered essentials for work, travel, and everything in between.
                    </p>
    
                    <a href="#products" className="hero__button">
                        Explore the collection
                    </a>
                </div>

                <p className="hero__caption">
                    The everyday collection
                </p>
            </div>
        </section>
    );
}

export default Hero;