import React from "react";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import { useNavigate } from "react-router-dom";


const responseGoogleFail= (res)=>{
    console.log(res);
}
  const GoogleSignInButton = () => {
    
const nav  = useNavigate();
    gapi.load("client:auth2", () => {
        gapi.client.init({
          clientId:
            "*****.apps.googleusercontent.com",
          plugin_name: "chat",
        });
      });
    return (
        <div className="w-[100vw] h-[100vh] flex  flex-col	 items-center justify-evenly">
        
      <GoogleLogin
        clientId="261053397966-18vjdo94pknmm71ctph70cu7n1p0k6gs.apps.googleusercontent.com"
        buttonText="Sign up for a surprize 😉"
        
        onSuccess={ (res)=>{
            console.log(res);
            window.user =res;
            nav("/date",{
                state :res
            });
        } }
        onFailure={responseGoogleFail}
        cookiePolicy={"single_host_origin"}
      />

      <small className="">Maid with &#10084; by <a href="mail:biradarkris@gmail.com">Kris</a></small>
      </div>

    );
  }
  export default GoogleSignInButton;