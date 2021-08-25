import { Typography } from "@material-ui/core"
import { Box } from "@material-ui/system"
import styles from "./Prompt.module.css"

const Prompt = ({variant, children}) => {
    return <Box className={styles["prompt"]}><Typography variant={variant}>{children}</Typography></Box>
}

export default Prompt