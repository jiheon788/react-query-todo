import { useState } from "react";
import { postSignUpData } from "../lib/apis/auth";
import { isValidateAuthData } from "../lib/util";

const SignUpForm = ({setIsSignIn}) => {
  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
    rePassword: "",
  });

  const onChangeSignUpData = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  const onClickSignUpBtn = () => {
    if (isValidateAuthData(signUpData, true)) {
      postSignUpData(
        signUpData.email,
        signUpData.password
      ).then(response => {
        alert(response.data.message);
        setIsSignIn(true);
      })
    }
  }

  return (
    <>
    <h1>회원가입</h1>
    <form className="login-container">

      <div>
        <label htmlFor="email" className="form-label"></label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="이메일"
          value={signUpData.email}
          onChange={onChangeSignUpData}
          className=" w-100"
        />
      </div>
      <div>
        <label htmlFor="password" className="form-label"></label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="off"
          placeholder="패스워드"
          value={signUpData.password}
          onChange={onChangeSignUpData}
          className=" w-100"
        />
      </div>

      <div>
        <label htmlFor="password" className="form-label"></label>
        <input
          id="rePassword"
          name="rePassword"
          type="password"
          autoComplete="off"
          placeholder="패스워드 확인"
          value={signUpData.rePassword}
          onChange={onChangeSignUpData}
          className=" w-100"
        />
      </div>
        
      <button 
        type="button" 
        onClick={()=>{
          onClickSignUpBtn();
        }}
        className="primary-btn w-100"
      >
        회원가입
      </button>
      <p>
        Already registered?{" "}
        <span>
          <strong
            className="c-p"
            onClick={()=>{
              setIsSignIn(true)
            }}>Let`s Sign In</strong>
        </span>
      </p>
      </form>
    </>
  )
}

export default SignUpForm;