export const styles = {
  calendarWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  calendarContainer: {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "1480px",
    justifyContent: {
      xs: "center",
      lg: "start",
    },
    m: "0 auto",
    gap: "10px",
    pt: {
      xs: "20vh",
      md: "15vh",
    },
  },
  calendarButton: {
    width: "300px",
    padding: "20px 30px",
    m: "60px 0",
    fontSize: {
      xs: 16,
      md: 18,
    },
    fontWeight: 700,
    borderRadius: "6px",
    textTransform: "none",
  },
};
