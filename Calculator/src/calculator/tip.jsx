import { useState } from 'react'

const TipCalculator = () => {

    const percentages = [10, 15, 20]
    const [billAmount, setBillAmount] = useState(0)
    const [tipPercentage, setTipPercentage] = useState(10)
    const [numberOfPeople, setNumberOfPeople] = useState(1)
    const [activeButton, setACtiveButton] = useState('+')

    const OnButtonClick = (button) => {
        setACtiveButton(button)
        if (button === '+') {
            setNumberOfPeople(numberOfPeople + 1);
        } else {
            setNumberOfPeople(Math.max(1, numberOfPeople - 1));
        }
    }
    return (
        <>
            <div className="formContainer">
                <div className='field'>
                    <label htmlFor="billAmount">Bill Amount</label>
                    <input label="Bill Amount" type="number" value={billAmount} onChange={(e) => setBillAmount(parseFloat(e.target.value))} />
                </div>
                <div className='field' style={{ paddingRight: '15%' }}>
                    <label htmlFor="tipPercentage">Tip percentage</label>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        {percentages.map((percentage) => (
                            <button
                                key={percentage}
                                className={`stepButton ${percentage === tipPercentage ? 'stepButton-active' : ''}`}
                                onClick={() => setTipPercentage(percentage)}
                            >
                                {percentage}%
                            </button>
                        ))}
                    </div>
                </div>
                <div className='field' style={{ paddingRight: '18%' }}>
                    <label htmlFor="numberOfPeople">Number of People</label>
                    <div style={{ display: 'flex', gap: '10px', alignSelf: 'flex-start' }}>
                        <button
                            key={'+'}
                            className={activeButton === '+' ? 'stepButton-active' : 'stepButton'}
                            onClick={() => OnButtonClick('+')}>
                            +
                        </button>
                        {numberOfPeople}
                        <button
                            key={'-'}
                            className={activeButton === '-' ? 'stepButton-active' : 'stepButton'}
                            onClick={() => OnButtonClick('-')} >
                            -
                        </button>
                    </div>
                </div>
                <div className='display'>
                    <div>
                        Tip
                    </div>
                    <div>{tipPercentage}</div> </div>
                <div className='display'>
                    <div>
                        Total
                    </div>
                    <div>{billAmount}</div> </div>
                <svg width="200" height="5">
                    <line x1="0" y1="5" x2="200" y2="5" stroke="gray" strokeWidth="1" />
                </svg>
                <div className='display'>
                    <div>
                        Per Person
                    </div>
                    <div>{(((billAmount * tipPercentage / 100)) / numberOfPeople).toFixed(2)}  </div>
                </div>
            </div>
        </>
    )
}

export default TipCalculator