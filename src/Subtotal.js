import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* pArt of homework */}
              Subtotal ({basket?.length} items): <strong>{ basket.reduce((a, b) => a + b.price, 0) } 💶</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox"></input>
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        // value={0} //homework
        // value={basket.reduce((acc, curr) => acc + curr.price, 0) }
        value={ basket.reduce((a, b) => a + b.price, 0) }
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
