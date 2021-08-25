import { Box, Typography } from "@material-ui/core";
import styles from "./CurrentDate.module.css";

const CurrentDate = ({ date }) => {
    return (
        <Box className={styles["current-date"]}>
            <Typography variant="subtitle1">{new Date(date).toDateString()}</Typography>
        </Box>
    )
}

export default CurrentDate