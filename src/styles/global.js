import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        background-color: #232323;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
    }
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        position: relative;
        height: 100vh;
    }

` 