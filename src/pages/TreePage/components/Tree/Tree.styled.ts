export const styles = {
  treeContainer: {
    width: "100%",
    display: "flex",
    flexDirection: {
      xs: "column",
      xl: "row",
    },
    m: "0 auto",
    p: {
      xs: "100px 0",
      md: "200px 0",
    },
  },
  treeChristmasContainer: {
    width: {
      xs: "100%",
      xl: "50%",
    },
    height: {
      xs: "400px",
      md: "700px",
    },
    display: "flex",
    justifyContent: "center",
  },
  treeChristmas: {
    width: {
      sm: "320px",
      md: "600px",
    },
    position: "absolute",
    top: "0",
    left: {
      xs: "0",
    },
  },
  ballsWrapper: {
    width: {
      xs: "100%",
      xl: "50%",
    },
    display: "flex",
    justifyContent: "center",
  },
  treeLights: {
    width: "300px",
  },
  ballsContainer: {
    width: {
      xs: "90%",
      md: "70%",
    },
    display: "flex",
    flexWrap: "wrap",
    alignContent: "start",
    justifyContent: "center",
    p: "20px",
    mb: {
      xs: "20px",
      xl: "0",
    },
    "& img": {
      width: {
        xs: "50px",
        md: "100px",
      },
      height: {
        xs: "50px",
        md: "100px",
      },
    },
    "& .lights": {
      width: {
        xs: "200px",
        md: "350px",
      },
      height: "auto",
    },
    bgcolor: "#c2946377",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px 0px #c2946377",
  },
  ballsBoxTitle: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  ballsBox: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    alignContent: "start",
    justifyContent: "center",
  },
  ballsDescription: {
    m: {
      xs: "30px 20px",
      md: "70px 50px",
    },
    fontSize: {
      xs: "1.1rem",
      md: "1.5rem",
    },
    textAlign: "justify",
  },
  ballsTask: {
    m: {
      xs: "30px 0",
      md: "70px 0",
    },
    fontSize: {
      xs: "1.1rem",
      md: "1.5rem",
    },
    textAlign: "center",
  },
  treeButton: {
    width: {
      xs: "200px",
      md: "300px",
    },
    p: {
      xs: "20px",
      md: "20px 30px",
    },
    mb: "20px",
    fontSize: {
      xs: 16,
      md: 18,
    },
    fontWeight: 700,
    borderRadius: "6px",
    textTransform: "none",
  },
  treeBalls: {
    "& img": {
      width: {
        xs: "30px",
        md: "55px",
      },
      position: "absolute",
      top: "0",
    },
    "& img:nth-of-type(1)": {
      top: {
        xs: 25,
        md: 100,
      },
      left: {
        xs: 140,
        md: 260,
      },
    },
    "& img:nth-of-type(2)": {
      top: {
        xs: 55,
        md: 160,
      },
      left: {
        xs: 120,
        md: 230,
      },
    },
    "& img:nth-of-type(3)": {
      top: {
        xs: 55,
        md: 160,
      },
      left: {
        xs: 160,
        md: 290,
      },
    },
    "& img:nth-of-type(4)": {
      top: {
        xs: 90,
        md: 220,
      },
      left: {
        xs: 115,
        md: 220,
      },
    },
    "& img:nth-of-type(5)": {
      top: {
        xs: 90,
        md: 220,
      },
      left: {
        xs: 165,
        md: 300,
      },
    },
    "& img:nth-of-type(6)": {
      top: {
        xs: 125,
        md: 280,
      },
      left: {
        xs: 110,
        md: 220,
      },
    },
    "& img:nth-of-type(7)": {
      top: {
        xs: 125,
        md: 280,
      },
      left: {
        xs: 170,
        md: 300,
      },
    },
    "& img:nth-of-type(8)": {
      top: {
        xs: 160,
        md: 340,
      },
      left: {
        xs: 90,
        md: 265,
      },
    },
    "& img:nth-of-type(9)": {
      top: {
        xs: 160,
        md: 340,
      },
      left: {
        xs: 140,
        md: 200,
      },
    },
    "& img:nth-of-type(10)": {
      top: {
        xs: 160,
        md: 345,
      },
      left: {
        xs: 185,
        md: 325,
      },
    },
    "& img:nth-of-type(11)": {
      top: {
        xs: 195,
        md: 405,
      },
      left: {
        xs: 80,
        md: 385,
      },
    },
    "& img:nth-of-type(12)": {
      top: {
        xs: 200,
        md: 410,
      },
      left: {
        xs: 140,
        md: 260,
      },
    },
    "& img:nth-of-type(13)": {
      top: {
        xs: 195,
        md: 405,
      },
      left: {
        xs: 195,
        md: 335,
      },
    },
    "& img:nth-of-type(14)": {
      top: {
        xs: 230,
        md: 465,
      },
      left: {
        xs: 70,
        md: 160,
      },
    },
    "& img:nth-of-type(15)": {
      top: {
        xs: 230,
        md: 485,
      },
      left: {
        xs: 115,
        md: 225,
      },
    },
    "& img:nth-of-type(16)": {
      top: {
        xs: 230,
        md: 470,
      },
      left: {
        xs: 170,
        md: 285,
      },
    },
    "& img:nth-of-type(17)": {
      top: {
        xs: 235,
        md: 475,
      },
      left: {
        xs: 210,
        md: 350,
      },
    },
    "& img:nth-of-type(18)": {
      top: {
        xs: 265,
        md: 530,
      },
      left: {
        xs: 85,
        md: 145,
      },
    },
    "& img:nth-of-type(19)": {
      top: {
        xs: 265,
        md: 555,
      },
      left: {
        xs: 140,
        md: 210,
      },
    },
    "& img:nth-of-type(20)": {
      top: {
        xs: 265,
        md: 540,
      },
      left: {
        xs: 185,
        md: 290,
      },
    },
    "& img:nth-of-type(21)": {
      top: {
        xs: 270,
        md: 550,
      },
      left: {
        xs: 225,
        md: 270,
      },
    },
    "& img:nth-of-type(22)": {
      top: {
        xs: 295,
        md: 605,
      },
      left: {
        xs: 35,
        md: 120,
      },
    },
    "& img:nth-of-type(23)": {
      top: {
        xs: 300,
        md: 630,
      },
      left: {
        xs: 80,
        md: 190,
      },
    },
    "& img:nth-of-type(24)": {
      top: {
        xs: 300,
        md: 610,
      },
      left: {
        xs: 130,
        md: 255,
      },
    },
    "& img:nth-of-type(25)": {
      top: {
        xs: 305,
        md: 630,
      },
      left: {
        xs: 190,
        md: 320,
      },
    },
    "& img:nth-of-type(26)": {
      top: {
        xs: 300,
        md: 630,
      },
      left: {
        xs: 240,
        md: 400,
      },
    },
    "& img:nth-of-type(27)": {
      top: {
        xs: 330,
        md: 680,
      },
      left: {
        xs: 40,
        md: 90,
      },
    },
    "& img:nth-of-type(28)": {
      top: {
        xs: 340,
        md: 700,
      },
      left: {
        xs: 100,
        md: 170,
      },
    },
    "& img:nth-of-type(29)": {
      top: {
        xs: 330,
        md: 680,
      },
      left: {
        xs: 155,
        md: 250,
      },
    },
    "& img:nth-of-type(30)": {
      top: {
        xs: 340,
        md: 690,
      },
      left: {
        xs: 215,
        md: 330,
      },
    },
    "& img:nth-of-type(31)": {
      top: {
        xs: 330,
        md: 695,
      },
      left: {
        xs: 265,
        md: 430,
      },
    },
  },
};
