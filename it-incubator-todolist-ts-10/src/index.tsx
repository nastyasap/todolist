import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ThemeProvider} from "@material-ui/core/styles";
import {createTheme} from "@material-ui/core/styles";
import {CssBaseline} from "@material-ui/core";
import {AppWithUseReducer} from "./AppWithUseReducer";
import {AppWithRedux} from "./AppWithRedux";
import {store} from "./state/storeRedux";
import {Provider} from "react-redux";
import {AppWithRedux1} from "./AppWithRedux1";

const theme = createTheme({
        palette: {
            primary: {
                main: '#7c4dff',
            },
            secondary: {
                main: '#00bfa5',
            },
            /*{
                main: '#f4ff81',
            },*/
            type: 'dark'
        },
    }
)

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Provider store={store}>
            <AppWithRedux1/>
        </Provider>
    </ThemeProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
