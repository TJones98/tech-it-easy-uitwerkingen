import {inventory} from "../constants/inventory.js";

function showAssignmentOneInConsole() {
    ////// Opdracht 1a ////////

    const tvTypeNames = inventory.map((tv) => {
        return tv.type;
    });

    console.log(tvTypeNames);

    //////// Opdracht 1b ////////

    const soldOutTvs = inventory.filter((tv) => {
        return tv.originalStock - tv.sold === 0;
    });

    console.log(soldOutTvs);

    //////// Opdracht 1c ////////

    const infoSpecificTv = inventory.find((tv) => {
        return tv.type === 'NH3216SMART';
    });

    console.log(infoSpecificTv);

    //////// Opdracht 1d ////////

    const suitableForWatchingSports = inventory.map((tv) => {
        if (tv.refreshRate >= 100) {
            return `name: ${tv.brand} ${tv.name}, suitable: true`;
        } else {
            return `name: ${tv.brand} ${tv.name}, suitable: false`;
        }
    });

    console.log(suitableForWatchingSports);

    ////// Opdracht 1e ////////

    const hasLargeScreen = inventory.filter((tv) => {
        return tv.availableSizes.some((size) => {
            return size >= 65;
        });
    });

    console.log(hasLargeScreen);

    ////// Opdracht 1f ////////

    const hasAmbilight = inventory.filter((tv) => {
        return tv.options.some((option) => {
            return option.name === "ambiLight" && option.applicable === true;
        });
    });

    console.log(hasAmbilight)
}

export default showAssignmentOneInConsole;
