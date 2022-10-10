import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function Footer({posterURL, title, day, time}){
    const navigate =useNavigate()

    return(
        <>
            <FooterStyle>
                <div data-identifier="movie-img-preview">
                    <img src={posterURL} alt="movie-miniature-icon"/>
                </div>
                <span data-identifier="movie-and-session-infos-preview">
                    <h1>{title}</h1>
                    {(day !== undefined)?
                        <h1>{day} - {time}</h1>
                    : null}
                </span>

            </FooterStyle>
            <ButtonBack onClick={() => navigate(-1)}><ion-icon name="arrow-back-outline"></ion-icon></ButtonBack>
        </>
    )
}

const FooterStyle = styled.footer`
    position: fixed;
    bottom: 0; left: 0;
    display: flex;
    align-items: center;
    background-color: #9EADBA;
    height: 117px;
    width: 100%;
    padding: 10px;

    div{
        border-radius: 2px;
        width: 64px;
        height: 89px;
        padding: 8px;
        background-color: #ffffff;

        img{
            width: 100% ;
            height: 100%;
            object-fit: cover;
        }
    }

    h1{
        font-family: 'Roboto', sans-serif;
        font-size: 26px;
        font-weight: 400;
        color: #293845;
        margin-left: 14px;
        margin-top: 5px;
    }
`
const ButtonBack = styled.button`
    position:absolute;
    top: 15px; left: 10px;
    border-radius: 50%;
    width: 37px;
    height: 37px;
    background-color: #E8833A;
    color: #ffffff;
    cursor: pointer;
    ion-icon{
        font-size: 25px;
    }
`