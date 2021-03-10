import React, {useState, useEffect} from 'react';
<<<<<<< HEAD
import "./Home.css";
const Home = (props) => {
    const [lon, setLon] = useState('-86.2875');
    const [lat, setLat] = useState('39.7924');
    const [date, setDate] = useState('');
    const [results, setResults] = useState ({});
    const nasaKey = 'ihsCPXbr1PJhfBa0E1LxYPm8JTPO47MHYnJIPZoL';
    let test = results.url
    const fetchResults = () => {
       const url = `https://api.nasa.gov/planetary/earth/assets?lon=${lon}&lat=${lat}&date=${date}&api_key=${nasaKey}`;
        //console.log(url)
        
        fetch(url)
        .then(res => res.json())
        .then(json => setResults(json))
        console.log(results)
=======

const Home = (props) => {

    const [lon, setLon] = useState('-86.2875');
    const [lat, setLat] = useState('39.7924');
    const [date, setDate] = useState('');

    const fetch = () => {

        const nasaKey = 'ihsCPXbr1PJhfBa0E1LxYPm8JTPO47MHYnJIPZoL';
        const url = `https://api.nasa.gov/planetary/earth/assets?lon=${lon}&lat=${lat}&date=${date}&api_key=${nasaKey}`;

        console.log(url)
        fetch(url)
        .then(res => res.json())
        .then(json => console.log(json))
    }

    const handleSubmit = e => {
        e.preventDefault();
        fetch();
>>>>>>> bf84d40ae7e10852768c5a899a06323c5f69709f
    }
    const handleSubmit = e => {
        e.preventDefault();
        fetchResults();
    }
    // useEffect(() => {
    //     fetch();
    // }, [handleSubmit])
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
            <span>Enter Date: <input type='date' name='date' onChange={(e) => setDate(e.target.value)} /></span>
            <br />
            <button className='submit'>Satalite Img</button>
            <br />
<<<<<<< HEAD
            <br/>
            <br/>
            {results ? <img src={test}  id="img"/> : <div></div>}
=======
>>>>>>> bf84d40ae7e10852768c5a899a06323c5f69709f
            </form>
        </div>
    )
}
export default Home;