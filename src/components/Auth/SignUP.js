import React, {useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch  } from 'react-redux';
import { SignupValidation } from '../../utils/validationChecker';
import { signUpHandler } from '../../pages/Slices/AuthSlice';
import "../../global.css"
import "./auth.css"

const SignUP = () => {

    const [error, setError] = useState({ isError: true });
    const [userDetail, setUserDetail] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmpassword: ""
    });
    const signupDispatch = useDispatch();

    useEffect(()=>{
        console.log("call api");
        if(!error.isError){
            signupDispatch(signUpHandler(userDetail))
        };
    },[error]);

    const inputHandler = (e) => {
        const { name, value } = e;
        setUserDetail({ ...userDetail, [name]: value });
    };

    const signupHandler = () => {
        console.log("sign1",userDetail)
        const error = SignupValidation(userDetail);
        setError(error);
    };

    return (
        <div className='flex-rowns'>
            <div>
                <img className='img' src='/asset/Mobile login-bro.svg' />
            </div>
            <div className='centre'>
                <form onSubmit={(e)=>e.preventDefault()} className="loginForm" >
                    <div className="scontent" >
                        <div>
                            <h2>SignUp</h2>
                        </div>
                        <div className="inp">
                            <label>First Name*</label>
                            <input 
                            type="text"
                            className="inputs"
                            name='firstName'
                            placeholder='Bipin'
                            onChange={(e)=>inputHandler(e.target)}
                             />
                        </div>
                        <div className="inp">
                            <label>Last Name*</label>
                            <input 
                            type="text" 
                            className="inputs"
                            name="lastName"
                            placeholder='Yadav'
                            onChange={(e)=>inputHandler(e.target)}
                             />
                        </div>
                        <div className="inp">
                            <label>Email*</label>
                            <input 
                            type="email" 
                            className="inputs"
                            name="email"
                            placeholder='bipinYadav@gmail.com'
                            onChange={(e)=>inputHandler(e.target)}
                             />
                        </div>
                        <div className="inp">
                            <label>Password*</label>
                            <input 
                            type="password" 
                            className="inputs"
                            name='password'
                            placeholder='*********'
                            onChange={(e)=>inputHandler(e.target)}
                             />
                        </div>
                        <div className="inp">
                            <label>Confirm Password*</label>
                            <input 
                            type="password" 
                            className="inputs"
                            name='confirmpassword'
                            placeholder='*********'
                            onChange={(e)=>inputHandler(e.target)}

                             />
                        </div>

                        <div>
                                <button 
                                onClick={()=>{signupHandler()}}
                                className="btnL">
                                    SIGN UP
                                </button>
                        </div>
                        <div>
                            <p>Already have an account <Link to="/login"> Login</Link> </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUP;