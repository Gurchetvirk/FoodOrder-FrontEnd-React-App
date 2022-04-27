import "./Items.css";
import { useState } from "react";
function Items(props)
{
    const [quantity,setQuantity] = useState(1);
    function onQuantityChange(event)
    {
        setQuantity(event.target.value);
    }
    return (
        <div className="items-container">
            <div className="items-left-container">
                <h3>{props.itemdetails.Name}</h3>
                <h4>{props.itemdetails.Description}</h4>
                <h3 className="amount">${props.itemdetails.Amount}</h3>
            </div>
            <div className="items-right-container">
                <div className="amount-container">
                    <h3>Quantity</h3>
                    <input type="number" min={1} defaultValue={1} onChange={onQuantityChange}></input>
                </div>
                <button onClick={() =>{props.onAddClickHandler(props.itemdetails,quantity)}}>+ Add</button>
            </div>
        </div>
    );
}
export default Items;