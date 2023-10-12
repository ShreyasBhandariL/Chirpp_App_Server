const adminSignup = (req, res) => {
  try {
    const { fullName, email, password } = req.body;
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = adminSignup;
