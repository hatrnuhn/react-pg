import { Button, Stack, TextField } from "@mui/material"
import axios from "axios"
import React, { useState } from "react"

const Stop = () => {
    const Token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoxLCJ1c2VySWQiOjIzLCJlbWFpbCI6ImFkbWluMUBjaDYuY29tIiwidXNlcm5hbWUiOiJhZG1pbjEiLCJpYXQiOjE3MTc1OTcxNDEsImV4cCI6MTcyMDE4OTE0MX0.KoLJ-g7DnnWBsdWHm3p1Yz00S2IUTO5Z8VLyQ6b1KqM'
    const [carId, setCarId] = useState('')
    const [input, setInput] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(i => i = e.target.value)
    }

    const handleClick = () => {
        setCarId(input)
        axios.delete(`http://localhost:3000/api/cars/${carId}`, {
            headers: {
                Authorization: `Bearer ${Token}`
            }
        })
            .then(res => {
                console.log(res.data)
            })
            .catch(e => console.log(e))
    }

    return (
        <Stack direction='column' spacing={1}>
            <TextField variant='outlined' label='CarId' placeholder="CarID of the car you want to stop lending" onChange={handleChange}/>
            <Button variant='contained' onClick={handleClick}>Stop lending this car</Button>
        </Stack>
    )
}

export default Stop