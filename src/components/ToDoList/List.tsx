import { Box, IconButton, List, ListItem, ListItemText, Stack } from "@mui/material"
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded'
import React, { SetStateAction } from "react"
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';

interface ListProps {
    todos: string[]
    setTodos: React.Dispatch<SetStateAction<Array<string>>>
}

const ToDoList: React.FC<ListProps> = ({todos, setTodos}) => {
    const handleDeleteClick = (index: number) => {
        setTodos(todos => todos.filter((_, i) => i !== index))
    }

    const handleMoveUpClick = (index: number) => {
        if (index > 0) {
            setTodos(todos => {
                const newTodos = [...todos];
                [newTodos[index - 1], newTodos[index]] = [newTodos[index], newTodos[index - 1]];
                return newTodos;
            });
        }
    }

    const handleMoveDownClick = (index: number) => {
        if (index < todos.length - 1) {
            setTodos(todos => {
                const newTodos = [...todos];
                [newTodos[index], newTodos[index + 1]] = [newTodos[index + 1], newTodos[index]];
                return newTodos;
        })}
    }
    return(
        <Box>
            <List>
                {todos.map((td, i) => {
                    return (
                        <ListItem
                            key={i}
                            secondaryAction={
                                <Stack direction='row' spacing={0}>
                                    <IconButton edge="end" aria-label="delete" color="primary"
                                        onClick={() => handleDeleteClick(i)}
                                    >
                                        <DeleteRoundedIcon />
                                    </IconButton>

                                    <IconButton aria-label="move-up" color="primary"
                                        onClick={() => handleMoveUpClick(i)}
                                    >
                                        <ArrowUpwardRoundedIcon />
                                    </IconButton>

                                    <IconButton aria-label="move-down" color="primary"
                                        onClick={() => handleMoveDownClick(i)}
                                    >
                                        <ArrowDownwardRoundedIcon />
                                    </IconButton>

                                </Stack>
                            }
                        >
                            <ListItemText
                                primary={td}
                            />
                        </ListItem>
                    )
                })}
            </List>

        </Box>
    )
}

export default ToDoList