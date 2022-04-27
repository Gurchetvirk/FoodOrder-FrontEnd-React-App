import SummaryItem from "./SummaryItem";
import "./Summary.css";
function Summary(props)
{
    let totalAmount=0;
    if(props.selectedItems.length !==0)
    {
        props.selectedItems.map( item => {
        totalAmount+=parseFloat(item.Amount)*parseFloat(item.Quantity);
        });
    }
    return(
        <div className="summary-container">
            {props.selectedItems.length===0 ? <h3 className="err">Your Cart is Empty</h3>: props.selectedItems.map( item  =>{
                return <SummaryItem item={item} onAddOrRemove={props.onAddOrRemove} />;
            })}
            <div className="summary-lower">
                <div>
                    <h2>Total Amount</h2>
                    <h2>${totalAmount.toFixed(2)}</h2>
                </div>
                <div>
                    <button onClick={props.onCloseClick}>Close</button>
                    {props.selectedItems.length!==0 ? <button onClick={() => {props.placeOrder(totalAmount.toFixed(2))}}>Order</button> : null}
                </div>
            </div>
        </div>
     );
}
export default Summary;