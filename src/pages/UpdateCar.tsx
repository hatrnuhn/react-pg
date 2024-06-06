import { Box, Button, Grid, IconButton, Stack, TextField, Typography } from "@mui/material"
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import React, { useEffect, useState } from "react";

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

    const [options, setOptions] = useState([''])
    const [specs, setSpecs] = useState([''])
    const [optionComponents, setOptionComponents] = useState<React.ReactNode[]>([])
    const [specComponents, setSpecComponents] = useState<React.ReactNode[]>([])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setUpdate(u => ({...u, [name]: value}))
    }

    const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOptions(os => ([...os, e.target.value]))
        setUpdate(u => ({...u, options}))
    }

    const handleSpecChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSpecs(ss => ([...ss, e.target.value]))
        setUpdate(u => ({...u, specs}))
    }


    const OptionComponent = (index: number) => {
        return (
            <Stack direction='row' key={index} spacing={1}>
                <TextField
                    variant='outlined'
                    onChange={handleOptionChange}
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
    }

    const SpecComponent = (index: number) => {
        return (
            <Stack direction='row' key={index} spacing={1}>
                <TextField
                    variant='outlined'
                    onChange={handleSpecChange}
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
    }
    
    const handleAdd = (component: string) => {
        switch (component) {
            case 'option':
                setOptionComponents(ocs => {
                    const index = ocs.length
                    return ([...ocs, OptionComponent(index)])
                })
                break;
            case 'spec':
                setSpecComponents(scs => {
                    const index = scs.length
                    return ([...scs, SpecComponent(index)])
                })
                break;
        }
    }

    const handleSubmit = () => {

    }


    useEffect(() => {
        setOptionComponents([OptionComponent(0)])
        setSpecComponents([SpecComponent(0)])
    }, [])
    return (
        <Box component='form' onSubmit={handleSubmit}>
            <Typography variant='h5'>Values to update</Typography>

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
                        label='Year'
                        name='year'
                        color='primary'
                        onChange={handleChange}
                    />
                </Grid>
                <Grid xs={6}/>
                <Grid item xs={6}>
                    <Typography>Options</Typography>
                    <Stack direction='row'>
                        <React.Fragment>{optionComponents.map((oc) => oc)}</React.Fragment>
                    </Stack>
                </Grid>
                <Grid item xs={6}>
                    <Typography>Specifications</Typography>
                    <Stack direction='row'>
                        <React.Fragment>{specComponents.map((sc) => sc)}</React.Fragment>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    )
}

export default UpdateCar