import { Link } from "react-router";
import "./NotFoundPage.css";



function NotFoundPage () {

    

    return (
        <section
            className="not-found container"
            aria-labelledby="not-found-title"
        >
            <p className="not-found__eyebrow">404 — A little off track</p>

            <h1 className="not-found__title" id="not-found-title">
                Page not found.
            </h1>

            <p className="not-found__description">
                We couldn’t find this page. Let’s get you back to something good.
            </p>

            <div className="not-found__actions">
                <Link className="not-found__shop" to="/shop">
                    Explore the collection
                </Link>

                <Link className="not-found__home" to="/">
                    Back to home
                </Link>
            </div>
        </section>
    );
}

export default NotFoundPage;