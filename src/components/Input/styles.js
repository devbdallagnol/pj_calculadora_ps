import styled from "styled-components";

export const InputContainer = styled.input`
    background-color: #1e1e1e;
    color: #ffffff;
    font-size: 1em;
    width: 80%;
    height: 15px;
    padding: 10px;
    margin: 15px 0;
    border-radius: 10px;
    border: 3px solid #c1c1c1;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s ease-in-out;
    text-align: center;

    &:hover {
        background-color: #333;
    }
`;