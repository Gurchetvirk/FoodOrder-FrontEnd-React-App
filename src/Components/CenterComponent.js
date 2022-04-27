import './CenterComponent.css';
function CenterComponent(props)
{
    return(
        <div className={`center-container ${props.isCartClick===true ? "blur": ""} `}>
            <h2>
                Delicious Food, Delivered To You
            </h2>
            <h4>Choose your favorite meal from our broad selection of available meals and enjoy a delicious</h4>
            <h4>lunch or dinner at home</h4>
            <h4>All our meals are cooked with high-quality ingredients,just-in-time and of course by</h4>
            <h4>experienced chefs!</h4>
        </div>
    );
}
export default CenterComponent;