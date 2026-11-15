import { useState, useEffect, useRef } from "react";
import { Link, useOutletContext, useNavigate } from "react-router";
import "./CheckoutPage.css";



function CheckoutPage() {


    const { cart, handleOrder } = useOutletContext();
    const navigate = useNavigate();


    // =================================
    const total = cart.reduce((acc, curr) => {
        return acc + curr.price * curr.quantity;
    }, 0);
    


    // =================================
    function formatPrice(price) {
        return price.toLocaleString("en-IE", {
            style: "currency",
            currency: "EUR",
        });
    }


    // =================================
    const [error, setError] = useState(null);
    const timerRef = useRef(null);

    useEffect(() => {
        return () => clearTimeout(timerRef.current);
    }, []);


    function handleSubmit(e) {
        e.preventDefault();

        clearTimeout(timerRef.current);
        setError("");

        const formData = new FormData(e.currentTarget);

        const customer = {
            fullName: formData.get('fullName').trim(),
            email: formData.get('email').trim(),
            address: formData.get('address').trim(),
            city: formData.get('city').trim(),
            postalCode: formData.get('postalCode').trim(),
            country: formData.get('country').trim(),
        }

        const hasEmptyField = Object.values(customer).some(value => value === '');

        if (hasEmptyField) {
            setError('Please complete all fields.');

            timerRef.current = setTimeout(() => {
                setError("");
            }, 2500);

            return;
        };


        if (handleOrder(customer)) {
            navigate('/confirmation', { replace: true }); 
        };
    }



    return (
        <section
            className="checkout-page container"
            aria-labelledby="checkout-title"
        >
            <header className="checkout-page__header">
                <p className="checkout-page__eyebrow">One last step</p>
                <h1 className="checkout-page__title" id="checkout-title">
                    Make it yours.
                </h1>
                <p className="checkout-page__intro">
                    Portfolio demo. No real orders or payments.
                </p>
            </header>

            {
                cart.length > 0 ?

                    (
                        <div className="checkout-page__layout">
                            {/* ==================== */}
                            <form
                                className="checkout-page__form"
                                aria-labelledby="checkout-form-title"
                                onSubmit={handleSubmit}
                            >
                                <h2 id="checkout-form-title">Delivery details</h2>
                                <p className="checkout-page__hint">All fields are required.</p>

                                <div className="checkout-page__fields">
                                    <div className="checkout-page__field checkout-page__field--wide">
                                        <label htmlFor="checkout-name">Full name</label>
                                        <input
                                            id="checkout-name"
                                            name="fullName"
                                            type="text"
                                            autoComplete="name"
                                            maxLength={100}
                                            required
                                        />
                                    </div>

                                    <div className="checkout-page__field checkout-page__field--wide">
                                        <label htmlFor="checkout-email">Email address</label>
                                        <input
                                            id="checkout-email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            maxLength={254}
                                            required
                                        />
                                    </div>

                                    <div className="checkout-page__field checkout-page__field--wide">
                                        <label htmlFor="checkout-address">Street address</label>
                                        <input
                                            id="checkout-address"
                                            name="address"
                                            type="text"
                                            autoComplete="street-address"
                                            maxLength={200}
                                            required
                                        />
                                    </div>

                                    <div className="checkout-page__field">
                                        <label htmlFor="checkout-city">City</label>
                                        <input
                                            id="checkout-city"
                                            name="city"
                                            type="text"
                                            autoComplete="address-level2"
                                            maxLength={100}
                                            required
                                        />
                                    </div>

                                    <div className="checkout-page__field">
                                        <label htmlFor="checkout-postcode">Postal code</label>
                                        <input
                                            id="checkout-postcode"
                                            name="postalCode"
                                            type="text"
                                            autoComplete="postal-code"
                                            maxLength={20}
                                            required
                                        />
                                    </div>

                                    <div className="checkout-page__field checkout-page__field--wide">
                                        <label htmlFor="checkout-country">Country</label>
                                        <input
                                            id="checkout-country"
                                            name="country"
                                            type="text"
                                            autoComplete="country-name"
                                            maxLength={100}
                                            required
                                        />
                                    </div>
                                </div>

                                <p
                                    className="checkout-page__error"
                                    id="checkout-error"
                                    role="alert"
                                >
                                    {error}
                                </p>

                                <button className="checkout-page__submit" type="submit">
                                    Place demo order
                                </button>

                                <p className="checkout-page__privacy">
                                    Delivery details are used only for this demo and are not sent
                                    to a server.
                                </p>

                                <Link className="checkout-page__link" to="/bag">
                                    Back to your bag
                                </Link>
                            </form>
                            {/* ==================== */}

                            <aside
                                className="checkout-page__summary"
                                aria-labelledby="checkout-summary-title"
                            >
                                <h2 id="checkout-summary-title">Your order</h2>

                                <ul className="checkout-page__products">

                                    {
                                        cart.map(p => {

                                            return <li key={p.id} className="checkout-page__product">
                                                <img className="checkout-page__image" src={p.image} alt={p.alt} />

                                                <div className="checkout-page__product-details">
                                                    <h3>{p.name}</h3>
                                                    <p>Quantity: {p.quantity}</p>
                                                </div>

                                                <p className="checkout-page__product-price">{formatPrice(p.price * p.quantity)}</p>
                                            </li>
                                        })
                                    }

                                </ul>

                                <dl className="checkout-page__totals">
                                    <div>
                                        <dt>Subtotal</dt>
                                        <dd>{formatPrice(total)}</dd>
                                    </div>

                                    <div>
                                        <dt>Shipping</dt>
                                        <dd>{total > 100 ? formatPrice(5) : 'Free'}</dd>
                                    </div>

                                    <div className="checkout-page__total">
                                        <dt>Total</dt>
                                        <dd>{formatPrice(total > 100 ? total + 5 : total)}</dd>
                                    </div>
                                </dl>

                                <p className="checkout-page__shipping-note">
                                    Free shipping on orders over €100. Otherwise €5.
                                </p>
                            </aside>
                        </div>
                    )

                    :

                    (
                        <div className="checkout-page__empty">
                            <h2>Your bag is empty.</h2>
                            <p>Add something you love before checking out.</p>
                            <Link className="checkout-page__link" to="/shop">
                                Explore the collection
                            </Link>
                        </div>
                    )
            }
        </section>
    );
}

export default CheckoutPage;