export const styles = {
  traditionsContainer: {
    maxWidth: "1200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: {
      xs: "30px",
      md: "70px",
    },
    m: "0 auto",
    p: {
      xs: "100px 20px 50px 20px",
      md: "150px 20px 100px 20px",
    },
  },
  traditionsTitle: {
    mb: {
      xs: "20px",
    },
    fontSize: {
      xs: "1.3rem",
      md: "1.5rem",
    },
    color: "#c29463",
    textAlign: "center",
  },
  traditionsDescription: {
    mb: {
      xs: "20px",
    },
    fontSize: {
      xs: "1rem",
    },
    textAlign: "justify",
  },
  traditionsSubtitle: {
    mb: {
      xs: "20px",
    },
    fontSize: {
      xs: "1rem",
      md: "1.2rem",
    },
    textAlign: "justify",
    color: "#d99f94",
  },
  traditionsSection: {
    display: "flex",
    gap: "20px",
  },
  traditionsSectionReverse: {
    display: "flex",
    flexDirection: "row-reverse",
    gap: "20px",
  },
  traditionsText: {
    width: "50%",
  },
  traditionsPicture: {
    width: "50%",
    height: "450px",
    objectFit: "cover",
  },
};
