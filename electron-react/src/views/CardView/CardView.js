import styles from "./CardView.module.css";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";

const CardView = ({ country, flag, rate }) => {
  return (
    <Card className={styles["card"]}>
      <CardMedia className={styles["card__img"]} image={flag} title={country[1]} />
      <CardContent className={styles["card__content"]}>
        <Typography variant="h5" className={styles["card__name"]}>{country[1]}</Typography>
        <Typography variant="body1" className={styles["card__rate"]}>{`1 EUR = ${rate} ${country[0]}`}</Typography>
      </CardContent>
    </Card>
  );
};

export default CardView;
