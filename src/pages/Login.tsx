import { Button, Snackbar, Stack, TextField } from "@mui/material"
import { CredentialResponse, GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google"
import axios, { AxiosError } from "axios"
import React, { useEffect, useState } from "react"

const clientId = import.meta.env.VITE_G_OAUTH_CID

interface PasswordProps {
    onUsernameSet: () => void,
    onSnackOpen: (message: string) => void 
}

const Password: React.FC<PasswordProps> = ({ onUsernameSet, onSnackOpen } ) => {
    const [password, setPassword] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(un => (un = e.target.value))
    }

    const handleClick = async () => {
        const adminCredentials = {
            username: localStorage.username,
            password
        }

        try {
            if (password) {
                const res = await axios.post('http://localhost:3000/api/auth/login?as=admin', adminCredentials)
            
                console.log(res.data)
                localStorage.setItem('token', res.data.token)    
                window.location.href = '/home'
            }
        } catch (err) {
            if (err instanceof AxiosError) {
                switch (err.response?.status) {
                    case 404:
                        onSnackOpen('Account not found')
                        break;
                    case 403:
                        onSnackOpen('Invalid username or password')
                        break
                    default:
                        onSnackOpen(`An error happened: ${err.message}`)
                        break;
                }

                console.error(err.message)
                localStorage.setItem('username', '')
                onUsernameSet()    
            }
        }
    }

    return (
        <Stack direction='column' spacing={1} sx={{mt: '1rem'}}>
            <TextField variant="outlined" label='password' onChange={handleChange} required={true}/>
            <Button variant='contained' onClick={handleClick}>Login</Button>
        </Stack>
    )
}

const Email = ({ onUsernameSet }: { onUsernameSet: () => void }) => {
    const [username, setUsername] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }

    const handleClick = () => {
        if (username) {
            localStorage.setItem('username', username)
            onUsernameSet()                
        }
    }

    return (
        <Stack direction='column' spacing={1} sx={{mt: '1rem'}}>
            <TextField variant="outlined" label='username' onChange={handleChange} required={true} />
            <Button variant='contained' onClick={handleClick}>Next</Button>
        </Stack>
    )
}

const Login = () => {
    const [component, setComponent] = useState<JSX.Element | null>(null)
    const [usernameSet, setUsernameSet] = useState<boolean>(false)
    const [status, setStatus] = useState<{
        open: boolean
        message: string
    } | null>(null)

    useEffect(() => {
        if (!localStorage.getItem('username') && !usernameSet) {
            setComponent(<Email onUsernameSet={() => setUsernameSet(true)} />)
        } else {
            setComponent(<Password onUsernameSet={() => setUsernameSet(false)} onSnackOpen={(m) => setStatus({open: true, message: m})} />)
        }
        console.log(clientId)
    }, [usernameSet])

    const handleGoogleLoginSuccess = (credentialResponse: CredentialResponse) => {
        console.log(credentialResponse)
    }

    return (
        <>
            <GoogleOAuthProvider clientId={clientId!}>
                <GoogleLogin 
                    onSuccess={handleGoogleLoginSuccess}
                    onError={() => setStatus({message: 'Error happened', open: true})}
                />
            </GoogleOAuthProvider>

            <React.Fragment>{component}</React.Fragment>
            <Snackbar open={status?.open} autoHideDuration={2500} anchorOrigin={{vertical: 'top', horizontal: 'center'}} onClose={() => setStatus(s => s = null)}
                message={status?.message} 
            />
        </>
    )
}

export default Login