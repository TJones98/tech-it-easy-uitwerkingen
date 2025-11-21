import './App.css';
import {bestSellingTv, inventory} from "./constants/inventory.js";
import calculateProductsSold from "./helpers/calculateProductsSold.js";
import calculateInitialStock from "./helpers/calculateInitialStock.js";
import calculateStockToSell from "./helpers/calculateStockToSell.js";
import generateProductName from "./helpers/generateProductName.js";
import generateStringScreenSizes from "./helpers/generateStringScreenSizes.js";
import generatePriceDisplay from "./helpers/generatePriceDisplay.js";
import showAssignmentOneInConsole from "./constants/oefeningen-opdracht-1.js"
import check from "./assets/check.png";
import minus from "./assets/minus.png";

function App() {
    showAssignmentOneInConsole();

    function sortSoldProducts() {
        inventory.sort((a, b) => {
            return b.sold - a.sold
        });

        console.log('Best verkocht eerst', inventory);
    }

    function sortCheapestFirst() {
        inventory.sort((a, b) => {
            return a.price - b.price
        });

        console.log('Goedkoopste eerst', inventory);
    }

    function sortRefreshRate() {
        inventory.sort((a, b) => {
            return b.refreshRate - a.refreshRate
        });

        console.log('Meest geschikt voor sport eerst', inventory);
    }

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
            <article className="productContainer">
                <img className="productImage" src={bestSellingTv.sourceImg} alt="Tv"/>
                <div className="productInfo">
                    <h3>{generateProductName(bestSellingTv)}</h3>
                    <h2>{generatePriceDisplay(bestSellingTv.price)}</h2>
                    <p>{generateStringScreenSizes(bestSellingTv)}</p>
                    <ul className="optionList" key={bestSellingTv.options}>
                        {bestSellingTv.options.map((option) => {
                            if (option.applicable === true) {
                                return <li key={option.name}>
                                    <img className="checkIcon" src={check} alt="check icon"/>
                                    {option.name}
                                </li>
                            }
                            else {
                                return <li key={option.name}>
                                    <img className="minusIcon" src={minus} alt="minus icon"/>
                                    {option.name}
                                </li>
                            }
                        })}
                    </ul>
                </div>
            </article>
        </section>
        <section className="everyTv">
            <h2>Alle tvs</h2>
            <div className="filterButtons">
                <button type="button" onClick={sortSoldProducts}>
                    Meest verkocht eerst
                </button>
                <button type="button" onClick={sortCheapestFirst}>
                    Goedkoopste eerst
                </button>
                <button type="button" onClick={sortRefreshRate}>
                    Meest geschikt voor sport eerst
                </button>
            </div>
            {inventory.map((tv) => {
                    return (
                        <article className="productContainer" key={tv.type}>
                            <img className="productImage" src={tv.sourceImg} alt="Tv"/>
                            <div className="productInfo">
                                <h3>{generateProductName(tv)}</h3>
                                <h2>{generatePriceDisplay(tv.price)}</h2>
                                <p>{generateStringScreenSizes(tv)}</p>
                                <ul className="optionList" key={tv.options}>
                                    {tv.options.map((option) => {
                                        if (option.applicable === true) {
                                            return <li key={option.name}>
                                                <img className="checkIcon" src={check} alt="check icon"/>
                                                {option.name}
                                            </li>
                                        }
                                        else {
                                            return <li key={option.name}>
                                                <img className="minusIcon" src={minus} alt="minus icon"/>
                                                {option.name}
                                            </li>
                                        }
                                    })}
                                </ul>
                            </div>
                        </article>
                    )
                }
            )}
        </section>
    </>
  )
}

export default App
