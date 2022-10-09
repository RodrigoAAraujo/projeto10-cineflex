import styled from "styled-components"

export default function Footer({posterURL, title, day, time}){
    console.log(day)
    return(
        <FooterStyle>
            <div data-identifier="movie-img-preview">
                <img src={posterURL}/>
            </div>
            <span data-identifier="movie-and-session-infos-preview">
                <h1>{title}</h1>
                {(day !== undefined)?
                    <h1>{day} - {time}</h1>
                : null}
            </span>
        </FooterStyle>
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