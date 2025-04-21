class AuthColtroller {
  signup(req, res) {
    res.status(200).json({
      message: "Signup route",
    });
  }

  login(req, res) {
    res.status(200).json({
      message: "Login route",
    });
  }

  logout(req, res) {
    res.status(200).json({
      message: "Logout route",
    });
  }
}
export default AuthColtroller;
