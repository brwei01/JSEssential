let g1Amount;
let g2Amount;
let g3Amount;

function calculateAmount() {
    g1Amount = parseFloat(document.getElementById('g1').value);
    g2Amount = parseFloat(document.getElementById('g2').value);
    g3Amount = parseFloat(document.getElementById('g3').value);
    
    let totalAmount = g1Amount + g2Amount + g3Amount;

    document.getElementById('result').innerText = `The total amount is: $ ${totalAmount}`;

}