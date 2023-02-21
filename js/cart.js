function forClick(isMinus, itemNumber, perItemPrice) {
    const inputResult = document.getElementById('input-result-' + itemNumber);
    const itemTotalPrice = document.getElementById('item-price-' + itemNumber);
    const subTotal = document.getElementById('sub-total');
    const tax = document.getElementById('tax');
    const total = document.getElementById('total');
    const maxItemNumber = document.getElementsByTagName('sub');
    var sum = 0;
    for (i = 1; i <= maxItemNumber.length; i++) {
        sum = sum + parseFloat(document.getElementById('item-price-' + i).innerText);
    }

    subTotal.innerText = sum;
    tax.innerText = sum * (5 / 100);
    total.innerText = sum + parseFloat(tax.innerText);

    function itemTotalPriceFn() {
        itemTotalPrice.innerText = perItemPrice * parseInt(inputResult.value);
    }
    function taxAmmount() {
        tax.innerText = parseInt(subTotal.innerText) * (5 / 100);
    }
    function totalAmmount() {
        total.innerText = parseInt(subTotal.innerText) + parseFloat(tax.innerText);
    }

    if (isMinus) {
        document.getElementById('minus-button-' + itemNumber).addEventListener('click', function () {
            if (parseInt(inputResult.value) >= 1) {
                inputResult.value = parseInt(inputResult.value) - 1;
                itemTotalPriceFn();
                subTotal.innerText = parseInt(subTotal.innerText) - perItemPrice;
                taxAmmount();
                totalAmmount();
                crossFunction();
            }
        })
    } else {
        document.getElementById('plus-button-' + itemNumber).addEventListener('click', function () {
            inputResult.value = parseInt(inputResult.value) + 1;
            itemTotalPriceFn();
            subTotal.innerText = parseInt(subTotal.innerText) + perItemPrice;
            taxAmmount();
            totalAmmount();
            crossFunction(); 
        })
    }
}


function forCross( itemNumber, perItemPrice) {
    const itemTotalPrice = document.getElementById('item-price-' + itemNumber);
    const subTotal = document.getElementById('sub-total');
    const tax = document.getElementById('tax');
    const total = document.getElementById('total');
    document.getElementById('cross-' + itemNumber).addEventListener('click', function () {
        document.getElementById('item-' + itemNumber).style.display = "none";
        subTotal.innerText = parseFloat(subTotal.innerText) - parseFloat(itemTotalPrice.innerText);
        tax.innerText = parseInt(subTotal.innerText) * (5 / 100);
        total.innerText = parseInt(subTotal.innerText) + parseFloat(tax.innerText);
    })
}




forClick(true, 1, 200);
forClick(false, 1, 200);
forCross( 1, 200);

forClick(true, 2, 1200);
forClick(false, 2, 1200);
forCross( 2, 1200);
