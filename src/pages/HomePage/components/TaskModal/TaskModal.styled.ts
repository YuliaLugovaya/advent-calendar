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
      xs: "1.4rem",
      md: "1.8rem",
    },
    color: "color.yellow",
    textAlign: "center",
    lineHeight: {
      xs: 1,
      md: 1.3,
    },
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
  modalLink: {
    mb: "20px",
    fontSize: {
      xs: "1.1rem",
      md: "1.3rem",
    },
    color: "color.yellow",
  },
  modalButton: {
    width: {
      xs: "100%",
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
      xs: "150px",
      md: "200px",
    },
    height: {
      xs: "150px",
      md: "200px",
    },
    m: {
      xs: "10px 0",
    },
  },
  modalLights: {
    width: {
      xs: "80%",
      lg: "50%",
    },
    textAlign: "center",
  },
  modalCompleteContainer: {
    display: "flex",
    alignItems: "end",
    gap: "10px",
    m: {
      xs: "20px 0 30px 0",
      md: "25px 0 35px 0",
    },
  },
  modalCompleteDescription: {
    fontSize: {
      xs: "1.1rem",
      md: "1.3rem",
    },
    color: "text.primary",
    textAlign: "justify",
  },
  modalComplete: {
    width: "30px",
    height: "30px",
  },
  modalCheckboxLabel: {
    fontSize: {
      xs: "1rem",
      md: "1.2rem",
    },
    "& span:nth-of-type(1)": {
      color: "color.greenLight",
    },
    "& .MuiCheckbox-root": {
      transition: "0.3s ease",
    },
    "& .MuiCheckbox-root:hover": {
      bgcolor: "#94a97533",
      transition: "0.3s ease",
    },
  },
};
