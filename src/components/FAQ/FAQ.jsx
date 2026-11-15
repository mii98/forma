import { useState } from "react";
import "./FAQ.css";



function FAQ () {

    const [openId, setOpenId] = useState(null);


    function handleToogle (e) {
        const openAns = e.currentTarget.value;

        if (openAns === openId) {
            setOpenId(null);
            return;
        }

        setOpenId(e.currentTarget.value);
    }


    return (
        <section
            className="faq container"
            id="faq"
            aria-labelledby="faq-title"
        >
            <div className="faq__intro">
                <p className="faq__eyebrow">Good to know</p>

                <h2 className="faq__title" id="faq-title">
                    A few things to know.
                </h2>

                <p className="faq__description">
                    Shipping, returns, and shopping with Forma.
                </p>
            </div>

            <div className="faq__list">
                {/* ===================================== */}
                <div className="faq__item">
                    <h3>
                        <button
                            className="faq__question"
                            type="button"
                            aria-expanded={openId === "faq-shipping"}
                            aria-controls="faq-shipping"
                            onClick={handleToogle}
                            value={'faq-shipping'}
                        >
                            <span>How does free shipping work?</span>
                            <span className="faq__icon" aria-hidden="true" />
                        </button>
                    </h3>

                    <div className="faq__answer" id="faq-shipping" hidden={openId !== "faq-shipping"}>
                        <p>
                            Standard delivery is free when your product subtotal
                            is over €100. Delivery costs are shown at checkout
                            before you confirm your demo order.
                        </p>
                    </div>
                </div>
                {/* ===================================== */}

                <div className="faq__item">
                    <h3>
                        <button
                            className="faq__question"
                            type="button"
                            aria-expanded={openId === "faq-returns"}
                            aria-controls="faq-returns"
                            onClick={handleToogle}
                            value={'faq-returns'}
                        >
                            <span>What is the return policy?</span>
                            <span className="faq__icon" aria-hidden="true" />
                        </button>
                    </h3>

                    <div className="faq__answer" id="faq-returns" hidden={openId !== "faq-returns"}>
                        <p>
                            The store concept includes a 30-day return window.
                            This portfolio demo does not process real purchases
                            or returns.
                        </p>
                    </div>
                </div>

                <div className="faq__item">
                    <h3>
                        <button
                            className="faq__question"
                            type="button"
                            aria-expanded={openId === "faq-account"}
                            aria-controls="faq-account"
                            onClick={handleToogle}
                            value={'faq-account'}
                        >
                            <span>Do I need an account?</span>
                            <span className="faq__icon" aria-hidden="true" />
                        </button>
                    </h3>

                    <div className="faq__answer" id="faq-account" hidden={openId !== "faq-account"}>
                        <p>
                            No account is needed. Your saved products and bag
                            are stored in this browser so you can return to
                            them later.
                        </p>
                    </div>
                </div>

                <div className="faq__item">
                    <h3>
                        <button
                            className="faq__question"
                            type="button"
                            aria-expanded={openId === "faq-checkout"}
                            aria-controls="faq-checkout"
                            onClick={handleToogle}
                            value={'faq-checkout'}
                        >
                            <span>Will I be charged at checkout?</span>
                            <span className="faq__icon" aria-hidden="true" />
                        </button>
                    </h3>

                    <div className="faq__answer" id="faq-checkout" hidden={openId !== "faq-checkout"}>
                        <p>
                            No. Forma is a portfolio demo. Checkout lets you
                            explore the ordering process without collecting
                            payment details or placing a real order.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FAQ;