const getOptions = async (req, res) => {
  try {
    const options = {
      beakShapes: [
        {
          value: "aerial_fishing",
          img: `${process.env.Image_URL}/beaks/aerial_fishing.png`,
        },
        {
          value: "chiseling",
          img: `${process.env.Image_URL}/beaks/chiseling.png`,
        },
        {
          value: "coniferous_seed_eating",
          img: `${process.env.Image_URL}/beaks/coniferous_seed_eating.png`,
        },
        {
          value: "dip_netting",
          img: `${process.env.Image_URL}/beaks/dip_netting.png`,
        },
        {
          value: "filter_feeding",
          img: `${process.env.Image_URL}/beaks/filter_feeding.png`,
        },
        {
          value: "fruit_eating",
          img: `${process.env.Image_URL}/beaks/fruit_eating.png`,
        },
        {
          value: "generalist",
          img: `${process.env.Image_URL}/beaks/generalist.png`,
        },
        {
          value: "grain_eating",
          img: `${process.env.Image_URL}/beaks/grain_eating.png`,
        },
        {
          value: "insect_catching",
          img: `${process.env.Image_URL}/beaks/insect_catching.png`,
        },
        {
          value: "nectar_feeding",
          img: `${process.env.Image_URL}/beaks/nectar_feeding.png`,
        },
        {
          value: "probing",
          img: `${process.env.Image_URL}/beaks/probing.png`,
        },
        {
          value: "raptorial",
          img: `${process.env.Image_URL}/beaks/raptorial.png`,
        },
        {
          value: "scavenging",
          img: `${process.env.Image_URL}/beaks/scavenging.png`,
        },
        {
          value: "scything",
          img: `${process.env.Image_URL}/beaks/scything.png`,
        },
        {
          value: "surface_skimming",
          img: `${process.env.Image_URL}/beaks/surface_skimming.png`,
        },
        {
          value: "pursuit_fishing",
          img: `${process.env.Image_URL}/beaks/pursuit_fishing.png`,
        },
      ],
      footShapes: [
        {
          value: "climbing",
          img: `${process.env.Image_URL}/foots/climbing.png`,
        },
        {
          value: "perching",
          img: `${process.env.Image_URL}/foots/perching.png`,
        },
        {
          value: "raptorial",
          img: `${process.env.Image_URL}/foots/raptorial.png`,
        },
        {
          value: "sctraching",
          img: `${process.env.Image_URL}/foots/sctraching.png`,
        },
        {
          value: "webbed_swimming",
          img: `${process.env.Image_URL}/foots/webbed_swimming.png`,
        },
        {
          value: "running",
          img: `${process.env.Image_URL}/foots/climbing.png`,
        },
      ],
    };
    res.status(200).json({ options });
  } catch (error) {
    res.status(500).json({ error: "oops something went wrong" });
  }
};

module.exports = getOptions;
