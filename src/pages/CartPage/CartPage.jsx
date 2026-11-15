import { Link, useOutletContext } from "react-router";
import "./CartPage.css";




function CartPage() {

    const { cart, handleQuantity, removeProduct } = useOutletContext();


    // =================================
    const total = cart.reduce((acc, curr) => {
        return acc + (curr.price * curr.quantity)
    }, 0);


    // =================================
    function formatPrice(price) {
        return price.toLocaleString("en-IE", {
            style: "currency",
            currency: "EUR",
        });
    }

    return (
        <section className="cart-page container" aria-labelledby="bag-title">
            <header className="cart-page__header">
                <div>
                    <p className="cart-page__eyebrow">Your selection</p>
                    <h1 className="cart-page__title" id="bag-title">
                        Your bag.
                    </h1>
                </div>

                <Link className="cart-page__link" to="/shop">
                    Continue shopping
                </Link>
            </header>


            {
                !cart.length ?

                    (
                        <div className="cart-page__empty">
                            <h2>Your bag is empty.</h2>
                            <p>Find something that fits your everyday.</p>
                            <Link className="cart-page__link" to="/shop">
                                Explore the collection
                            </Link>
                        </div>
                    )

                    :

                    (
                        <div className="cart-page__layout">
                            <ul className="cart-page__list" aria-label="Products in your bag">

                                {
                                    cart.map(product => {

                                        return <li className="cart-page__item" key={product.id}>
                                            <img
                                                className="cart-page__image"
                                                src={product.image}
                                                alt={product.alt}
                                            />

                                            <div className="cart-page__details">
                                                <p className="cart-page__category">{product.category}</p>

                                                <h2 className="cart-page__name">
                                                    <Link to={`/shop/${product.id}`}>
                                                        {product.name}
                                                    </Link>
                                                </h2>

                                                <p className="cart-page__unit-price">{formatPrice(product.price)} each</p>



                                                <div className="cart-page__quantity-controls">
                                                    <button
                                                        className="cart-page__quantity-button"
                                                        type="button"
                                                        aria-label={`Decrease quantity of ${product.name}`}
                                                        onClick={() => handleQuantity(product.id, product.quantity - 1)}
                                                        disabled={product.quantity === 1}
                                                    >
                                                        <span aria-hidden="true">−</span>
                                                    </button>

                                                    <span
                                                        className="cart-page__quantity-value"
                                                        aria-live="polite"
                                                        aria-atomic="true"
                                                    >
                                                        {product.quantity}
                                                    </span>

                                                    <button
                                                        className="cart-page__quantity-button"
                                                        type="button"
                                                        aria-label={`Increase quantity of ${product.name}`}
                                                        onClick={() => handleQuantity(product.id, product.quantity + 1)}
                                                    >
                                                        <span aria-hidden="true">+</span>
                                                    </button>
                                                </div>

                                                <button
                                                    className="cart-page__remove"
                                                    type="button"
                                                    aria-label={`Remove ${product.name} from your bag`}
                                                    onClick={() => removeProduct(product.id)}
                                                >
                                                    Remove
                                                </button>

                                                <p className="cart-page__quantity">Quantity: {product.quantity}</p>
                                            </div>

                                            <p className="cart-page__item-total">{formatPrice(product.price * product.quantity)}</p>
                                        </li>
                                    })
                                }

                            </ul>

                            <aside
                                className="cart-page__summary"
                                aria-labelledby="bag-summary-title"
                            >
                                <h2 id="bag-summary-title">Order summary</h2>

                                <dl className="cart-page__totals">
                                    <div>
                                        <dt>Items</dt>
                                        <dd>{cart.length}</dd>
                                    </div>

                                    <div className="cart-page__subtotal">
                                        <dt>Subtotal</dt>
                                        <dd>{formatPrice(total)}</dd>
                                    </div>
                                </dl>

                                <p className="cart-page__note">
                                    Shipping is calculated at checkout.
                                </p>

                                <Link className="cart-page__link" to="/checkout">
                                    Continue to checkout
                                </Link>
                            </aside>
                        </div>
                    )
            }


        </section>
    );
}

export default CartPage;