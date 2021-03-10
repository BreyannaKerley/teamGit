const DisplayWeather = (props) => {

    return (
        <div>
            <section>
            {props.weather.map(w => (
                <div>
                    <h1>Weather In: {w.name}</h1>
                    <h5>Celsius Temperature: {Math.floor(((w.main.feels_like - 273.15)*(9/5)+32))}</h5>
                    <h5>Celsius Feels Like: {Math.floor(((w.main.feels_like - 273.15)*(9/5)+32))}</h5>
                    <h5>Fahrenheit Temperature: {Math.floor((w.main.feels_like - 273.15))}</h5>
                    <h5>Fahrenheit Feels Like: {Math.floor((w.main.feels_like - 273.15))}</h5>
                </div>
            )
            )
            }
            </section>
        </div>
    )
}

export default DisplayWeather;