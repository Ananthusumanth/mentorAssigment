import {useState} from 'react'
import Cookies from 'js-cookie'
import './index.css'

const Login = props => {
    const [username, setusername] = useState("")
    const [password, setPassword] = useState("")
    const [errorMsg, setErrorMsg] = useState('')

    const onChangeInput = (e) => {
        setusername(e.target.value)
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const onSubmitSuccess = jwtToken => {
        const {history} = props
        Cookies.set('jwt_token', jwtToken, {expires: 30})
        history.replace('/')
        window.location.reload();
    }

    const onClickLoginButton = async event => {
        event.preventDefault()
        const url = 'https://fakestoreapi.com/users'
        const userDetails = {username, password}
        const options = {
        method: 'POST',
        headers: {
            Authorization: "application/json"
        },
        body: JSON.stringify(userDetails),
        }
        const response = await fetch(url, options)
        console.log(response)
        if (response.ok) {
            const data = await response.json()
            // console.log(data.jwt_token)
            // console.log(data.token)
        onSubmitSuccess(data.jwt_token)
        } else {
            const data = await response.json()
            setErrorMsg(data.error_msg)
            setusername('')
            setPassword('')
        }
    }
    return (
        <div className="LoginContainer">
            <div className="LoginBody">
                <div className="FormContainer">
                <h1 className="form-main-heading">Login</h1>
                <form className="login-form" onSubmit={onClickLoginButton}>
                    <label htmlFor="username">USERNAME</label>
                    <input
                    type="text"
                    id="username"
                    className="input1"
                    placeholder="Enter the Username"
                    value={username}
                    onChange={onChangeInput}
                    />
                    <label htmlFor="password">PASSWORD</label>
                    <input
                    type="password"
                    id="password"
                    className="password"
                    placeholder="Enter the Password"
                    value={password}
                    onChange={onChangePassword}
                    />
                    <p className="errorMsg">{errorMsg}</p>
                    <button type="submit" className="LoginButton">
                    Login
                    </button>
                </form>
                </div>
            </div>
        </div>
    )
}
export default Login
