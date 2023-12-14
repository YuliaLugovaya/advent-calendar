export const styles = {
  santaCard: {
    display: "flex",
    flexDirection: {
      xs: "column",
      md: "row",
    },
    maxWidth: 1200,
    boxShadow: "0px 5px 10px 0px rgba(67, 74, 56, 0.2)",
  },
  santaDescription: {
    mb: {
      xs: "20px",
    },
    fontSize: {
      xs: "1rem",
    },
    textAlign: "justify",
  },
  santaSubtitle: {
    mb: {
      xs: "20px",
    },
    fontSize: {
      xs: "1rem",
      md: "1.2rem",
    },
    textAlign: "justify",
    color: "#c29463",
  },
  santaCountry: {
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
  santaPicture: {
    objectFit: "contain",
    alignSelf: "center",
    width: {
      xs: "100%",
      md: "30%",
      lg: "20%",
    },
    maxWidth: {
      xs: "300px",
      md: "auto",
    },
  },
  santaContent: {
    width: {
      xs: "100%",
      md: "70%",
      lg: "80%",
    },
  },
};
