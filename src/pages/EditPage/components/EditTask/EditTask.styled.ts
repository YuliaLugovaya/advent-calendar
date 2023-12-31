export const styles = {
  editContainer: {
    maxWidth: "1200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    m: "0 auto",
    pt: {
      xs: "100px",
      md: "150px",
    },
    pb: {
      xs: "50px",
      md: "100px",
    },
  },
  editTable: {
    fontSize: {
      xs: 13,
      md: 16,
    },
    p: {
      xs: "5px",
      md: "16px",
    },
  },
  editTitle: {
    fontSize: {
      xs: 13,
      md: 16,
    },
    p: {
      xs: "5px",
      md: "16px",
    },
  },
  editHead: {
    bgcolor: "color.yellow",
  },
  editTitles: {
    color: "text.secondary",
    fontSize: {
      xs: 14,
      md: 18,
    },
    p: {
      xs: "5px",
      md: "16px",
    },
  },
  editTextarea: {
    width: "100%",
  },
  editButton: {
    color: "color.peach",
    "&:hover": {
      bgcolor: "transparent",
    },
    minWidth: "30px",
  },
  saveButton: {
    color: "color.greenLight",
    "&:hover": {
      bgcolor: "transparent",
    },
    minWidth: "30px",
  },
  editIcon: {
    width: "30px",
  },
  editContent: {
    display: "flex",
    flexDirection: {
      xs: "column",
      md: "row",
    },
  },
};
