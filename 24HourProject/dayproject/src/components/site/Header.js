import React, {useEffect, useState} from 'react';
import WeatherDisplay from './WeatherDisplay';
import Card from './Card';

const Header = (props) => {
    // console.log(props);
    const [zip, setZip] = useState('');
    const [weather, setWeather] = useState([]);
    const [a, setA] = useState(false);

    // let temp = Math.floor(weather.main.temp - 273.15);
    // let fTemp = Math.floor(((weather.main.teamp -273.15)*(9/5)+32));

    const fetchResults = () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${props.owKey}`;
        console.log(url);

        fetch(url)
        .then(res => res.json())
        .then(json => setWeather([json]))
        console.log(weather);
        // console.log(temp);
        
    }

    const handleSubmit = e =>{
        setWeather([]);
        console.log(weather);
        e.preventDefault();
        fetchResults();
        setA(true);
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
            <span>Enter USA Zipcode: <input type='zip' name='zip' onChange={(e) => setZip(e.target.value)} /></span>
            <br />
            <button className='submit'>What's the Weather</button>
            <br />
            </form>
            <div>
                {a ? <WeatherDisplay weather={weather} /> : null}
            </div>
            <Card />
        </div>
    )
}
export default Header;