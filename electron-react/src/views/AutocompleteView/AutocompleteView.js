import styles from "./AutocompleteView.module.css";
import { Autocomplete, TextField } from "@material-ui/core";

const AutocompleteView = ({ listCurrency, value, setValue }) => {
  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      className={styles["autocomplete"]}
      id="list-currency"
      options={listCurrency}
      getOptionLabel={(option) => option?.[1]}
      renderInput={(params) => <TextField {...params} label="Currency..." />}
    />
  );
};

export default AutocompleteView;