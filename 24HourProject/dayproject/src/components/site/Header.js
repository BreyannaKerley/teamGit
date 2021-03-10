import React, {useEffect, useState} from 'react';
<<<<<<< HEAD
=======

>>>>>>> bf84d40ae7e10852768c5a899a06323c5f69709f
const Header = (props) => {
    console.log(props);
    const [zip, setZip] = useState('46214');
    const [weather, setWeather] = useState([]);
<<<<<<< HEAD
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
=======

    const fetchResults = () => {
        const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${props.owKey}`;
        console.log(url);

        fetch(url, {
            method: 'GET'
        })
        .then(res => {
            res.json();
            // res.text();
            console.log(res);
        })
        .then(json => console.log(json))
    }

    const handleSubmit = e =>{
        e.preventDefault();
        fetchResults();
    }
    
>>>>>>> bf84d40ae7e10852768c5a899a06323c5f69709f
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