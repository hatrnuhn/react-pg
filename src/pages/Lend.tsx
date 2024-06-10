import React, { useContext } from "react";
import axios from "axios";
import { TextField, Button, Box, Grid } from "@mui/material";
import { AppContext } from "../contexts";

const Lend = () => {
    const Token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoxLCJ1c2VySWQiOjIzLCJlbWFpbCI6ImFkbWluMUBjaDYuY29tIiwidXNlcm5hbWUiOiJhZG1pbjEiLCJpYXQiOjE3MTc1OTcxNDEsImV4cCI6MTcyMDE4OTE0MX0.KoLJ-g7DnnWBsdWHm3p1Yz00S2IUTO5Z8VLyQ6b1KqM'

    const context = useContext(AppContext)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        context?.addCar?.setNewCar((prevCar) => {
            if (!prevCar)
                return null

            return {
                ...prevCar,
                [name]: value
            }
        })
    } 

    const handleOptionChange = (index: number, value: string) => {
        context?.addCar.setNewCar((prevCar) => {
            if (!prevCar)
                return null

            const newOptions = [...prevCar.options];
            newOptions[index] = value;
            return { ...prevCar, options: newOptions };
        })
    }

    const handleSpecChange = (index: number, value: string) => {
        context?.addCar.setNewCar((prevCar) => {
            if (!prevCar)
                return null

            const newSpecs = [...prevCar.specs];
            newSpecs[index] = value;
            return { ...prevCar, specs: newSpecs };
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/cars', context?.addCar.newCar, {
                headers: {
                    'Authorization': `Bearer ${Token}`
                }
            });
            console.log('Car added successfully:', response.data);
        } catch (error) {
            console.error('Error posting car:', error);
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                {(context && context.addCar.newCar) ? 
                    <>
                        <Grid item xs={12}>
                            <TextField
                                name="plate"
                                label="Plate"
                                fullWidth
                                value={context.addCar.newCar.plate}
                                onChange={handleChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="manufacture"
                                label="Manufacture"
                                fullWidth
                                value={context.addCar.newCar.manufacture}
                                onChange={handleChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="model"
                                label="Model"
                                fullWidth
                                value={context.addCar.newCar.model}
                                onChange={handleChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="rate"
                                label="Rate"
                                fullWidth
                                value={context.addCar.newCar.rate}
                                onChange={handleChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="description"
                                label="Description"
                                fullWidth
                                value={context.addCar.newCar.description}
                                onChange={handleChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="transmission"
                                label="Transmission"
                                fullWidth
                                value={context.addCar.newCar.transmission}
                                onChange={handleChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="type"
                                label="Type"
                                fullWidth
                                value={context.addCar.newCar.type}
                                onChange={handleChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="year"
                                label="Year"
                                type="number"
                                fullWidth
                                value={context.addCar.newCar.year}
                                onChange={handleChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="options"
                                label="Options"
                                fullWidth
                                value={context.addCar.newCar.options[0]}
                                onChange={(e) => handleOptionChange(0, e.target.value)}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="specs"
                                label="Specs"
                                fullWidth
                                value={context.addCar.newCar.specs[0]}
                                onChange={(e) => handleSpecChange(0, e.target.value)}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" color="primary">
                                Add Car
                            </Button>
                        </Grid>
                    </> : <></>}
            </Grid>
        </Box>
    )
}

export default Lend
