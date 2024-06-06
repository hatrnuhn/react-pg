import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Box, Grid } from "@mui/material";

const Lend = () => {
    // const Token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdXBlcklkIjoxLCJ1c2VySWQiOjE4LCJlbWFpbCI6InN1cGVyYWRtaW4xQGNoNi5jb20iLCJ1c2VybmFtZSI6InN1cGVyYWRtaW4xIiwiaWF0IjoxNzE3NTk2OTQ2LCJleHAiOjE3MjAxODg5NDZ9.HamtIOEx2obmkGSS1NCFRoD6bAgctpS5Be9Bat-16NQ'
    const Token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoxLCJ1c2VySWQiOjIzLCJlbWFpbCI6ImFkbWluMUBjaDYuY29tIiwidXNlcm5hbWUiOiJhZG1pbjEiLCJpYXQiOjE3MTc1OTcxNDEsImV4cCI6MTcyMDE4OTE0MX0.KoLJ-g7DnnWBsdWHm3p1Yz00S2IUTO5Z8VLyQ6b1KqM'
    const [newCar, setNewCar] = useState({
        plate: "",
        manufacture: "",
        model: "",
        rate: "",
        description: "",
        transmission: "",
        type: "",
        year: "",
        options: [""],
        specs: [""]
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewCar((prevCar) => ({
            ...prevCar,
            [name]: value
        }));
    };

    const handleOptionChange = (index: number, value: string) => {
        setNewCar((prevCar) => {
            const newOptions = [...prevCar.options];
            newOptions[index] = value;
            return { ...prevCar, options: newOptions };
        });
    };

    const handleSpecChange = (index: number, value: string) => {
        setNewCar((prevCar) => {
            const newSpecs = [...prevCar.specs];
            newSpecs[index] = value;
            return { ...prevCar, specs: newSpecs };
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/cars', newCar, {
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
                <Grid item xs={12}>
                    <TextField
                        name="plate"
                        label="Plate"
                        fullWidth
                        value={newCar.plate}
                        onChange={handleChange}
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name="manufacture"
                        label="Manufacture"
                        fullWidth
                        value={newCar.manufacture}
                        onChange={handleChange}
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name="model"
                        label="Model"
                        fullWidth
                        value={newCar.model}
                        onChange={handleChange}
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name="rate"
                        label="Rate"
                        fullWidth
                        value={newCar.rate}
                        onChange={handleChange}
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name="description"
                        label="Description"
                        fullWidth
                        value={newCar.description}
                        onChange={handleChange}
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name="transmission"
                        label="Transmission"
                        fullWidth
                        value={newCar.transmission}
                        onChange={handleChange}
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name="type"
                        label="Type"
                        fullWidth
                        value={newCar.type}
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
                        value={newCar.year}
                        onChange={handleChange}
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name="options"
                        label="Options"
                        fullWidth
                        value={newCar.options[0]}
                        onChange={(e) => handleOptionChange(0, e.target.value)}
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name="specs"
                        label="Specs"
                        fullWidth
                        value={newCar.specs[0]}
                        onChange={(e) => handleSpecChange(0, e.target.value)}
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary">
                        Add Car
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Lend;
