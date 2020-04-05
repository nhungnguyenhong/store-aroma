import React from 'react'
import "./CartTotal.css";

export default function CartTotals({value}) {
    const {cartSubTotal, cartTax, cartTotal} = value;
    return (
    <React.Fragment>
        <div className="container">
            <div className="row">
                <div>
                    <h4 className="totalAll">
                        <span >
                            Subtotal:
                            ${cartSubTotal}
                        </span>
                        &emsp;&emsp;
                        <span >
                            Tax:
                            ${cartTax}
                        </span>
                        &emsp;&emsp;
                        <span >
                            Total:
                            ${cartTotal}
                        </span>
                    </h4>
                </div>
                <br></br>
            </div>
        </div>
    </React.Fragment>
  )
}