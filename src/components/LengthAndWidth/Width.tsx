import { Box, Chip, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react"

const Width = () => {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleWindowResize = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleWindowResize)

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };

    }, [width])
    
    return (
        <Box>
            <Stack direction='row' spacing={1} alignItems='center'>
                <Typography variant="subtitle2" gutterBottom> Width: </Typography>
                <Chip label={width} color="secondary" />
            </Stack>
        </Box>
    )
}

export default Width