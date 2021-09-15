import "./Login.css";
import { Search } from "@material-ui/icons";
export default function Login() {
  return (
    <div className="Login">
      <div className="loginWrapper">
        <div className="ellipse1"></div>
        <div className="ellipse2"></div>
        <div className="loginLeft">
          <h3 className="loginLogo">E-Fandray</h3>
          <span className="logoDescription">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
            explicabo cumque quas et ipsa modi sit voluptatum amet voluptate,
            consectetur maxime voluptatem eveniet reiciendis quae atque. Aut
            earum soluta temporibus?
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input type="text" className="loginInput" placeholder="email" />
            <input type="text" className="loginInput" placeholder="password" />
            <button className="login loginButton">Login</button>
            <span className="forgot">Forgot Password?</span>
            <button className="createAccountButton loginButton">
              Create New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
