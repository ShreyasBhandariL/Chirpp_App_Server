function logout(req, res) {
  res
    .status(200)
    .cookie("token", "", {
      sameSite: "none",
      httpOnly: true,
      secure: true,
    })
    .json({ message: "logout successfull" });
}

module.exports = logout;
