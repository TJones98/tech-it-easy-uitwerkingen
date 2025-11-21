import calculateInitialStock from "./calculateInitialStock.js";
import calculateProductsSold from "./calculateProductsSold.js";

function calculateStockToSell(productArray) {
    return calculateInitialStock(productArray) - calculateProductsSold(productArray);
}

export default calculateStockToSell;