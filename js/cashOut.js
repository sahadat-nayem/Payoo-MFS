// Cash Out to the account

document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();

    const cashOUtInput = document.getElementById('input-cash-out').value;
    
    const pinNumberInput = document.getElementById('input-cash-out-pin').value;

    if(pinNumberInput === '1234'){
        const balance = document.getElementById('account-balance').innerText;
        const cashOutNumber = parseFloat(cashOUtInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber - cashOutNumber;

        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed to add money! please try again')
    }
});