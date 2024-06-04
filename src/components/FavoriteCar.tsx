import { Box, Chip, Stack, TextField } from "@mui/material"
import React, { useState } from "react"

const defaultCar = {
    year: 2024,
    make: 'Toyota',
    model: 'BRZ'
}

const FavoriteCar = () => {
    const [favCar, setFavCar] = useState(defaultCar);

    const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFavCar(c => ({ ...c, year: +e.target.value }))
    }

    const handleMakeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFavCar(c => ({ ...c, make: e.target.value }))
    }

    const handleModelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFavCar(c => ({ ...c, model: e.target.value }))
    }

    return (
        <Box>
            Your favorite car is a:
            <Stack                
                direction="row"
                spacing={2}
            >
                <Chip label={favCar.year} variant="outlined" />
                <Chip label={favCar.make} variant="outlined" />
                <Chip label={favCar.model} variant="outlined" />
            </Stack>

            <Stack
                direction="column"
                spacing={2}
            >
                <TextField id="outlined-basic" label="Year" variant="outlined" onChange={handleYearChange}/>
                <TextField id="outlined-basic" label="Make" variant="outlined" onChange={handleMakeChange}/>
                <TextField id="outlined-basic" label="Model" variant="outlined" onChange={handleModelChange}/>
            </Stack>
        </Box>
    )
}

export default FavoriteCar