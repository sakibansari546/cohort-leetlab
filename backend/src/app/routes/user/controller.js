class UserController {
  async getUserHandler(req, res) {
    res.status(200).json({ message: "User controller" });
  }
  async updateUserHandler(req, ree) {
    res.status(200).json({ message: "User Updated" });
  }
}
export default UserController;
