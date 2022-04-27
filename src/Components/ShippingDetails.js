import "./ShippingDetails.css";
import { useState } from "react";
function ShippingDetails(props)
{
    const [isOrderSuccess,setIsOrderSuccess] = useState(false);
    function onSubmitHandler(event)
    {
        event.preventDefault();
        setIsOrderSuccess(true);
        setTimeout( () => {
            setIsOrderSuccess(false);
            props.onSuccessfulOrderPlaced();
        },2000)
        console.log("Submit!");
    }
    return(
    <div className="shipping-main-container">
        <div className={`shipping-details-container ${isOrderSuccess === true ? "blur" :""}`} >
            <h1>Checkout</h1>
            <div className="place-horizintal coupon-div">
                <h3>Have a coupon?</h3>
                <h3>Click here to redeem it</h3>
            </div>
            <div>
                <form onSubmit={onSubmitHandler}>
                <h2>Billing Details</h2>
                <div className="place-horizintal">
                    <div>
                        <h3 className="required" name="Firstname">First Name</h3>
                        <input type="text" required />
                    </div>
                    <div>
                        <h3 className="required" name="Lastname">Last Name</h3>
                        <input type="text" required/>
                    </div>
                </div>
                <div className="place-horizintal">
                    <div>
                        <h3 className="required">Phone Number</h3>
                        <input type="number" required/>
                    </div>
                    <div>
                        <h3>E-mail</h3>
                        <input type="email" />
                    </div>
                </div>
                <div>
                    <div>
                        <h3 className="required">Address</h3>
                        <input type="text" required/>
                    </div>
                    <div className="place-horizintal">
                        <div>
                            <h3 className="required">Town/City</h3>
                            <input type="text" required/>
                        </div>
                        <div>
                            <h3 className="required">Pin-Code</h3>
                            <input type="text" required/>
                        </div>
                    </div>  
                </div>
                <div>
                    <div className="buttons-container">
                        <button onClick={props.onCloseClick}>Cancel</button>
                        <button type="submit">Confirm Order</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
        { isOrderSuccess === true ? <div className="confirmation">
            <h2>Order Placed!</h2>
            <h3>Thanks for choosing us</h3>
        </div> : null}
    </div>
    )
}
export default ShippingDetails;