import { Grid, Typography } from "@mui/material";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts";

const Cars = () => {
    const context = useContext(AppContext)

    const fetchCars = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/cars');
            context?.getCars?.setCars(response.data);
        } catch (error) {
            console.error('Error fetching cars:', error);
        }
    };

    useEffect(() => {
        fetchCars()
            .then()
    }, []);

    return (
        <Grid container spacing={2}>
            {context?.getCars?.cars.map((car, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                    <Typography variant="subtitle1">{`${car.year} ${car.manufacture} ${car.model}`}</Typography>
                </Grid>
            ))}
        </Grid>
    );
};

export default Cars;
