import styled from "@emotion/styled";

export const Wrapper = styled.nav`
    display: flex;
    border: 0.5px solid #000;
    padding: 10px;
    &:hover {
        border: 1px solid #28c2f7;
    }
`;

export const Item = styled.span`
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
        font-weight: bold;
    }
`;

export const ItemName = styled.a`
    margin-left: 5px;
    color: #000;
`;


export const Slash = styled.span`
    margin: 0 10px;
`;
