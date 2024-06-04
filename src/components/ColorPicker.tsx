import React, { SetStateAction, useState } from "react"

interface ColorPickerProps {
    setBgColor: React.Dispatch<SetStateAction<string>>
}

const ColorPicker: React.FC<ColorPickerProps> = ({ setBgColor }) => {
    const [pickedColor, setPickedColor] = useState('#ffffff')

    const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPickedColor(e.target.value)
        setBgColor(pickedColor)
    }

    return (
        <input 
            type="color"
            onChange={handleColorChange}
        />
    )
}

export default ColorPicker