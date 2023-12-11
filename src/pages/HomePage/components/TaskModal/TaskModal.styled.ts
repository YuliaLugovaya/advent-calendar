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
      md: "auto",
    },
    bgcolor: "#FFFFFF",
    borderRadius: { xs: "0", md: "10px" },
    p: {
      xs: "35px 20px 40px 20px",
      md: "3% 15% 6% 15%",
      lg: "3% 10% 5% 10%",
    },
    outline: "none",
  },
  modalContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    p: {
      xs: "0",
    },
  },
  modalTitle: {
    mt: "20px",
    fontSize: {
      xs: "1.5rem",
      md: "2rem",
    },
    color: "#c29463",
    textAlign: "center",
  },
  modalDescription: {
    m: {
      xs: "20px 0 40px 0",
      md: "30px 0 50px 0",
    },
    fontSize: {
      xs: "1.1rem",
      md: "1.3rem",
    },
    color: "#000000",
    textAlign: "justify",
  },
  modalButton: {
    width: {
      xs: "300px",
      md: "450px",
    },
    padding: "20px 30px",
    fontSize: {
      xs: 16,
      md: 18,
    },
    fontWeight: 700,
    borderRadius: "6px",
    textTransform: "none",
  },
  modalIconClose: {
    position: "absolute",
    top: 8,
    right: 8,
  },
  modalBall: {
    width: {
      xs: "200px",
      md: "250px",
    },
    height: {
      xs: "200px",
      md: "250px",
    },
    m: {
      xs: "10px 0",
      md: "20px 0",
    },
  },
  modalLights: {
    width: "75%",
    textAlign: "center",
  },
  modalCompleteContainer: {
    display: "flex",
    alignItems: "end",
    gap: "10px",
    m: {
      xs: "20px 0 40px 0",
      md: "30px 0 50px 0",
    },
  },
  modalCompleteDescription: {
    fontSize: {
      xs: "1.1rem",
      md: "1.3rem",
    },
    color: "#000000",
    textAlign: "justify",
  },
  modalComplete: {
    width: "50px",
    height: "50px",
  },
};
