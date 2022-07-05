import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    border:0;
}

:root{
}

body{

}

body, input, button {
    font-family: Inter, serif;
    font-size: 1rem;
}

button{
    cursor: pointer;
}

a{
    text-decoration: none;
}
`;
