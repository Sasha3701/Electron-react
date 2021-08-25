import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css"
import { StyledEngineProvider } from '@material-ui/core'

const app = (
    <StyledEngineProvider injectFirst>
        <App />
    </StyledEngineProvider>
)

ReactDOM.render(app, document.getElementById("root"));
