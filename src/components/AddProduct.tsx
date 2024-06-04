import React, { SetStateAction, useState } from "react"
import { Button, TextField } from "@mui/material"


interface AddProductProps {
    setNewProduct: React.Dispatch<SetStateAction<Array<{name: string}>>>
}

const AddProduct: React.FC<AddProductProps> = ({ setNewProduct }) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    const handleButtonOnClick = () => {
        setNewProduct(products => [...products, { name: inputValue }])
    }

    return(
        <>
            <TextField
                id="outlined-basic" 
                label="New product" 
                variant="outlined" 
                onChange={handleChange}
            />
            <br/>
            <Button 
                variant="contained" 
                size="small"
                onClick={handleButtonOnClick}
            >
                Add a new product
            </Button>
        </>
    )
}

export default AddProduct