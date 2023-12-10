export const styles = {
  treeContainer: {
    display: "flex",
    justifyContent: "center",
    m: "0 auto",
    p: {
      xs: "100px 0",
      md: "200px 0",
    },
  },
  ballsContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "10px",
    "& img": {
      width: {
        xs: "200px",
        sm: "300px",
      },
      height: {
        xs: "200px",
        sm: "300px",
      },
    },
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
  treeLights: {
    width: "300px",
  },
  ballsWrapper: {
    width: {
      xs: "90%",
      md: "50%",
    },
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "center",
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
};
