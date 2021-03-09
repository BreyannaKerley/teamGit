import React, {useState} from 'react';

const Header = (props) => {
    console.log(props);
    const [lon, setLon] = useState(-86.148003);
    const [lat, setLat] = useState(39.791000);

    const fetchWeather = () => {
        let key = props.nasaKey;
        const url = `https://api.nasa.gov/planetary/earth/imagery?lon=${lon}&lat=${lat}&api_key=${key}`;

        fetch(url)
        .then(res => res.json())
        .then(json => console.log(json))

    }

    const handleSubmit = (e) =>
    e.preventDefault();
    fetchWeather();
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h1>Weather</h1>
            <span>Enter Longitude: <input type='lon' name='lon' onChange={(e) => setLon(e.target.value)} /></span>
            <br />
            <span>Enter Latitude: <input type='lat' name='lat' onChange={(e) => setLat(e.target.value)} /></span>
            <br />
            <button className='submit'>What's the Weather</button>
            </form>
        </div>
    )
}

export default Header;