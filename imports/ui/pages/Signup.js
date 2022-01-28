import React from "react";

const Signup = () => {
  return (
    <section className="signup">
        <div className="mateSignImgPart">
            <div className="mateSignImgContainer">
                <img src="/signin.5f49cbae.svg" alt="Kiwi standing on oval" />
            </div>
        </div>
        <div className="mateSignInContentPart">
            <div>
                <div className="mateLoginButton">
                    <a href="/">
                        <button type="button">Login</button>
                    </a>
                </div>
            </div>
            <div>
                <div className="mateSignInPageGreet">
                    <h1>Hello There,</h1>
                    <p>Welcome to <strong><em>I-Dream-Career</em></strong> Admin Dashboard,</p>
                </div>
                <div className="mateLoginSubmitText">
                    <span>* Please Login With Username <strong> *Ex-<em>'demo@idreamcareer.com'</em> </strong> , and click on Google-Login Button.
                    </span>
                </div>
            <div className="mateLoginGoogleBtn">
                <a
                    href="https://b2c-admin-api.herokuapp.com/v1/admin/google-login?callback_url=https://data.idreamcareer.com/authorise"
                    style={{cursor: "pointer"}}
                >
                <img height="60" width="300" src="/GoogleLoginBtn.9a80c33a.png" alt="LoginBtn"/>
                </a>
                <div className="mateLoginOtherBtnWrap"></div>
            </div>
            </div>
        </div>
    </section>
  );
};

export default Signup;
