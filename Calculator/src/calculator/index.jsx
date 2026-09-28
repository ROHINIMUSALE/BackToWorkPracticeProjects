import { useState } from 'react'
import Counter from './counter'
import TipCalculator from './tip'
import BMICalculator from './bmi'

const Home = () => {

    const buttons = [{ name: 'Counter', path: '/counter' },
    { name: 'Tip Calculator', path: '/tip' },
    { name: 'BMI Calculator', path: '/bmi' }]
    const [activeButton, setACtiveButton] = useState('Counter')
    const OnButtonClick = (button) => {
        setACtiveButton(button.name)
    }
    return (
        <>
            <div className='buttonsContainer'>
                {buttons.map((button) => (
                    <button
                        key={button.name}
                        className={`button ${activeButton === button.name ? 'button-active' : ''}`}
                        onClick={() => OnButtonClick(button)}
                    >
                        {button.name}
                    </button>
                ))}
            </div>
            <div>
                {activeButton === 'Counter' ? <Counter />
                    : activeButton === 'Tip Calculator' ? <TipCalculator />
                        : activeButton === 'BMI Calculator' ? <BMICalculator />
                            : null}
            </div>
        </>
    )
}

export default Home