import { Link, useOutletContext } from "react-router";
import "./ProductCard.css";



function ProductCard({ product }) {

    const { savedProducts, handleSave } = useOutletContext();
    
    const isSaved = savedProducts.some(item => item.id === product.id);

    

    // =============================
    const price = product.price.toLocaleString("en-IE", {
        style: "currency",
        currency: "EUR",
    });

    
    return (
        <article className="product-card">
            <div className="product-card__media">
                <img
                    className="product-card__image"
                    src={product.image}
                    alt={product.alt}
                    width={1254}
                    height={1254}
                    loading="lazy"
                    decoding="async"
                />

                {product.badge && (
                    <span className="product-card__badge">
                        {product.badge}
                    </span>
                )}

                <button
                    className="product-card__save"
                    type="button"
                    aria-label={`Save ${product.name} to favourites`}
                    aria-pressed={isSaved}
                    onClick={() => handleSave(product)}
                >
                    { isSaved ? 'Saved' : 'Save' }
                </button>
            </div>

            <div className="product-card__content">
                <p className="product-card__category">
                    {product.category}
                </p>

                <div className="product-card__heading">
                    <h3 className="product-card__name">
                        <Link to={`/shop/${product.id}`}>
                            {product.name}
                        </Link>
                        
                    </h3>

                    <p className="product-card__price">
                        {price}
                    </p>
                </div>

                <p className="product-card__tagline">
                    {product.tagline}
                </p>
            </div>
        </article>
    );
}

export default ProductCard;

