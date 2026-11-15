import { Link, useParams, useOutletContext } from "react-router";
import { useState, useEffect, useRef } from "react";
import "./ProductPage.css";
import { products } from '../data/products';
import QuantitySelector from "../components/QuantitySelector/QuantitySelector";



function ProductPage() {

    const { productId } = useParams();
    const [quantity, setQuantity] = useState(1);
    

    // =============================
    const { handleAddToCart } = useOutletContext();
    const messageTimerRef = useRef(null);
    const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {
        return () => {
            clearTimeout(messageTimerRef.current);
        };
    }, []);


    const product = products.find(p => p.id === productId);


    // =============================
    function handleIncreaseQuantity() {
        setQuantity(prev => prev + 1);
    }

    function handleDecreaseQuantity() {
        setQuantity(prev => prev - 1);
    }




    // =============================
    if (!product) {
        return (
            <section
                className="product-page container"
                aria-labelledby="product-not-found-title"
            >
                <h1 className="product-page__title" id="product-not-found-title">
                    Product not found.
                </h1>

                <p className="product-page__description">
                    This product is unavailable or the address is incorrect.
                </p>

                <Link className="product-page__back" to="/shop">
                    Back to all products
                </Link>
            </section>
        );
    }

    const formattedPrice = product.price.toLocaleString("en-IE", {
        style: "currency",
        currency: "EUR",
    });


    // =============================
    function handleAddToBag() {
        handleAddToCart(product.id, quantity);

        clearTimeout(messageTimerRef.current);
        setSuccessMessage("Added to your bag.");

        messageTimerRef.current = setTimeout(() => {
            setSuccessMessage("");
            messageTimerRef.current = null;
        }, 2000);
    }



    return (
        <section
            className="product-page container"
            aria-labelledby="product-title"
        >
            <nav className="product-page__breadcrumb" aria-label="Breadcrumb">
                <Link to="/shop">Shop</Link>
                <span aria-hidden="true">/</span>
                <span>{product.name}</span>
            </nav>

            <div className="product-page__layout">
                <div className="product-page__visual">
                    <img
                        className="product-page__image"
                        src={product.image}
                        alt={product.alt}
                    />
                </div>

                <div className="product-page__details">
                    <p className="product-page__category">{product.category}</p>

                    <h1 className="product-page__title" id="product-title">
                        {product.name}
                    </h1>

                    <p className="product-page__tagline">
                        {product.tagline}
                    </p>

                    <p className="product-page__price">{formattedPrice}</p>

                    <p className="product-page__description">
                        {product.description}
                    </p>

                    <section
                        className="product-page__features"
                        aria-labelledby="product-features-title"
                    >
                        <h2 id="product-features-title">The details</h2>

                        <ul className="product-page__feature-list">
                            {
                                product.features.map((f) => <li key={f}>{f}</li>)
                            }
                        </ul>
                    </section>

                    <QuantitySelector quantity={quantity} handleIncreaseQuantity={handleIncreaseQuantity} handleDecreaseQuantity={handleDecreaseQuantity} />

                    <button className="product-page__add-button" type="button" onClick={handleAddToBag}>
                        Add to bag
                    </button>

                    <p className="product-page__bag-status" role="status">
                        {successMessage}
                    </p>

                    <p className="product-page__delivery">
                        Free shipping on orders over €100.
                    </p>

                    <Link className="product-page__back" to="/shop">
                        Back to all products
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default ProductPage;