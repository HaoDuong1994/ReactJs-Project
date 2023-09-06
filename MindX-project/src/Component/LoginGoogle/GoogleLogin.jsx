function GoogleLogin(props) {
  const { logInWithGoogle } = props;
  console.log(logInWithGoogle);
  return (
    <div>
      <button
        onClick={() => {
          logInWithGoogle();
        }}>
        Mời bạn đăng nhập google trước
      </button>
    </div>
  );
}
export default GoogleLogin;
