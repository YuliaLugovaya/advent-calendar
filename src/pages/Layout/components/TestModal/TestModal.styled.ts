export const styles = {
  modalContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: {
      xs: "100%",
      md: "80%",
      lg: "50%",
    },
    height: {
      xs: "100%",
      md: "auto",
    },
    bgcolor: "text.secondary",
    borderRadius: { xs: "0", md: "10px" },
    p: {
      xs: "35px 20px 40px 20px",
      md: "45px 45px 50px 45px",
      lg: "50px 60px 70px 60px",
    },
    outline: "none",
    overflowY: "auto",
    overflowX: "hidden",
  },
  modalDescription: {
    m: {
      xs: "20px 0 30px 0",
      md: "25px 0 35px 0",
    },
    fontSize: {
      xs: "1rem",
      md: "1.3rem",
    },
    color: "text.primary",
    textAlign: "justify",
  },
  modalIconClose: {
    position: "absolute",
    top: 8,
    right: 8,
  },
  modalLights: {
    width: {
      xs: "80%",
      lg: "50%",
    },
    textAlign: "center",
  },
};
