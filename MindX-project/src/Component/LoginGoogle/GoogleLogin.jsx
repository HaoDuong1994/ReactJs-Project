import "./Login.css";
function GoogleLogin(props) {
  console.log(props);
  const { handleSubmit, handleSubmitSignIn } = props;
  console.log(handleSubmit);
  return (
    <div className="authen-container">
      <h2 className="heading">Welcome to Raymond Shop</h2>
      <div className="sign-up-wrapper">
        <form
          className="form-login"
          onSubmit={(e) => {
            handleSubmit(e);
          }}>
          <h4>Đăng ký</h4>
          <input
            className="input-login"
            type="text"
            name="email"
            placeholder="Nhập ID"
          />
          <br />
          <input
            className="input-login"
            placeholder="Nhập password"
            type="password"
            name="password"
          />
          <br />
          <button className="btn-submit">Đăng ký</button>
        </form>
      </div>
      <div className="sign-in-wrapper">
        <form
          className="form-login"
          onSubmit={(e) => {
            handleSubmitSignIn(e);
          }}>
          <h4>Đăng nhập</h4>
          <input
            className="input-login"
            type="text"
            id="firstname"
            name="email"
            placeholder="Nhập ID"
          />
          <br />
          <input
            className="input-login"
            placeholder="Nhập password"
            type="password"
            id="password"
            name="password"
          />
          <br />
          <button className="btn-submit">Đăng nhập</button>
        </form>
      </div>
    </div>
  );
}
export default GoogleLogin;
