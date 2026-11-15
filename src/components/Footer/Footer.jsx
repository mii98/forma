import { Link } from "react-router";
import "./Footer.css";



function Footer() {


    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__main">
                    <div className="footer__brand">
                        <Link
                            className="footer__logo"
                            to="/"
                            aria-label="Forma home"
                        >
                            forma.
                        </Link>

                        <p className="footer__description">
                            A considered collection for work, travel,
                            and life at home.
                        </p>

                        <p className="footer__tagline">
                            Useful things. Exceptional details.
                        </p>
                    </div>

                    <nav className="footer__group" aria-label="Footer shop">
                        <h2 className="footer__heading">Shop</h2>

                        <ul className="footer__list">
                            <li>
                                <Link className="footer__link" to={'/shop'}>
                                    All products
                                </Link>
                            </li>

                            <li>
                                <Link className="footer__link" to={'/saved'}>
                                    Saved products
                                </Link>
                            </li>

                            <li>
                                <Link className="footer__link" to={'/bag'}>
                                    Your bag
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <nav className="footer__group" aria-label="Footer information">
                        <h2 className="footer__heading">Information</h2>

                        <ul className="footer__list">
                            <li>
                                <Link className="footer__link" to={'/#our-story'}>
                                    Our story
                                </Link>
                            </li>

                            <li>
                                <Link className="footer__link" to={'/#faq'}>
                                    Shipping & returns
                                </Link>
                            </li>

                            <li>
                                <Link className="footer__link" to={'/#faq'}>
                                    FAQs
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="footer__bottom">
                    <p className="footer__copyright">© forma.</p>

                    <p className="footer__notice">
                        Portfolio demo. No real orders or payments.
                    </p>

                    <button
                        className="footer__project"
                        type="button"
                        disabled
                    >
                        View project on GitHub
                    </button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;