import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
     @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
    * {
        box-sizing: border-box;
    }
    html, body, #root{
        width: 100%;
        height: 100%;
    }
    body {
        padding: 0;
        margin: 0;
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
    } 
    button {
        background-color: rgb(103, 58, 183);
        color: #fff;
        font-weight: bold;
        border: none;
        outline: none;
        padding: 12px 24px;
        border-radius: 3px;
        cursor: pointer;  
        display: block;      
        margin-left: auto;
        margin-top: 50px;
    }  
`;
