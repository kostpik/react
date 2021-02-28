import React from 'react';

import styled from 'styled-components';
const Block = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h2 {
        font-size: 25px;
        :hover{
            color : red; 
        }
    }
`
const AppHeader = () => {
    return (
        <Block>
            <h1>Piksotov</h1>
            <h2>3 записей</h2>
        </Block>
    )
}
export default AppHeader;