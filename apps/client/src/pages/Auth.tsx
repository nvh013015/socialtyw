import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
function Auth() {
    const navigate = useNavigate()
    const handleSignIn = () => {
        navigate('/Signin')
    }

    return (
        <div>
            <h1>This is auth pages</h1>
            <Button variant="outlined">Create account</Button>
            <h2>or</h2>
            <Button variant="outlined" onClick={handleSignIn}>Sign in</Button>
        </div>
    )
}

export default Auth