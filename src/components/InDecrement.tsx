import { Box, Button, ButtonGroup, Paper } from "@mui/material"
import { useState } from "react";

const InDecrement = () => {
    const [result, setResult] = useState(0);

    const increment = () => {
        setResult(r => r + 1)
        setResult(r => r + 1)
    }

    const decrement = () => {
        setResult(r => r - 1)
        setResult(r => r - 1)
    }

    const reset = () => {
        setResult(r => r - r)
    }

    return (
        <Box>
            <Paper elevation={3}>
                {result}
            </Paper>

            <ButtonGroup 
                variant="text" 
                aria-label="Basic button group"
            >
                <Button
                    onClick={increment}
                >
                    +
                </Button>
                <Button
                    onClick={decrement}
                >
                    -
                </Button>
                <Button
                    onClick={reset}
                >
                    Reset
                </Button>
            </ButtonGroup>        
        </Box>
    )    
}

export default InDecrement