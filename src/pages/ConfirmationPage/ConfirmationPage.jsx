import { Link, useOutletContext } from "react-router";
import "./ConfirmationPage.css";


function ConfirmationPage() {

    const { order } = useOutletContext();


    if (!order) {
        return (
            <section
                className="confirmation-page container"
                aria-labelledby="confirmation-title"
            >
                <div className="confirmation-page__empty">
                    <h1
                        className="confirmation-page__title"
                        id="confirmation-title"
                    >
                        No order to display.
                    </h1>

                    <p>Explore the collection to start a new demo order.</p>

                    <Link className="confirmation-page__link" to="/shop">
                        Explore the collection
                    </Link>
                </div>
            </section>
        );
    }


    function formatPrice(price) {
        return price.toLocaleString("en-IE", {
            style: "currency",
            currency: "EUR",
        });
    }

    return (
        <section
            className="confirmation-page container"
            aria-labelledby="confirmation-title"
        >
            <div className="confirmation-page__content">
                <header className="confirmation-page__header">
                    <span className="confirmation-page__check" aria-hidden="true">
                        ✓
                    </span>

                    <p className="confirmation-page__eyebrow">All set</p>

                    <h1 className="confirmation-page__title" id="confirmation-title">
                        Thank you for your order.
                    </h1>

                    <p className="confirmation-page__intro">
                        Your demo order is complete. No payment was taken and
                        nothing will be shipped.
                    </p>
                </header>

                <div className="confirmation-page__panel">
                    <h2>Order details</h2>
                    <p className="confirmation-page__reference">Order reference: {order.id}</p>

                    <ul className="confirmation-page__products">
                        {
                            order.items.map(p => {
                                return <li key={p.id} className="confirmation-page__product">
                                    <div>
                                        <h3>{p.name}</h3>
                                        <p>Quantity: {p.quantity}</p>
                                    </div>
                                    <span>{formatPrice(p.price * p.quantity)}</span>
                                </li>
                            })
                        }
                        {/* <li className="confirmation-page__product">
                            <div>
                                <h3>Product name</h3>
                                <p>Quantity: 1</p>
                            </div>
                            <span>€0.00</span>
                        </li> */}
                    </ul>

                    <dl className="confirmation-page__totals">
                        <div>
                            <dt>Subtotal</dt>
                            <dd>{formatPrice(order.subtotal)}</dd>
                        </div>
                        <div>
                            <dt>Shipping</dt>
                            <dd>{order.shipping === 0
                                ? "Free"
                                : formatPrice(order.shipping)}</dd>
                        </div>
                        <div className="confirmation-page__total">
                            <dt>Total</dt>
                            <dd>{formatPrice(order.total)}</dd>
                        </div>
                    </dl>

                    <div className="confirmation-page__delivery">
                        <h2>Delivery details</h2>
                        <p>Full name: {order.customer.fullName}</p>
                        <p>Email address: {order.customer.email}</p>
                        <p>Street address: {order.customer.address}</p>
                        <p>Postal code, city: {order.customer.postalCode}, {order.customer.city}</p>
                        <p>Country: {order.customer.city}</p>
                    </div>
                </div>

                <Link className="confirmation-page__link" to="/shop">
                    Continue shopping
                </Link>
            </div>
        </section>
    );
}

export default ConfirmationPage;