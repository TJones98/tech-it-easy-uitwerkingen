export function generateStringScreenSizes(tv) {
    if (tv.availableSizes.length === 1) {
        return `${tv.availableSizes} inch (${Math.round(tv.availableSizes * 2.54)} cm)`
    }
    else {
        let string = ''
        for (let i = 0; i < tv.availableSizes.length; i++) {
            string = string + `${tv.availableSizes[i]} inch (${Math.round(tv.availableSizes[i] * 2.54)} cm) | `
        }
        return string
    }
}


