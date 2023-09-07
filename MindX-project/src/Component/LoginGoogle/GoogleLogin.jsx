function GoogleLogin(props) {
  const { logInWithGoogle } = props;
  console.log(logInWithGoogle);
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => {
          logInWithGoogle();
        }}>
        Mời bạn đăng nhập google trước
      </button>
    </div>
  );
}
export default GoogleLogin;
