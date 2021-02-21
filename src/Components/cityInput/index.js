import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import CityWeather from "../cityWeather";

const CityInput = ({city, setCity, fetchCityWeather, cityWeather, cityFoundOrNot,  setCityFoundOrNot}) => {
    const [error, setError] = useState("");

    const handleInput = (event)=>{
        setError("");
        setCity(event.target.value);
        setCityFoundOrNot("");
    }

    const handleButton = ()=>{
        if(!city){
            setError("City field is empty");
            setCityFoundOrNot("");
        }
        else{
            setCity("");
            fetchCityWeather();
        }
    }
    return (
        <Container>
            <Form>
                <Form.Group controlId="city">
                    <Form.Label>City</Form.Label>
                    <Form.Control value={city} type="text" placeholder="Enter city" onChange={handleInput}/>
                    <p className="text-danger">{error}</p>
                </Form.Group>
                <CityWeather cityWeather={cityWeather} cityFoundOrNot={cityFoundOrNot}/>
                <Button variant="primary" onClick={handleButton}>
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default CityInput;