function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {

    // Check if we're serving orders first-come, first-served
    let takeOutOrdersIndex = 0;
    let dineInOrdersIndex = 0;
    let takeOutOrdersMax = takeOutOrders.length;
    let dineInOrdersMax = dineInOrders.length;

    for (let i = 0; i < servedOrders.length; i++) {
        let currentOrder = servedOrders[i];
        if (takeOutOrdersIndex < takeOutOrdersMax && currentOrder === takeOutOrders[takeOutOrdersIndex]) {
            takeOutOrdersIndex += 1
        } else if (dineInOrdersIndex < dineInOrdersMax && currentOrder === dineInOrders[dineInOrdersIndex]) {
            dineInOrdersIndex += 1
        } else {
            return false
        }
    }

    if (takeOutOrdersIndex !== takeOutOrdersMax || dineInOrdersIndex !== dineInOrdersMax) {
        return false;
    }
    return true
}