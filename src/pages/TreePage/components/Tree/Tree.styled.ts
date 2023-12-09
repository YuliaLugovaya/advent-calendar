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
      xs: "20vh 0",
      md: "15vh 0",
    },
  },
  treeChristmasContainer: {
    width: {
      xs: "100%",
      xl: "50%",
    },
    height: {
      xs: "400px",
      md: "800px",
    },
    display: "flex",
    justifyContent: "center",
  },
  treeChristmas: {
    width: {
      sm: "320px",
      md: "700px",
    },
    position: "absolute",
    top: "0",
    left: {
      xs: "0",
      md: "50px",
      lg: "100px",
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
    padding: {
      xs: "20px",
      md: "20px 30px",
    },
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
        md: 360,
        lg: 410,
      },
    },
    "& img:nth-of-type(2)": {
      top: {
        xs: 55,
        md: 160,
      },
      left: {
        xs: 120,
        md: 330,
        lg: 380,
      },
    },
    "& img:nth-of-type(3)": {
      top: {
        xs: 55,
        md: 160,
      },
      left: {
        xs: 160,
        md: 390,
        lg: 440,
      },
    },
    "& img:nth-of-type(4)": {
      top: {
        xs: 90,
        md: 220,
      },
      left: {
        xs: 115,
        md: 320,
        lg: 370,
      },
    },
    "& img:nth-of-type(5)": {
      top: {
        xs: 90,
        md: 220,
      },
      left: {
        xs: 165,
        md: 400,
        lg: 450,
      },
    },
    "& img:nth-of-type(6)": {
      top: {
        xs: 125,
        md: 280,
      },
      left: {
        xs: 110,
        md: 320,
        lg: 370,
      },
    },
    "& img:nth-of-type(7)": {
      top: {
        xs: 125,
        md: 280,
      },
      left: {
        xs: 170,
        md: 400,
        lg: 450,
      },
    },
    "& img:nth-of-type(8)": {
      top: {
        xs: 160,
        md: 340,
      },
      left: {
        xs: 90,
        md: 365,
        lg: 360,
      },
    },
    "& img:nth-of-type(9)": {
      top: {
        xs: 160,
        md: 340,
      },
      left: {
        xs: 140,
        md: 300,
        lg: 415,
      },
    },
    "& img:nth-of-type(10)": {
      top: {
        xs: 160,
        md: 345,
      },
      left: {
        xs: 185,
        md: 425,
        lg: 475,
      },
    },
    "& img:nth-of-type(11)": {
      top: {
        xs: 195,
        md: 405,
      },
      left: {
        xs: 80,
        md: 285,
        lg: 335,
      },
    },
    "& img:nth-of-type(12)": {
      top: {
        xs: 200,
        md: 410,
      },
      left: {
        xs: 140,
        md: 360,
        lg: 410,
      },
    },
    "& img:nth-of-type(13)": {
      top: {
        xs: 195,
        md: 405,
      },
      left: {
        xs: 195,
        md: 435,
        lg: 485,
      },
    },
    "& img:nth-of-type(14)": {
      top: {
        xs: 230,
        md: 465,
      },
      left: {
        xs: 70,
        md: 260,
        lg: 310,
      },
    },
    "& img:nth-of-type(15)": {
      top: {
        xs: 230,
        md: 485,
      },
      left: {
        xs: 115,
        md: 325,
        lg: 375,
      },
    },
    "& img:nth-of-type(16)": {
      top: {
        xs: 230,
        md: 470,
      },
      left: {
        xs: 170,
        md: 385,
        lg: 435,
      },
    },
    "& img:nth-of-type(17)": {
      top: {
        xs: 235,
        md: 475,
      },
      left: {
        xs: 210,
        md: 450,
        lg: 500,
      },
    },
    "& img:nth-of-type(18)": {
      top: {
        xs: 265,
        md: 530,
      },
      left: {
        xs: 85,
        md: 245,
        lg: 295,
      },
    },
    "& img:nth-of-type(19)": {
      top: {
        xs: 265,
        md: 555,
      },
      left: {
        xs: 140,
        md: 310,
        lg: 360,
      },
    },
    "& img:nth-of-type(20)": {
      top: {
        xs: 265,
        md: 540,
      },
      left: {
        xs: 185,
        md: 390,
        lg: 440,
      },
    },
    "& img:nth-of-type(21)": {
      top: {
        xs: 270,
        md: 550,
      },
      left: {
        xs: 225,
        md: 470,
        lg: 520,
      },
    },
    "& img:nth-of-type(22)": {
      top: {
        xs: 295,
        md: 605,
      },
      left: {
        xs: 35,
        md: 220,
        lg: 270,
      },
    },
    "& img:nth-of-type(23)": {
      top: {
        xs: 300,
        md: 630,
      },
      left: {
        xs: 80,
        md: 290,
        lg: 340,
      },
    },
    "& img:nth-of-type(24)": {
      top: {
        xs: 300,
        md: 610,
      },
      left: {
        xs: 130,
        md: 355,
        lg: 405,
      },
    },
    "& img:nth-of-type(25)": {
      top: {
        xs: 305,
        md: 630,
      },
      left: {
        xs: 190,
        md: 420,
        lg: 470,
      },
    },
    "& img:nth-of-type(26)": {
      top: {
        xs: 300,
        md: 630,
      },
      left: {
        xs: 240,
        md: 500,
        lg: 550,
      },
    },
    "& img:nth-of-type(27)": {
      top: {
        xs: 330,
        md: 680,
      },
      left: {
        xs: 40,
        md: 190,
        lg: 240,
      },
    },
    "& img:nth-of-type(28)": {
      top: {
        xs: 340,
        md: 700,
      },
      left: {
        xs: 100,
        md: 270,
        lg: 320,
      },
    },
    "& img:nth-of-type(29)": {
      top: {
        xs: 330,
        md: 680,
      },
      left: {
        xs: 155,
        md: 350,
        lg: 400,
      },
    },
    "& img:nth-of-type(30)": {
      top: {
        xs: 340,
        md: 690,
      },
      left: {
        xs: 215,
        md: 430,
        lg: 480,
      },
    },
    "& img:nth-of-type(31)": {
      top: {
        xs: 330,
        md: 695,
      },
      left: {
        xs: 265,
        md: 530,
        lg: 580,
      },
    },
  },
};
