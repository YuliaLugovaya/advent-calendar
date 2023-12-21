export const styles = {
  parentsContainer: {
    maxWidth: "1200px",
    display: "flex",
    flexDirection: {
      xs: "column",
      md: "row",
    },
    justifyContent: "center",
    gap: "30px",
    m: "0 auto",
    p: {
      xs: "100px 20px 50px 20px",
      md: "150px 20px 100px 20px",
    },
  },
  parentsSections: {
    width: {
      xs: "100%",
      md: "30%",
    },
  },
  parentsAbout: {
    width: {
      xs: "100%",
      md: "70%",
    },
  },
  parentsButton: {
    width: {
      xs: "250px",
      md: "400px",
    },
    p: {
      xs: "20px",
      md: "20px 30px",
    },
    mb: "30px",
    fontSize: {
      xs: 16,
      md: 18,
    },
    fontWeight: 700,
    borderRadius: "6px",
    textTransform: "none",
  },
  parentsTitle: {
    mb: {
      xs: "20px",
    },
    fontSize: {
      xs: "1.3rem",
      md: "1.5rem",
    },
    color: "color.yellow",
    textAlign: "center",
  },
  parentsDescription: {
    mb: {
      xs: "20px",
    },
    fontSize: {
      xs: "1rem",
    },
    textAlign: "justify",
  },
  parentsAccent: {
    color: "color.peach",
    "&:hover": {
      color: "color.greenLight",
    },
  },
  treeLights: {
    width: "300px",
  },
};
