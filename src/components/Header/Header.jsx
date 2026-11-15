import { useRef, useState } from "react";
import { Link } from "react-router";
import "./Header.css";



function Header({ cart }) {

    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    function handleMenu() {
        setIsOpen(prev => !prev);
    }

    function handleClose() {
        setIsOpen(false);
    }

    function handleKey(e) {
        if (e.key === 'Escape' && isOpen) {
            setIsOpen(false);
            menuRef.current.focus();
        }
    }


    return (
        <header className="header">
            <a className="header__skip-link" href="#main-content">
                Skip to content
            </a>

            <div className="header__announcement">
                <div className="container header__announcement-inner">
                    <p className="header__announcement-message">
                        Thoughtfully chosen. Made for everyday.
                    </p>

                    <p className="header__shipping">
                        Free shipping over €100
                    </p>
                </div>
            </div>

            <div className="container header__inner">
                <Link className="header__logo" to="/" aria-label="Forma home" onClick={handleClose}>
                    forma.
                </Link>

                <nav
                    className="header__nav"
                    id="header-navigation"
                    aria-label="Main navigation"
                    data-open={isOpen}
                    onKeyDown={handleKey}
                    onClick={handleClose}
                >
                    <Link className="header__nav-item" to={'/shop'}>
                        Shop
                    </Link>

                    <Link
                        className="header__nav-item"
                        to="/new-arrivals"
                        onClick={handleClose}
                    >
                        New arrivals
                    </Link>

                    <Link className="header__nav-item" to={'/#our-story'}>
                        Our story
                    </Link>
                </nav>


                <div className="header__actions">
                    <button
                        className="header__menu"
                        type="button"
                        ref={menuRef}
                        aria-expanded={isOpen}
                        aria-controls="header-navigation"
                        onClick={handleMenu}
                        onKeyDown={handleKey}
                    >
                        Menu
                    </button>

                    <Link to={'/saved'} className="header__action" onClick={handleClose}>
                        Saved
                    </Link>

                    <Link className="header__action" to={'/bag'} onClick={handleClose}>
                        Bag <span>({cart.length})</span>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;