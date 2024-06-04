import { useState } from "react"
import Input from "./Input"
import List from "./List"
import { Box } from "@mui/material"

const ToDoList = () => {
    const [todos, setTodos] = useState(Array<string>)

    return (
        <Box>
            <Input setTodos={setTodos}/>
            <List todos={todos} setTodos={setTodos}/>        
        </Box>
    )
}

export default ToDoList