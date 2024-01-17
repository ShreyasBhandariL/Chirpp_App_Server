const autoLogin = (req, res) => {
  const { root, adminName, email } = req.admin;
  res.status(200).json({ root, adminName, email });
};
module.exports = autoLogin;
