import React, { Dispatch, SetStateAction } from 'react';
import { TextField } from '@mui/material';

interface SearchInputProps {
    setSearchInputValue: Dispatch<SetStateAction<string>>;
}

const SearchInput: React.FC<SearchInputProps> = ({ setSearchInputValue }) => {
    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInputValue(event.target.value);
    }

    return (
        <TextField 
            id="outlined-basic" 
            label="Search" 
            variant="outlined"
            placeholder="I'm looking for"
            onChange={handleSearchInputChange}
        />
    );
}

export default SearchInput;
