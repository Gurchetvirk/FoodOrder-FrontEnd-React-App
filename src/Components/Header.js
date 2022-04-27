import './Header.css';
function Header(props)
{
    return (
        <div className="header-container">
            <div className='header-left'>
                <p>Gurchet's Meals</p>
            </div>
            <div className="header-right" onClick={props.onCartClick}>
                <h4>Your Cart</h4>
                <div className="cart-value">
                    <h4>{props.selectedItems.length}</h4>
                </div>
            </div>
        </div>
    );
}
export default Header;