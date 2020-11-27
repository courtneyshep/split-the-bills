function totalIncome(incomeA, incomeB) {
    return incomeA + incomeB;
}

function calculateIncomePercentage(incomeA, incomeB){
    const income = totalIncome(incomeA, incomeB)
    const percentageA = incomeA / income;
    const percentageB = incomeB / income;
    return { percentageA, percentageB };
}

export function splitBillsByPercentage(incomeA, incomeB, costOfBills){
    const incomePercentages = calculateIncomePercentage(Number(incomeA), Number(incomeB));
    const personAToPay = incomePercentages.percentageA * costOfBills;
    const personBToPay = incomePercentages.percentageB * costOfBills;

    return { 
            PersonAPercentage: incomePercentages.percentageA, 
            PersonBPercentage: incomePercentages.percentageB, 
            personAToPay,
            personBToPay
         };
}
