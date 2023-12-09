export const styles = {
  treeContainer: {
    display: "flex",
    justifyContent: "center",
    m: "0 auto",
    p: {
      xs: "100px 0",
      md: "200px 0",
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
