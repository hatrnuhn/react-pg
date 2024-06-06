import { Button, Stack, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate()

    const handleNavigate = (path: string) => {
        navigate(path)
    }
    return (
        <Stack
            direction="column"
            spacing={1}
            alignItems="center"
        >
            <Typography variant='h1'>Dis a homepage</Typography>

            <Stack
                direction='row'
                spacing={1}
                alignItems="center"
            >
                <Button variant='contained' onClick={() => handleNavigate('/cars')}>See cars</Button>
                <Button variant='contained' onClick={() => handleNavigate('/rent')}>Rent a car</Button>
                <Button variant='contained' onClick={() => handleNavigate('/lend')}>Lend your car</Button>
                <Button variant='contained' onClick={() => handleNavigate('/update-car')}>Update a car</Button>
                <Button variant='contained' onClick={() => handleNavigate('/lend/stop')}>Stop lending</Button>
            </Stack>
        </Stack>
    )
}

export default Home