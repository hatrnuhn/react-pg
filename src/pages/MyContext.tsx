import { Chip, Stack } from "@mui/material"
import React, { createContext, useContext, useState } from "react"
import ClickCounterDisplay from "../components/ClickCounterDisplay"

export const Context = createContext<{count: number, setCount: React.Dispatch<React.SetStateAction<number>>} | null>(null)

export const ContextProvider = ({ children }: {children: JSX.Element}) => {
    const [count, setCount] = useState(0)

    return (
        <Context.Provider value={{count, setCount}}>
            {children}
        </Context.Provider>
    )
}

const MyContext = () => {
    const context = useContext(Context)

    const handleClick = () => {
        context?.setCount(c => (c + 1))
    }

    return (
        <Stack direction='column' spacing={1}>
            <Chip label='Click me and see what happens!' variant="outlined" onClick={handleClick} />
            <ClickCounterDisplay />
        </Stack>
    )
}

export default MyContext