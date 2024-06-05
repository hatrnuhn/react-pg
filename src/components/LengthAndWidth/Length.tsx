import { Box, Chip, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react"

const Length = () => {
    const [length, setLength] = useState(window.innerHeight)

    useEffect(() => {
        const handleWindowResize = () => {
            setLength(window.innerHeight)
        }

        window.addEventListener('resize', handleWindowResize)

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };

    }, [length])
    
    return (
        <Box>
            <Stack direction='row' spacing={1} alignItems='center'>
                <Typography variant="subtitle2" gutterBottom> Length: </Typography>
                <Chip label={length} color="primary" />
            </Stack>
        </Box>
    )
}

export default Length