import {calculateInitialStock} from "./calculateInitialStock.js";
import {calculateProductsSold} from "./calculateProductsSold.js";

export function calculateStockToSell(productArray) {
    return calculateInitialStock(productArray) - calculateProductsSold(productArray);
}
