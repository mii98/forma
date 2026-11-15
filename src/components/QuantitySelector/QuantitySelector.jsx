import "./QuantitySelector.css";



function QuantitySelector ({ quantity, handleIncreaseQuantity, handleDecreaseQuantity }) {

    

    return (
        <div className="quantity-selector">
            <span className="quantity-selector__label">Quantity</span>

            <div className="quantity-selector__controls">
                <button
                    className="quantity-selector__button"
                    type="button"
                    aria-label="Decrease quantity"
                    onClick={handleDecreaseQuantity}
                    disabled={quantity <= 1}
                >
                    <span aria-hidden="true">−</span>
                </button>

                <span
                    className="quantity-selector__value"
                    aria-live="polite"
                    aria-atomic="true"
                >
                    {quantity}
                </span>

                <button
                    className="quantity-selector__button"
                    type="button"
                    aria-label="Increase quantity"
                    onClick={handleIncreaseQuantity}
                >
                    <span aria-hidden="true">+</span>
                </button>
            </div>
        </div>
    );
}

export default QuantitySelector;