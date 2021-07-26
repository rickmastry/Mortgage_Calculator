//formula: c = ((p * r) * Math.pow((1 + r), n)) / (Math.pow((1 + r), n) -1)
//@param p = principal float
//@param r = interest rate as a percentage
//@param n = term in years
function calculateMortgage(p, r, n){
    

    //convert percentage to decimal
    r = percentToDecimal(r);

    //convert years to months
    n = yearsToMonths(n);

    const pmt = ((p * r) * Math.pow((1 + r), n)) / (Math.pow((1 + r), n) -1);

    return parseFloat(pmt.toFixed(2));

    
}

function percentToDecimal(percent){
   return  (percent/12) / 100;
}

function yearsToMonths(year){
    return year * 12
}

function calculateBtn(){
    let cost = document.getElementById('inCost').value;
  
    if(cost == ""){
        alert('Please enter a cost amount');
        return false;
    }
    if(isNaN(cost)){
        alert('Must input a number');
        return false;
    }

    let downPayment = document.getElementById('inDown').value;
   
    if(isNaN(downPayment)){
        alert('Must input a number down');
        return false;
    }

    let interest = document.getElementById('inAPR').value;
  
    if(interest == ""){
        alert('Please enter a interest amount');
        return false;
    }
    if(isNaN(interest)){
        alert('Must input a number interest');
        return false;
    }

    let term = document.getElementById('inPeriod').value;
   
    if(term == ""){
        alert('Please enter a term amount');
        return false;
    }
    if(isNaN(term)){
        alert('Must input a number term');
        return false;
    }

    let amountBorrowed = cost- downPayment;

    let finalPmt = calculateMortgage(amountBorrowed, interest, term);

    postPayments(finalPmt);
}

let btnCalc = document.getElementById('btnCalculate');
btnCalc.addEventListener('click', calculateBtn);

function postPayments(payment){
    let htmlEl = document.getElementById('outMonthly');
    htmlEl.innerText = "$" + payment;
}