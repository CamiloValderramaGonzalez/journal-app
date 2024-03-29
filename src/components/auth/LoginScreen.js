import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { startGoogleLogin, startLoginWithEmailAndPassword } from "../../actions/auth";
import { useForm } from "../../hooks/useForm"

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.ui);

    const [formValues, handleInputChange, reset] = useForm({
        email: 'camilo.valderrama@gmail.com',
        password: '123456'
    })

    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLoginWithEmailAndPassword(email, password));
    }

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin());
    }

    return (
        <>
            <h3 className="auth__title">Login</h3>
            <form onSubmit={handleLogin}>
                <input
                    autoComplete="off"
                    className="auth__input"
                    name="email"
                    placeholder="Email"
                    type="text"
                    value={email}
                    onChange={handleInputChange}
                />
                <input
                    className="auth__input"
                    name="password"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={handleInputChange}
                />
                <button
                    className="btn btn-primary btn-block"
                    type="submit"
                    disabled={loading}
                >
                    Login
                </button>

                <div className="auth__social-networks">
                    <p>Login with social networks</p>
                    <div
                        className="google-btn"
                        onClick={handleGoogleLogin}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <Link
                    className="link"
                    to="/auth/register"
                >
                    Create new account
                </Link>
            </form>
        </>
    )
}
