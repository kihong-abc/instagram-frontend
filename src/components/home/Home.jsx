import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import "./Home.scss";
import LoginPhoneBg from "../../resource/images/login_smartphone_bg.png";

function Home(props) {
  const onClickLogin = (event) => {
    event.preventDefault();
    console.log("onClickLogin");
  };

  const onClickSignUp = (event) => {
    event.preventDefault();
    props.history.push("/signup");
  };

  const renderPhone = () => {
    return (
      <div className="smart-phone-container">
        <img src={LoginPhoneBg} alt="smart-phone" />
      </div>
    );
  };

  const renderLoginForm = () => {
    return (
      <div className="login-container">
        <div className="logo">Instagram</div>
        <form className="user-login-form">
          <input type="email" placeholder="전화번호, 사용자 이름 또는 이메일" />
          <input type="password" placeholder="비밀번호" />
        </form>
        <div className="login-btn">
          <button type="submit" onClick={onClickLogin}>
            로그인
          </button>
        </div>
        <hr />
        <div className="facebook-login">
          <FaFacebookSquare />
          Facebook으로 로그인
        </div>
        <div className="forgot-password">비밀번호를 잊으셨나요 ?</div>
      </div>
    );
  };

  const renderSignUp = () => {
    return (
      <div className="sign-up-container">
        <span className="account">계정이 없으신가요?</span>
        <span className="sign-up" onClick={onClickSignUp}>
          가입하기
        </span>
      </div>
    );
  };

  return (
    <div className="home-wrapper">
      <div className="home-container">
        {renderPhone()}
        <div className="login-wrapper">
          {renderLoginForm()}
          {renderSignUp()}
        </div>
      </div>
    </div>
  );
}

export default Home;
