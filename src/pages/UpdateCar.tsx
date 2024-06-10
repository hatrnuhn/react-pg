import { Box, Button, Grid, IconButton, Stack, TextField, Typography } from "@mui/material"
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import React, { useContext, useState } from "react";
import axios from "axios";
import { AppContext } from "../contexts";

const UpdateCar = () => {
    const Token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoxLCJ1c2VySWQiOjIzLCJlbWFpbCI6ImFkbWluMUBjaDYuY29tIiwidXNlcm5hbWUiOiJhZG1pbjEiLCJpYXQiOjE3MTc1OTcxNDEsImV4cCI6MTcyMDE4OTE0MX0.KoLJ-g7DnnWBsdWHm3p1Yz00S2IUTO5Z8VLyQ6b1KqM'

    const context = useContext(AppContext)

    const handleCarIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        context?.carId.setCarId(id => id = e.target.value)
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        context?.updateCar.setCarUpdate(u => {
            if (!u)
                return null
            
            return ({...u, [name]: value})
        })
    }

    const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
        if (context && context.updateCar.carUpdate) {
            const options = [...context.updateCar.carUpdate.options]
            options[index] = e.target.value
            context?.updateCar.setCarUpdate(u => {
                if (!u)
                    return null

                return ({...u, options})
            })    
        }
    }

    const handleSpecChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
        if (context && context.updateCar.carUpdate) {
            const specs = [...context.updateCar.carUpdate.specs]
            specs[index] = e.target.value
            context?.updateCar.setCarUpdate(u => {
                    if (!u)
                        return null
                    return ({...u, specs})
                }  
            )    
        }
    }
    
    const handleAdd = (component: string) => {
        switch (component) {
            case 'option':
                context?.updateCar.setCarUpdate(u => {
                    if (!u)
                        return null
                    return ({...u, options: [...u.options, '']})
                })
                break;
            case 'spec':
                context?.updateCar.setCarUpdate(u => {
                    if (!u)
                        return null
                    return ({...u, specs: [...u.specs, '']})
                })
                break;
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {        
        if (context && context.updateCar.carUpdate) {
            e.preventDefault()
            console.log(context.updateCar.carUpdate)

            const payload: Partial<typeof context.updateCar.carUpdate> = {}
    
            if (context.updateCar.carUpdate.description) payload.description = context.updateCar.carUpdate.description
            if (context.updateCar.carUpdate.manufacture) payload.manufacture = context.updateCar.carUpdate.manufacture
            if (context.updateCar.carUpdate.model) payload.model = context.updateCar.carUpdate.model
            if (context.updateCar.carUpdate.options.length) payload.options = context.updateCar.carUpdate.options
            if (context.updateCar.carUpdate.plate) payload.plate = context.updateCar.carUpdate.plate
            if (context.updateCar.carUpdate.rate) payload.rate = context.updateCar.carUpdate.rate
            if (context.updateCar.carUpdate.specs.length) payload.specs = context.updateCar.carUpdate.specs
            if (context.updateCar.carUpdate.transmission) payload.transmission = context.updateCar.carUpdate.transmission
            if (context.updateCar.carUpdate.type) payload.type = context.updateCar.carUpdate.type
            if (context.updateCar.carUpdate.year) payload.year = context.updateCar.carUpdate.year

            try {
                const res = await axios.patch(`http://localhost:3000/api/cars/${context?.carId.carId}`, payload, {
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
                        {(context && context.updateCar.carUpdate) ? context.updateCar.carUpdate.options.map((o, index) => {
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
                        }) : <></> }
                    </Stack>
                </Grid>
                <Grid item xs={6}>
                    <Typography>Specifications</Typography>
                    <Stack direction='column' spacing={0.5}>
                        {(context && context.updateCar.carUpdate) ? context.updateCar.carUpdate.specs.map((s, index) => {
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
                        }) : <></> }
                    </Stack>
                </Grid>
            </Grid>

            <Button variant='contained' color='primary' type='submit' sx={{margin: '1rem'}}>Update Car</Button>
        </Box>
    )
}

export default UpdateCar