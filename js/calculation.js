
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);

    inputField.value = " ";

    return amountValue;
}
function updateTotalField(totalFieldId, newDepositAmount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);

    const newTotal = previousTotal + newDepositAmount;
    totalElement.innerText = newTotal;

}
function getCurrentBalance() {
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    return previousBalanceTotal;
}
function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById("balance-total");
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        const newBalanceTotal = previousBalanceTotal + amount;
        balanceTotal.innerText = newBalanceTotal;
    } else {
        const newBalanceTotal = previousBalanceTotal - amount;
        balanceTotal.innerText = newBalanceTotal;
    }

}

// --------------------------------deposit---------------------------------------------------------
document.getElementById("deposit-button").addEventListener("click", function () {
    const newDepositAmount = getInputValue("deposit-input");

    if (newDepositAmount > 0) {
        updateTotalField("deposit-total", newDepositAmount);
        updateBalance(newDepositAmount, true);
    }

});

// --------------------------------withdraw---------------------------------------------------------
document.getElementById("withdraw-button").addEventListener("click", function () {

    const withdrawAmount = getInputValue("withdraw-input");
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField("withdraw-total", withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
});