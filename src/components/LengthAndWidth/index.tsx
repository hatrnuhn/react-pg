import { Stack } from "@mui/material"
import Length from "./Length"
import Width from "./Width"

const LengthAndWidth = () => {
    return (
        <Stack
            direction='column'
            alignItems='center'
            spacing={1}
        >
            <Length />
            <Width />
        </Stack>
    )
}

export default LengthAndWidth