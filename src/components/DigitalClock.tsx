import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const DigitalClock = () => {
    const getNow = () => {
        return new Date().toTimeString().slice(0, 8)
    }

    const [time, setTime] = useState(getNow())

    useEffect(() => {
        const updateTime = () => {
            setTime(getNow())
        }

        setTimeout(updateTime, 1000)
    }, [time])

    return (
        <Typography
            variant='h2'
        >
            {time}
        </Typography>
    )
}

export default DigitalClock