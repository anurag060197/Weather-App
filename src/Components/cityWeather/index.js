import React from 'react';
import { Form } from 'react-bootstrap';

const CityWeather = ({cityWeather, cityFoundOrNot}) => {
    // console.log(cityFoundOrNot === undefined);
    return (
        <Form.Group controlId="weather">
            <Form.Label>Weather</Form.Label>
            <Form.Control type="text" disabled placeholder="Weather" value={
                cityFoundOrNot === "Yes"
                    ? 'NAME - '+cityWeather.result.name+', TEMPERATURE - '+cityWeather.result.main.temp+' deg Celcius'+
                      ', HUMIDITY - '+cityWeather.result.main.humidity+', WIND SPEED - '+cityWeather.result.wind.speed
                    : ''
            }/>            
            <p className="text-danger">{cityFoundOrNot === "No" ? "City not Found" : ""}</p>
        </Form.Group>
    );
};

export default CityWeather;
