import '../styles/Signin.css'
import { TextFieldComponent } from '../components/Textfield'
import { ButtonComponent } from '../components/Button'
import { useState } from 'react'
function Signin(){
    const [form,setform] = useState({
        email: '',
        password: ''
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setform({
            ...form,
            [name]: value
        })
    }
    const PostData = async () => {
        const res = await fetch('http://localhost:8080/api/authenticate/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                email: form.email,
                password: form.password
            })
        })
        const data = await res.text()
        console.log(data)
        if (res.status === 200) {
            alert('Login successful')
            window.location.href = '/home'
        } else {
            alert('Login failed')
        }
    }
    return (
        <div className="signin-container">
            <h1>This is sign in page</h1>
            <TextFieldComponent label="Email" placeholder='Example@gmail.com' name='email' onChange={handleChange}/>
            <TextFieldComponent label="Password" type="password" name='password' onChange={handleChange}/>
            <div className="button-container">
            <ButtonComponent className="button" onClick={ PostData } >Sign in</ButtonComponent>
                <div className="link">
                    <p >If you dont have account :</p>
                    <small className="little"><a href="/createaccount">Create account</a></small>
                </div>
            </div>
        </div>
    )
}

export default Signin