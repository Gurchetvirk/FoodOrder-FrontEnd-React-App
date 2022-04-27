function SummaryItem(props)
{
    return (
        <div className="summary-item-container">
            <div className="summary-left-container">
                <h3>{props.item.Name}</h3>
                <div>
                    <h3>{props.item.Amount}</h3>
                    <h3>x{props.item.Quantity}</h3>
                </div>
            </div>
            <div className="summary-right-container">
                <button onClick={() => {props.onAddOrRemove(props.item,parseInt(props.item.Quantity) - 1)}}>-</button>
                <button onClick={() => {props.onAddOrRemove(props.item,parseInt(props.item.Quantity) + 1)}}>+</button>
            </div>
        </div>
    );
}
export default SummaryItem;