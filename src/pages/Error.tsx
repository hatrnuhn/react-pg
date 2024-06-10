import { Stack, Typography } from "@mui/material"
import React from "react"

interface ErrorProps{
    setupStatus: Array<string>
}

const Error: React.FC<ErrorProps> = ({setupStatus}) => {
    return (
        <Stack>
            {setupStatus
                .map((m, i) => {
                    return (
                        <Typography variant="caption" key={i}>
                            {m}
                        </Typography>
                    )
            })}
        </Stack>
    )
}

export default Error