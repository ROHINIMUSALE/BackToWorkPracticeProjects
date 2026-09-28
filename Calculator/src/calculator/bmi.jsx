import { useState, useEffect } from 'react'

const BMICalculator = () => {

    const [height, setHeight] = useState(0)
    const [weight, setWeight] = useState(0)
    const [heightError, setHeightError] = useState(false)
    const [weightError, setWeightError] = useState(false)
    const [bmi, setBmi] = useState(0)
    const [category, setCategory] = useState('Normal')

    const onChangeHeight = (e) => {
        const value = parseFloat(e.target.value)
        setHeight(value)
        setHeightError(value <= 0)
    }

    const onWeightChange = (e) => {
        const value = parseFloat(e.target.value)
        setWeight(value)
        setWeightError(value <= 0)
    }

    useEffect(() => {
        if (bmi < 18.5) {
            setCategory('Underweight')
        } else if (bmi < 25) {
            setCategory('Normal')
        } else if (bmi < 30) {
            setCategory('Overweight')
        } else {
            setCategory('Obese')
        }
    }, [bmi])

    useEffect(() => {
        const heightInMeters = Number(height) / 100
        const bmi =
            weight > 0 && height > 0
                ? Number(weight) / (heightInMeters * heightInMeters)
                : 0
        setBmi(bmi.toFixed(1))
    }, [height, weight])
    return (
        <>
            BMI Calculator
            <div className="formContainer">
                <div className='field'>
                    <label htmlFor="height">Height (cm)</label>
                    <input label="Height" type="number" value={height} className={heightError ? "input-error" : ""}
                        onChange={(e) => onChangeHeight(e)} />
                    {heightError && <div className="error">Enter a height above 0</div>}
                </div>
                <div className='field'>
                    <label htmlFor="weight">Weight (kg)</label>
                    <input label="Weight" type="number" value={weight} className={weightError ? "input-error" : ""}
                        onChange={(e) => onWeightChange(e)} />
                    {weightError && <div className="error">Enter a weight above 0</div>}
                </div>

                <div style={{ marginLeft: '5%' }}>
                    <div>Your BMI</div>
                    <h1>{bmi}</h1>
                    <div className="category">{category}</div>
                </div>
            </div>
        </>
    )
}

export default BMICalculator