import styled from "styled-components";


export const Block = styled.div`
    width: 100%;
    height: 200px;
    background-color: #0a323a;
`

export const DivGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    max-width: 800px;
    margin: 0 auto;
    grid-gap: 10px;
`

export const BigBlock = styled(Block)`
    width: 100%;
    height: 100%;
    grid-column: 1/3;
    grid-row: 1/4;
    background-color: #14697a;
`