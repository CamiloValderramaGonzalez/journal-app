import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import validator from 'validator'

import { useForm } from '../../hooks/useForm'
import { removeError, setError } from "../../actions/ui";
import { startRegisterWithEmailAndPassword } from "../../actions/auth";

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const { msgError, loading } = useSelector(state => state.ui);

    const [formValues, handleInputChange] = useForm({
        name: 'camilo',
        email: 'a@a.com',
        password: '123456',
        password2: '123456'
    });

    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            dispatch(startRegisterWithEmailAndPassword(email, password, name));
        }
    }

    const isFormValid = () => {
        if (name.trim().length === 0) {
            dispatch(setError("name required"))
            return false;
        }
        else if (!validator.isEmail(email)) {
            dispatch(setError("email required"))
            return false;
        } else if (password !== password2 || password.length < 5) {
            dispatch(setError("password required"))
            return false;
        }

        dispatch(removeError());

        return true;
    }
    return (
        <>
            <h3 className="auth__title">Register</h3>
            <form onSubmit={handleRegister}>
                {
                    msgError &&
                    <div className="auth__alert-error">
                        {msgError}
                    </div>
                }
                <input
                    className="auth__input"
                    type="text"
                    placeholder="Name"
                    name="name"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
                <input
                    className="auth__input"
                    type="text"
                    placeholder="Email"
                    name="email"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
                <input
                    className="auth__input"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                />
                <input
                    className="auth__input"
                    type="password"
                    placeholder="Confirm"
                    name="password2"
                    value={password2}
                    onChange={handleInputChange}
                />
                <button
                    className="btn btn-primary btn-block mb-5"
                    type="submit"
                    disabled={loading}
                >
                    Registrarse
                </button>

                <Link
                    className="link"
                    to="/auth/login"
                >
                    Already registered?
                </Link>
            </form>
        </>
    )
}
