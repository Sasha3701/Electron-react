import { CircularProgress } from "@material-ui/core";
import { Box } from "@material-ui/system";
import styles from "./ProgressBar.module.css";

const ProgressBar = () => {
  return (
    <Box classname={styles["progress-bar"]}>
      <CircularProgress />
    </Box>
  );
};

export default ProgressBar;