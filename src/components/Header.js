import styled from "styled-components"

export default function Header(){
    return(
        <HeaderStyle>
            <h1>CINEFLEX</h1>
        </HeaderStyle>
    )
}

const HeaderStyle = styled.header`
    color: #E8833A;
    font-size: 34px;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: center;
    background-color: #C3CFD9;
    height: 67px;
    display: flex;
    align-items: center;
    justify-content: center;
`