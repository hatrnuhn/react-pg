import { Input, Stack, Typography } from "@mui/material"
import React, { useState } from "react"

const Upload = () => {
    const [img, setImg] = useState<String | ArrayBuffer | null>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const uploaded = e.target.files?.item(0)
        const reader = new FileReader()
    
        reader.addEventListener('load', () => {
            if(uploaded)
                setImg(reader.result)
        })
    
        if (uploaded)
            reader.readAsDataURL(uploaded)
    
        console.log(img)
    }
    
    return (
        <Stack>
            <Typography>Upload a file</Typography>
            <Input type='file' onChange={handleChange} />
            {img && <img src={img.toString()} alt='cool' />}
        </Stack>
    )
}

export default Upload