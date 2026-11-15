import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import { products } from "../../data/products.js";
import '../../pages/ShopPage.css'



function NewArrivalsPage () {

    const newProducts = products.filter((product) => product.badge === "New");


    return (
        <section
            className="shop-page container"
            aria-labelledby="new-arrivals-title"
        >
            <header className="shop-page__header">
                <p className="shop-page__eyebrow">Fresh additions</p>
                <h1 className="shop-page__title" id="new-arrivals-title">
                    New arrivals.
                </h1>
            </header>

            <ul className="shop-page__grid">
                {newProducts.map((product) => (
                    <li className="shop-page__item" key={product.id}>
                        <ProductCard product={product} />
                    </li>
                ))}
            </ul>
        </section>
    );
}


export default NewArrivalsPage;