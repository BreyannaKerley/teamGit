import React, {useEffect, useState} from 'react';
const Header = (props) => {
    console.log(props);
    const [zip, setZip] = useState('46214');
    const [weather, setWeather] = useState([]);
    const fetchResults = () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${props.owKey}`;
        console.log(url);
        fetch(url)
        .then(res => {
            res.json();
            // res.text();
            console.log(res.url);
            fetch(res.url)
            .then(res => console.log(res.json()))
            // .then(json => setWeather(json))
        })
        // console.log(res.json().[1].coord);
    }
    const handleSubmit = e =>{
        e.preventDefault();
        fetchResults();
    }
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
            <span>Enter USA Zipcode: <input type='zip' name='zip' onChange={(e) => setZip(e.target.value)} /></span>
            <br />
            <button className='submit'>What's the Weather</button>
            <br />
            <h1>Weather</h1>
                {weather ? <h2>{weather.main}</h2> : <div></div>}
                {weather ? <h2>{weather.description}</h2> : <div></div>}
                {weather ? <h2>{weather.main}</h2> : <div></div>}
            </form>
        </div>
    )
}
export default Header;