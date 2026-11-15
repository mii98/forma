import { Link, useOutletContext } from "react-router";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import "./SavedPage.css";



function SavedPage () {

    const { savedProducts } = useOutletContext();
    

    return (
        <section className="saved-page container" aria-labelledby="saved-title">
            <header className="saved-page__header">
                <div>
                    <p className="saved-page__eyebrow">Keep your favourites close</p>
                    <h1 className="saved-page__title" id="saved-title">
                        Saved for later.
                    </h1>
                </div>

                <Link className="saved-page__link" to="/shop">
                    Explore the collection
                </Link>
            </header>

            <p className="saved-page__count" role="status">
                {savedProducts.length} saved {savedProducts.length === 1 ? 'product' : 'products'}
            </p>

            {
                savedProducts.length > 0 ?

                (
                    <ul className="saved-page__grid" aria-label="Saved products">
                        {
                            savedProducts.map(p => {
                                return <li className="saved-page__item" key={p.id}>
                                    <ProductCard product={p}/>
                                </li>
                            })
                        }
                    </ul>
                )

                :

                (
                    <div className="saved-page__empty">
                        <h2>A little inspiration for later.</h2>
                        <p>Save the products you love and find them here.</p>

                        <Link className="saved-page__link" to="/shop">
                            Find your favourites
                        </Link>
                    </div>
                )
            }
        </section>
    );
}

export default SavedPage;