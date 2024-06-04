import { IconButton, Stack, TextField } from "@mui/material"
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import React, { SetStateAction, useState } from "react";

interface InputProps{
    setTodos: React.Dispatch<SetStateAction<Array<string>>>
}

const Input: React.FC<InputProps> = ({setTodos}) => {
    const [input, setInput] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(input => input = e.target.value)
    }

    const handleButtonClick = () => {
        if(input)
            setTodos(todos => [...todos, input])
            setInput('')
    }

    return (
        <>
            <Stack direction='row'>
                <TextField 
                    label="Add Task" 
                    variant="outlined" 
                    placeholder="Add a task ..."
                    onChange={handleChange}
                    value={input}
                    sx={{
                        input: { color: '#ffffff'}
                    }}
                />

                <IconButton aria-label="add-task" color="primary"
                    onClick={handleButtonClick}
                >
                    <AddCircleRoundedIcon />
                </IconButton>
            </Stack>
        </>
    )
}

export default Input