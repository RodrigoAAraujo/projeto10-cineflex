import styled from "styled-components"
import loading from "../images/Spinner-1.5s-240px.gif"

export default function LoadingPage(){
    return (
        <LoadingStyle>
            <img src={loading} alt="Loading Icon"/>
        </LoadingStyle>
    )
}

const LoadingStyle = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`