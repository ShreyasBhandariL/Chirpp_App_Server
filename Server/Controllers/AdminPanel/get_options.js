const getOptions = async (req, res) => {
  try {
    const options = {
      beak: [
        {
          img: "https://drive.google.com/uc?export=view&id=156eid9hgExPp3ipAv12e0o_vsnjvi7-d",
          value: "aerial_fishing",
        },
        {
          img: "https://drive.google.com/uc?export=view&id=1RqP6SCoXe6qMrPrG_BuZx-5s9jSQBpsk",
          value: "chiseling",
        },
        {
          img: "https://drive.google.com/uc?export=view&id=1RqP6SCoXe6qMrPrG_BuZx-5s9jSQBpsk",
          value: "coniferous_speed_eating",
        },
        {
          img: "https://drive.google.com/uc?export=view&id=1GXDImtXHMMw4ZAMZqrF9Bsmm9a7DXpR2",
          value: "dip_netting",
        },
        {
          img: "https://drive.google.com/uc?export=view&id=1FbBQMBFcwhoaZZrZsahZbEBLBCEKXl3K",
          value: "filter_feeding",
        },
        {
          img: "https://drive.google.com/uc?export=view&id=1iVbUXmVb16pmquTgcK3hpcMQLtoIigOZ",
          value: "fruit_eating",
        },
        {
          img: "https://drive.google.com/uc?export=view&id=1iUm2BEw0_MW0rbG5Xe8GyKGc5F6UhAYe",
          value: "generalist",
        },
        {
          img: "https://drive.google.com/uc?export=view&id=17aWz2GKL_4tnufoVlUsJ45wCHttjDrj5",
          value: "grain_eating",
        },
        {
          img: "https://drive.google.com/uc?export=view&id=1hzs37hlA9_V7jkyduG1qimTa-w88KllB",
          value: "insect_catching",
        },
        {
          img: "https://drive.google.com/uc?export=view&id=1ikg3cyCCeqMgTajscA4GeX1cC1R31ReN",
          value: "nectar_feeding",
        },
        {
          img: "https://drive.google.com/uc?export=view&id=1NjijjYu_GSmA-SjhUenJjLvMBIh4NuGZ",
          value: "probing",
        },
        {
          img: "https://drive.google.com/uc?export=view&id=1rKo0zC9XeF2JHCUoG0FkAcgdT0igJ-97",
          value: "pursuit_fishing",
        },
        {
          img: "https://drive.google.com/uc?export=view&id=1APLwGq6G1a3QceZNsv9avyjlLbVc0Tf2",
          value: "raptorial",
        },
        {
          img: "https://drive.google.com/uc?export=view&id=1QIm3M9GDmzpIhcHyta0gdT7NJbAXzfVB",
          value: "scavenging",
        },
        {
          img: "https://drive.google.com/uc?export=view&id=1QbkxX1t2tyKFs5kYwe_fKETVZKbjN6q5",
          value: "scything",
        },
        {
          img: "https://drive.google.com/uc?export=view&id=1awmlmn7kniRGGZfiopeGnWRanbe62S-G",
          value: "surface_skimming",
        },
      ],
      foot: [
        {
          img: "https://drive.google.com/uc?export=view&id=1Os6O8B0ZzqEk6v4k_F5EAtr9xVHEPmia",
          value: "climbing",
        },
        {
          img: "https://drive.google.com/uc?export=view&id=1xwwg_ef3L_SluCRMPSjrJSD0pr0TQLyo",
          value: "raptorial",
        },
        {
          img: "https://drive.google.com/uc?export=view&id=1hAhPsMm80CvowakFKw2irngg7lCg_rAn",
          value: "perching",
        },
        {
          img: "https://drive.google.com/uc?export=view&id=10dvjpw3ZzD2d9I7Mq-hBZm5nM_AjBI-l",
          value: "running",
        },
        {
          img: "https://drive.google.com/uc?export=view&id=1JTBsjqRVp5EmWyk8u35QJkqA4MyV5fFh",
          value: "sctraching",
        },
        {
          img: "https://drive.google.com/uc?export=view&id=1WoIyBwAN6WUMhuWY-IDpGVxg-XS8ejCZ",
          value: "webbed_swimming",
        },
      ],
    };
    res.status(200).json({ options });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "oops something went wrong" });
  }
};

module.exports = getOptions;
