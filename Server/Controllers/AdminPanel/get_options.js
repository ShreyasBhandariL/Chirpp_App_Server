const getOptions = async (req, res) => {
  try {
    const options = [
      {
        img: "https://drive.google.com/file/d/156eid9hgExPp3ipAv12e0o_vsnjvi7-d/view?usp=drive_link",
        value: "aerial_fishing",
      },
    ];
    res.status(200).json({ options });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "oops something went wrong" });
  }
};

module.exports = getOptions;
