import React, {useEffect, useState} from 'react';
import '../../App.css'
import Flight from "../Flight/Flight";

const Flights = () => {

    const [flights, setFlights] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(flights => {
                setFlights(flights.filter(flight => flight.launch_year !== '2020'));
            })
    }, [])

    return (
        <div>
            <h1 className={"header"}>FLIGHTS</h1>
            <div className={"flights"}>
                {flights.map(value => <Flight key={value.launch_date_utc} flight={value}/>)}
            </div>
        </div>
    );
};

export default Flights;