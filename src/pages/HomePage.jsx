import Hero from "../components/Hero/Hero.jsx";
import Benefits from "../components/Benefits/Benefits.jsx";
import ProductGrid from "../components/ProductGrid/ProductGrid.jsx";
import Categories from "../components/Categories/Categories.jsx";
import FeaturedProduct from "../components/FeaturedProduct/FeaturedProduct.jsx";
import Story from "../components/Story/Story.jsx";
import FAQ from "../components/FAQ/FAQ.jsx";
import { products } from "../data/products.js";


function HomePage () {
    
    return (
        <>
            <Hero />
            <Benefits />
            <ProductGrid products={products} />
            <Categories />
            <FeaturedProduct />
            <Story />
            <FAQ />
        </>
    );
}

export default HomePage;