import { Link } from 'react-router';
import ProductCard from '../ProductCard/ProductCard';
import "./ProductGrid.css";




function ProductGrid ({ products }) {



    return (
        <section
            className="product-grid container"
            id="products"
            aria-labelledby="products-title"
        >
            <div className="product-grid__header">
                <div>
                    <h2 className="product-grid__title" id="products-title">
                        Your next everyday essential.
                    </h2>

                    <p className="product-grid__description">
                        Useful things. Exceptional details.
                    </p>
                </div>

                <Link
                    className="product-grid__view-all"
                    to={'/shop'}
                >
                    View all products
                </Link>
            </div>

            <ul className="product-grid__list">
                
                {
                    products.map(p => {
                        return <li className='product-grid__item' key={p.id}>
                            <ProductCard product={p} />
                        </li>
                    })
                }

            </ul>
        </section>
    );
}

export default ProductGrid;