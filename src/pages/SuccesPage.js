import { useEffect, useState } from "react"
import { Link, useLocation} from "react-router-dom"
import axios from "axios"

import LoadingPage from "./LoadingPage"
import styled from "styled-components"
import Session from "../components/Session"

export default function SuccessPage(){
    const successInfo = useLocation()
    console.log(successInfo)
    const [displayInfo, setDisplayInfo] = useState(null)


    useEffect(()=>{
        const URL = "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many"
        axios.post(URL, successInfo.state.customers)
            .then( res => {
                setDisplayInfo(true)
            })
            .catch(err => {

            })
    })

    if(displayInfo === null){
        return <LoadingPage/>
    }
    else{
        return(
            <SuccessPageStyle>
                <h2>Pedido feito com sucesso!</h2>
                <div>
                    <h3> Filme e Sessão</h3>
                    <p data-identifier="movie-session-infos-reserve-finished">
                        {successInfo.state.session.movie.title}
                    </p>
                    <p data-identifier="movie-session-infos-reserve-finished">
                        {successInfo.state.session.day.date}   {successInfo.state.session.name}
                    </p>
                </div>
                <div>
                    <h3> Ingresso</h3>
                    {successInfo.state.seatsNumber.map((t)=> <p data-identifier="seat-infos-reserve-finished">Assento {t}</p>)}

                </div>
                <div>
                    <h3> Comprador(es)</h3>
                    {successInfo.state.customers.compradores.map((t)=> 
                    <>
                        <p data-identifier="buyer-infos-reserve-finished">Nome: {t.nome} </p>
                        <p data-identifier="buyer-infos-reserve-finished">CPF: {t.cpf}</p>
                    </> 
                    )}

                </div>

                <button data-identifier="back-to-home-btn">
                    <Link to={"/"}>
                        Voltar para Home
                    </Link>
                </button>
            </SuccessPageStyle>
        )
    }
}

const SuccessPageStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h2{
        font-size: 24px;
        font-weight: 700;
        text-align: center;
        color:#247A6B;
        margin-top: 25px;
    }

    div{
        width: 95%;
        max-width: 400px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        
        h3{
            font-size: 24px;
            font-weight: 700;
            color: #293845;
            margin-top: 35px;
            margin-bottom: 12px;
        }
        p{
            font-size: 22px;
            font-weight: 400;
            color: #293845;
            margin: 3px 0px;
        }

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