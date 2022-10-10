import { Link } from "react-router-dom"
import styled from "styled-components"

export default function ErrorPage(){
    return(
        <ErrorPageStyle>
            <h2>Erro</h2>
            <p>Um erro inesperado aconteceu</p>
            <p>Por favor, tente mais tarde</p>

            <button>
                <Link to="/">
                    Retorna para Home
                </Link>
            </button>
        </ErrorPageStyle>
    )
}

const ErrorPageStyle = styled.main`
    margin: 0px auto;
    width: 90%;
    max-width: 600px;

    h2{
        font-size: 30px;
        font-weight: 700;
        margin-top: 30px;
        margin-bottom: 10px;
    }
    p{
        font-size: 22px;
        font-weight: 400;
        margin:2px 0px;
    }

    button{
        padding: 10px;
        background-color: #E8833A;
        color: #ffffff;
        border-radius: 3px;
        font-size: 18px;
        cursor: pointer;
        font-weight: 400;
        margin-top: 30px;
        a{
            text-decoration: none;
            color: inherit;
        }
    }

`