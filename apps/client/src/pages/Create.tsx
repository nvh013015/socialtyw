import { TextFieldComponent } from "../components/Textfield"
import { ButtonComponent } from "../components/Button"
import styles from "../styles/Create.module.css"
export default function Accountcreate() {
    return (
        <div className={styles.create_account_container}>
            <h1>This is create account page</h1>
            <div className={styles.form}>
            <TextFieldComponent label="Email" />
            <TextFieldComponent label="Password" type="password" />
            <TextFieldComponent label="Confirm Password" type="password" />
            </div>
            <div className={styles.button_container}>
                <ButtonComponent className="button">Create account</ButtonComponent>
                <a href="/signin" className={styles.link}>Sign in</a>
            </div>
        </div>
    )
}
