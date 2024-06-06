import { Box, Button, Grid, IconButton, Stack, TextField, Typography } from "@mui/material"
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import React, { useState } from "react";
import axios from "axios";

const UpdateCar = () => {
    const Token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoxLCJ1c2VySWQiOjIzLCJlbWFpbCI6ImFkbWluMUBjaDYuY29tIiwidXNlcm5hbWUiOiJhZG1pbjEiLCJpYXQiOjE3MTc1OTcxNDEsImV4cCI6MTcyMDE4OTE0MX0.KoLJ-g7DnnWBsdWHm3p1Yz00S2IUTO5Z8VLyQ6b1KqM'
    const [update, setUpdate] = useState({
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
    const [carId, setCarId] = useState('')

    const handleCarIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCarId(id => id = e.target.value)
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setUpdate(u => ({...u, [name]: value}))
    }

    const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
        const options = [...update.options]
        options[index] = e.target.value
        setUpdate(u => ({...u, options}))
    }

    const handleSpecChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
        const specs = [...update.specs]
        specs[index] = e.target.value
        setUpdate(u => ({...u, specs}))
    }
    
    const handleAdd = (component: string) => {
        switch (component) {
            case 'option':
                setUpdate(u => ({...u, options: [...u.options, '']}))
                break;
            case 'spec':
                setUpdate(u => ({...u, specs: [...u.specs, '']}))
                break;
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(update)
        const payload: Partial<typeof update> = {}

        if (update.description) payload.description = update.description
        if (update.manufacture) payload.manufacture = update.manufacture
        if (update.model) payload.model = update.model
        if (update.options.length) payload.options = update.options
        if (update.plate) payload.plate = update.plate
        if (update.rate) payload.rate = update.rate
        if (update.specs.length) payload.specs = update.specs
        if (update.transmission) payload.transmission = update.transmission
        if (update.type) payload.type = update.type
        if (update.year) payload.year = update.year

        try {
            const res = await axios.patch(`http://localhost:3000/api/cars/${carId}`, payload, {
                headers: {
                    Authorization: `Bearer ${Token}`
                }
            })
            console.log(res.data)
        } catch (err) {
            if (err instanceof Error)
                console.error(err.message)
        }
    }

    return (
        <Box component='form' onSubmit={handleSubmit}>
            <Stack direction='column' spacing={1}>
                <Typography variant='h5'>Enter CarId</Typography>
                <TextField variant='standard' label='CarId' placeholder="Enter carId ..." onChange={handleCarIdChange} />
                <Typography variant='h5'>Values to update</Typography>
            </Stack>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <TextField 
                        variant='outlined'
                        label='Plate'
                        name='plate'
                        color='primary'
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField 
                        variant='outlined'
                        label='Manufacture'
                        name='manufacture'
                        color='primary'
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField 
                        variant='outlined'
                        label='Model'
                        name='model'
                        color='primary'
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField 
                        variant='outlined'
                        label='Rate'
                        name='rate'
                        color='primary'
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField 
                        variant='outlined'
                        label='Description'
                        name='description'
                        color='primary'
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField 
                        variant='outlined'
                        label='Transmission'
                        name='transmission'
                        color='primary'
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField 
                        variant='outlined'
                        label='Type'
                        name='year'
                        color='primary'
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField 
                        variant='outlined'
                        label='Year'
                        name='year'
                        color='primary'
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Typography>Options</Typography>
                    <Stack direction='column' spacing={0.5}>
                        {update.options.map((o, index) => {
                            return (
                                <Stack direction='row' key={index} spacing={1}>
                                    <TextField
                                        variant='outlined'
                                        onChange={(e) => handleOptionChange(e, index)}
                                        label='Add an option'
                                    />
                                    <IconButton 
                                        aria-label="add-another-option" 
                                        color="primary"
                                        onClick={() => handleAdd('option')}
                                    >
                                        <AddCircleRoundedIcon />
                                    </IconButton>
                                </Stack>                
                            )
                        })}
                    </Stack>
                </Grid>
                <Grid item xs={6}>
                    <Typography>Specifications</Typography>
                    <Stack direction='column' spacing={0.5}>
                        {update.specs.map((s, index) => {
                            return (
                                <Stack direction='row' key={index} spacing={1}>
                                    <TextField
                                        variant='outlined'
                                        onChange={(e) => handleSpecChange(e, index)}
                                        label='Add a specification'
                                    />
                                    <IconButton 
                                        aria-label="add-another-spec" 
                                        color="primary"
                                        onClick={() => handleAdd('spec')}
                                    >
                                        <AddCircleRoundedIcon />
                                    </IconButton>
                                </Stack>
                            )
                        })}
                    </Stack>
                </Grid>
            </Grid>

            <Button variant='contained' color='primary' type='submit' sx={{margin: '1rem'}}>Update Car</Button>
        </Box>
    )
}

export default UpdateCar