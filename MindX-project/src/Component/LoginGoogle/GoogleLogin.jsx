import "./Login.css";
function GoogleLogin(props) {
  const { logInWithGoogle } = props;
  console.log(logInWithGoogle);
  return (
    <div className="authen-container">
      <div className="sign-up-wrapper">
        <form>
          <h4>Đăng ký</h4>
          <input
            type="text"
            id="firstname"
            name="firstname"
            placeholder="Nhập ID"
          />
          <br />
          <input
            placeholder="Nhập password"
            type="password"
            id="password"
            name="password"
          />{" "}
          <br />
        </form>
      </div>
      <div className="sign-in-wrapper">
        <form>
          <h4>Đăng nhập</h4>
          <input
            type="text"
            id="firstname"
            name="firstname"
            placeholder="Nhập ID"
          />
          <br />
          <input
            placeholder="Nhập password"
            type="password"
            id="password"
            name="password"
          />{" "}
          <br />
        </form>
      </div>
    </div>
  );
}
export default GoogleLogin;
