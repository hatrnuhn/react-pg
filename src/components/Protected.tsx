import React from "react"
import { Navigate } from "react-router-dom"

interface ProtectedProps {
    children: JSX.Element
}

const Protected: React.FC<ProtectedProps> = ({children}) => {
    const token = localStorage.getItem('token')

    if (!token)
        return <Navigate to='/login'/>

    return children
}

export default Protected