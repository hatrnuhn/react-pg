import { useContext, useEffect } from "react"
import { Context } from "../pages/MyContext"
import { Chip, Tooltip } from "@mui/material"

const ClickCounterDisplay = () => {
    const context = useContext(Context)
    
    if (!context) {
        throw new Error('ClickCounterDisplay must be used within a ContextProvider');
    }

    useEffect(() => {
        console.log(context)
    }, [context.count])

    return (
        <Tooltip title='number of times you clicked'>
            <Chip label={context?.count} variant="outlined" />
        </Tooltip>
    )
}

export default ClickCounterDisplay