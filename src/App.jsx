import './App.css';
import {bestSellingTv, inventory} from "./constants/inventory.js";
import {calculateProductsSold} from "./helpers/calculateProductsSold.js";
import {calculateInitialStock} from "./helpers/calculateInitialStock.js";
import {calculateStockToSell} from "./helpers/calculateStockToSell.js";
import {generateProductName} from "./helpers/generateProductName.js"
import {generateStringScreenSizes} from "./helpers/generateStringScreenSizes.js"
import {generatePriceDisplay} from "./helpers/generatePriceDisplay.js";
import bestSellerImage from "./assets/smart-tv.png";
import check from "./assets/check.png";
import minus from "./assets/minus.png";

function App() {
    return (
    <>
        <h1>Tech it easy dashboard</h1>
        <h2>Verkoopoverzicht</h2>
        <section className="verkoopoverzicht">
            <article className="soldProductsContainer">
                <h3>Aantal verkochte producten</h3>
                <h2>{calculateProductsSold(inventory)}</h2>
            </article>
            <article className="boughtStockContainer">
                <h3>Aantal ingekochte producten</h3>
                <h2>{calculateInitialStock(inventory)}</h2>
            </article>
            <article className="toSellContainer">
                <h3>Aantal te verkopen producten</h3>
                <h2>{calculateStockToSell(inventory)}</h2>
            </article>
        </section>
        <section>
            <h2>Best verkochte tv</h2>
            <article className="bestSellingProductContainer">
                <img className="bestSellerImage" src={bestSellerImage} alt="photo of a tv"/>
                <div className="bestSellerInfo">
                    <h3>{generateProductName(bestSellingTv)}</h3>
                    <h2>{generatePriceDisplay(bestSellingTv.price)}</h2>
                    <p>{generateStringScreenSizes(bestSellingTv)}</p>
                    <p><img className="checkIcon" src={check} alt="check icon"/> wifi
                        <img className="minusIcon" src={minus} alt="minus icon"/> speech
                        <img className="checkIcon" src={check} alt="check icon"/> hdr
                        <img className="checkIcon" src={check} alt="check icon"/> bluetooth
                        <img className="minusIcon" src={minus} alt="minus icon"/> ambilight
                    </p>
                </div>
            </article>
        </section>
        <section className="buttons">
            <h2>Alle tvs</h2>
            <button type="button" onClick={() => console.log("Meest verkocht eerst")}>
                Meest verkocht eerst
            </button>
            <button type="button" onClick={() => console.log("Goedkoopste eerst")}>
                Goedkoopste eerst
            </button>
            <button type="button" onClick={() => console.log("Meest geschikt voor sport eerst")}>
                Meest geschikt voor sport eerst
            </button>
        </section>
    </>
  )
}

export default App
