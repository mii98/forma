import { useSearchParams, Link } from "react-router";
import ProductCard from "../components/ProductCard/ProductCard.jsx";
import { products } from "../data/products.js";
import "./ShopPage.css";




function ShopPage() {

    const [searchParams, setSearchParams] = useSearchParams();

    const search = (searchParams.get('search') || '').trim();
    const category = searchParams.get('category') || 'all';
    const minPrice = searchParams.get('minPrice') || '';
    const maxPrice = searchParams.get('maxPrice') || '';
    const sort = searchParams.get('sort') || 'default';




    // ====================================
    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const inputValue = formData.get('search').trim();
        const params = new URLSearchParams(searchParams);


        if (inputValue) {
            params.set('search', inputValue)
        } else {
            params.delete('search')
        }

        setSearchParams(params);
    }


    // ====================================
    function handleCategoryChange(e) {

        const value = e.currentTarget.value;
        const params = new URLSearchParams(searchParams);

        if (value === 'all') {
            params.delete('category');
        } else {
            params.set('category', value);
        };

        setSearchParams(params);
    }



    // ====================================
    const filtredProducts = products.filter(p => {

        const searchCond = p.name.toLowerCase().includes(search.toLowerCase());
        let categoryCond = p.category === category;
        let minPriceCond = p.price >= +minPrice;
        let maxPriceCond = p.price <= +maxPrice;

        if (category === 'all') {
            categoryCond = true;
        };

        if (maxPrice === '') {
            maxPriceCond = true;
        }

        if (maxPrice === '') {
            maxPriceCond = true;
        }

        return searchCond && categoryCond && minPriceCond && maxPriceCond
    })



    // ====================================
    function handlePriceChange(e) {

        const { name, value } = e.currentTarget;
        const params = new URLSearchParams(searchParams);

        if (value === '') {
            params.delete(name);
        } else {
            params.set(name, value);
        }

        setSearchParams(params);
    }


    // ====================================
    function handleSortChange(e) {

        const value = e.currentTarget.value;
        const params = new URLSearchParams(searchParams);

        if (value === 'default') {
            params.delete('sort');
        } else {
            params.set('sort', value)
        };

        setSearchParams(params);
    }



    // ====================================
    const sortedProducts = filtredProducts.toSorted((a, b) => {

        if (sort === 'price-asc') {
            return a.price - b.price;
        } else if (sort === 'price-desc') {
            return b.price - a.price;
        } else if (sort === "name-asc") {
            return a.name.localeCompare(b.name)
        }
    })



    return (
        <section className="shop-page container" aria-labelledby="shop-title">
            <header className="shop-page__header">
                <p className="shop-page__eyebrow">The collection</p>

                <h1 className="shop-page__title" id="shop-title">
                    Find your everyday.
                </h1>

                <p className="shop-page__description">
                    Thoughtfully chosen essentials for work, travel, and home.
                </p>
            </header>


            <form
                className="shop-page__search shop-page__field"
                role="search"
                onSubmit={handleSubmit}
            >
                <label htmlFor="shop-search">Search products</label>

                <div className="shop-page__search-row">
                    <input
                        className="shop-page__control"
                        id="shop-search"
                        name="search"
                        type="search"
                        placeholder="Search by product name"
                        key={search}
                        defaultValue={search}
                    />

                    <button className="shop-page__search-button" type="submit">
                        Search
                    </button>
                </div>
            </form>


            <div className="shop-page__toolbar">
                <div className="shop-page__field">
                    <label htmlFor="shop-category">Category</label>

                    <select
                        className="shop-page__control"
                        id="shop-category"
                        name="category"
                        value={category}
                        onChange={handleCategoryChange}
                    >
                        <option value="all">All categories</option>
                        <option value="Audio">Audio</option>
                        <option value="Workspace">Workspace</option>
                        <option value="Everyday carry">Everyday carry</option>
                    </select>
                </div>

                <div className="shop-page__field">
                    <label htmlFor="shop-min-price">Min price (€)</label>

                    <input
                        className="shop-page__control"
                        id="shop-min-price"
                        name="minPrice"
                        type="number"
                        min="0"
                        step="1"
                        placeholder="No minimum"
                        value={minPrice}
                        onChange={handlePriceChange}
                    />
                </div>

                <div className="shop-page__field">
                    <label htmlFor="shop-max-price">Max price (€)</label>

                    <input
                        className="shop-page__control"
                        id="shop-max-price"
                        name="maxPrice"
                        type="number"
                        min="0"
                        step="1"
                        placeholder="No maximum"
                        value={maxPrice}
                        onChange={handlePriceChange}
                    />
                </div>
                

                <div className="shop-page__field">
                    <label htmlFor="shop-sort">Sort by</label>

                    <select
                        className="shop-page__control"
                        id="shop-sort"
                        name="sort"
                        value={sort}
                        onChange={handleSortChange}
                    >
                        <option value="default">Featured</option>
                        <option value="price-asc">Price: low to high</option>
                        <option value="price-desc">Price: high to low</option>
                        <option value="name-asc">Name: A–Z</option>
                    </select>
                </div>
                
            </div>

            <p className="shop-page__count" role="status">
                {filtredProducts.length} products
            </p>


            {
                !filtredProducts.length ?
                    (
                        <div className="shop-page__empty">
                            <h2>No products found.</h2>
                            <p>Try a different search or adjust your filters.</p>

                            <Link className="shop-page__reset" to="/shop">
                                Reset filters
                            </Link>
                        </div>
                    )

                    :

                    (
                        <ul className="shop-page__grid">

                            {
                                sortedProducts.map(p => {
                                    return (
                                        <li key={p.id} className="shop-page__item">
                                            <ProductCard product={p} />
                                        </li>
                                    )
                                })
                            }

                        </ul>
                    )
            }

        </section>
    );
}

export default ShopPage;