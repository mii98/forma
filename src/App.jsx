import { useState, useEffect } from "react";
import { ScrollRestoration, Outlet } from "react-router";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { products } from '../src/data/products.js';
import "./App.css";




function App () {

    const [cart, setCart] = useState(() => {
        try {
            const data = JSON.parse(localStorage.getItem('forma-cart'));
            return Array.isArray(data) ? data : [];
        } catch {
            return [];
        }
    });


    const [savedProducts, setSavedProducts] = useState(() => {
        try {
            const data = JSON.parse(localStorage.getItem('forma-saved'));
            return Array.isArray(data) ? data : [];
        } catch {
            return [];
        }
    });


    useEffect(() => {
        try {
            localStorage.setItem('forma-cart', JSON.stringify(cart));
        } catch (error) {
            console.error('Could not save your bag.', error);
        }
    }, [cart])


    useEffect(() => {
        try {
            localStorage.setItem('forma-saved', JSON.stringify(savedProducts));
        } catch (error) {
            console.error("Could not save your favourites.", error);
        }
    }, [savedProducts]);


    const [order, setOrder] = useState(null);


    // ================================
    function handleAddToCart(productId, quantity) {

        const product = products.find((p) => p.id === productId);

        if (!product) return;

        
        setCart((prev) => {
            const existingProduct = prev.find((p) => p.id === productId);

            if (existingProduct) {
                return prev.map((p) =>
                    p.id === productId ? { ...p, quantity } : p
                );
            }

            const newItem = {
                ...product,
                quantity: quantity,
            };

            return [...prev, newItem];
        });
    };


    // ================================
    function handleQuantity (id, quantity) {
        
        setCart(prev => {

            return prev.map(product => {

                if (product.id === id) {
                    return { ...product, quantity }
                };

                return product;
            })
        })
    }


    // ================================
    function removeProduct (id) {
        
        setCart(prev => {

            return prev.filter(product => {
                return product.id !== id;
            })
        })
    }


    // ================================
    function handleSave (product) {
        
        const isExist = savedProducts.find(p => p.id === product.id);

        if (isExist) {
            return setSavedProducts(prev => {
                return prev.filter(p => p.id !== isExist.id);
            })
        }

        setSavedProducts(prev => [...prev, product]);
    }


    // ================================
    function handleOrder (customer) {

        if (!cart.length) return false;

        const subtotal = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
        const shipping = subtotal > 100 ? 5 : 0;


        const newOrder = {
            id: crypto.randomUUID(),
            customer,
            items: [...cart],
            subtotal,
            shipping,
            total: subtotal + shipping
        };

        setOrder(newOrder);
        setCart([]);

        return true;
    }



    return (
        <div className="app">
            <Header cart={cart} />

            <main id="main-content" tabIndex={-1}>
                <Outlet context={{ cart, handleAddToCart, handleQuantity, removeProduct, savedProducts, handleSave, order, handleOrder }} />
            </main>

            <Footer />
            <ScrollRestoration />
        </div>
    );
}


export default App;