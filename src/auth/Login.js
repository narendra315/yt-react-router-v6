import { useNavigate } from "react-router-dom";
import constant from "../constant";
import Header from "../component/Header";

function Login() {
  let navigate = useNavigate();
  const onSubmit = () => {
    // api call
    navigate(constant.component.dashboard.url);
  }

  return (
    <div>
      <Header />
      Login
      <hr />
      <input type="text" value="email@gmail.com" /><br /><br />
      <input type="password" value="password" /><br /><br />
      <button type="button" onClick={onSubmit}>Submit</button>
    </div>
  );
}

export default Login;