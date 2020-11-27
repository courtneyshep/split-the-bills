import { hot } from 'react-hot-loader/root';
import React, { useState } from 'react';
import { splitBillsByPercentage } from './calculations';


const defaultAmounts = {
    amount: 0,
    percentage: 100,
};

function App(props) {
    const [personA, setPersonA] = useState(defaultAmounts);
    const [personB, setPersonB] = useState(defaultAmounts);

    const handleSubmit = () => {
        const result = splitBillsByPercentage(input1.value, input2.value, bills.value);
        setPersonA({
            amount: result.personAToPay,
            percentage: result.PersonAPercentage
        });
        setPersonB({
            amount: result.personBToPay,
            percentage: result.PersonBPercentage
        });
    }

    return (
        <>
            <div>
                <div>
                    <label for="input1">annual salary one:</label>
                    <input id='input1' type='text'></input>
                </div>
                <div>
                    <label for="input2"> annual salary two:</label>
                    <input id='input2' type='text'></input>
                </div>
                <div>
                    <label for="bills">total bills per month:</label>
                    <input id='bills' type='text'></input>
                </div>
            </div>
            <button onClick={() => handleSubmit()}>Calculate</button>
            <div>Person A percentage: {personA.percentage * 100}% </div>
            <div>Person A contribution: £{personA.amount} </div>
            <div>Person B percentage: {personB.percentage * 100}%</div>
            <div>Person B contribution: £{personB.amount}</div>
        </>
    );
}

export default hot(App);