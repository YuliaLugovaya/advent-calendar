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
      xs: "100px 15px 50px 15px",
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
    color: "color.yellow",
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
    color: "color.peach",
  },
  traditionsSection: {
    display: "flex",
    flexDirection: {
      xs: "column",
      lg: "row",
    },
    gap: "20px",
  },
  traditionsSectionReverse: {
    display: "flex",
    flexDirection: {
      xs: "column",
      lg: "row-reverse",
    },
    gap: "20px",
  },
  traditionsText: {
    width: {
      xs: "100%",
      lg: "50%",
    },
  },
  traditionsPicture: {
    width: {
      xs: "100%",
      lg: "50%",
    },
    objectFit: "cover",
    boxShadow: "0px 5px 10px 0px rgba(67, 74, 56, 0.2)",
  },
};
