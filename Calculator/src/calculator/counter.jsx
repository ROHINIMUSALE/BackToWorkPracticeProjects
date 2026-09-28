import { useState } from 'react'
const Counter = () => {

    const buttons = [{ name: '+' }, { name: '-' }]
    const stepSizes = [1, 5, 10]
    const [count, setCount] = useState(0)
    const [stepSize, setStepSize] = useState(1)
    const [activeButton, setACtiveButton] = useState('+')

    const OnButtonClick = (button) => {
        setACtiveButton(button.name)
        if (button.name === '+') {
            setCount(count + stepSize);
        } else {
            if (count - stepSize > 0) {
                setCount(count - stepSize);
            }
        }
    }
    return (
        <>
            <div className='Container'>
                <h1>{count}</h1>
                <div className='buttonsContainer'>
                    {buttons.map((button) => (
                        <button
                            key={button.name}
                            className={activeButton === button.name ? "calButton-active" : "calButton"}
                            onClick={() => OnButtonClick(button)}>
                            {button.name}
                        </button>
                    ))}
                </div>
                <div style={{ marginTop: '20px' }}>Step Size</div>
                <div className='stepSizeContainer'>
                    {stepSizes.map((size) => (
                        <button
                            key={size}
                            className={stepSize === size ? "stepButton-active" : "stepButton"}
                            onClick={() => setStepSize(size)}>
                            +{size}
                        </button>
                    ))}
                </div>
                <div>
                    <button style={{ marginTop: '20px' }} className='resetButton'
                        onClick={() => setCount(0)}>Reset</button>
                </div>
            </div>
        </>
    )
}

export default Counter