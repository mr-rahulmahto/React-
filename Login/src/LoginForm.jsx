import { useState } from 'react';
import './LoginForm.css';

export default function LoginForm() {
    const [login, setlogin] = useState(false);
    return (
        <>
            <div className="container">
                <div className="form-container">
                    <div className='form-toggle'>
                        <button className={login ? 'active' : ''} onClick={() => setlogin(true)}>Login</button>
                        <button className={!login ? 'active' : ''} onClick={() => setlogin(false)}>SignUp</button>
                    </div>
                    {login ? <>
                        <div className='form'>
                            <center> <h2> Login Form</h2></center>
                            <input type="email" placeholder='Email' />
                            <input type="password" placeholder='Password' />
                            <a href='#'>Forget Password?</a>
                            <button>Login</button>
                            <p>Not a member? <a href='#' onClick={() => setlogin(false)}>SignUp</a></p>
                        </div>

                    </> : <>
                        <center> <h2> SignUp</h2></center>
                        <div className='form'>
                            <input type="email" placeholder=' Enter Email' />
                            <input type="password" placeholder=' Create Password' />
                            <input type="password" placeholder=' Confirm Password' />
                            <button>SignUp</button>
                        </div>

                    </>}
                </div>

            </div>
        </>
    );

}