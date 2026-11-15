import headphonesImage from "../../assets/products/studio-wireless.webp";
import "./FeaturedProduct.css";



function FeaturedProduct() {



    return (
        <section
            className="featured-product container"
            aria-labelledby="featured-product-title"
        >
            <div className="featured-product__inner">
                <div className="featured-product__media">
                    <img
                        className="featured-product__image"
                        src={headphonesImage}
                        alt="Ivory Studio Wireless headphones with soft fabric ear cushions."
                        width={1254}
                        height={1254}
                        loading="lazy"
                        decoding="async"
                    />
                </div>

                <div className="featured-product__content">
                    <p className="featured-product__eyebrow">
                        In focus — Studio Wireless
                    </p>

                    <h2
                        className="featured-product__title"
                        id="featured-product-title"
                    >
                        Make room for your music.
                    </h2>

                    <p className="featured-product__description">
                        Comfortable over-ear headphones with soft fabric cushions
                        and a clean ivory finish. A considered addition to your
                        everyday listening.
                    </p>

                    <button
                        className="featured-product__link"
                        type="button"
                        disabled
                    >
                        Discover Studio Wireless
                    </button>
                </div>
            </div>
        </section>
    );
}

export default FeaturedProduct;