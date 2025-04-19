import { TextFieldComponent } from "../components/Textfield"
import '../styles/Create.css'
import { ButtonComponent } from "../components/Button"
export default function Accountcreate() {
    return (
        <div className="create-account-container">
            <h1>This is create account page</h1>
            <TextFieldComponent label="Email" />
            <TextFieldComponent label="Password" type="password" />
            <TextFieldComponent label="Confirm Password" type="password" />
            <div className="button-container">
                <ButtonComponent className="button">Create account</ButtonComponent>
                <a href="/signin" className="link">Sign in</a>
            </div>
        </div>
    )
}
