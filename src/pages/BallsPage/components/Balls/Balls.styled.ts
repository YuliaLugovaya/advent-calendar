export const styles = {
  treeContainer: {
    display: "flex",
    justifyContent: "center",
    m: "0 auto",
    p: {
      xs: "20vh 0",
      md: "15vh 0",
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
};
