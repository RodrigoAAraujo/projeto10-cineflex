import { useEffect, useState } from "react"
import styled from "styled-components"

export default function FormSeats({ postInfo, seatsSelected }) {

    const [body, setBody] = useState({
        ids: [],
        compradores: []
    })

    useEffect(()=>{
        setBody({...body, ids:seatsSelected.map((s)=> s.id)})
    }, [seatsSelected])

    return (
        <FormStyle onSubmit={(e) => postInfo(e , body)}>
            {body.ids.map((s) => <FormInfo seatId={s} setBody={setBody} body={body} buyers={body.compradores}/>)}

            <button data-identifier="reservation-btn" type="submit">Reservar assento(s)</button>
        </FormStyle>
    )
}



function FormInfo({seatId, setBody, body, buyers}) {
    const [seatInfo, setSeatInfo] = useState({idAssento: seatId, nome:"" ,cpf:""})

    useEffect(()=> {     
        setBody({...body, compradores:[...buyers.filter((b) => b.idAssento !== seatId), seatInfo]})
    },[seatInfo])

    return (
        <div>
            <label htmlFor="name">Nome do Comprador:</label>

            <input data-identifier="buyer-name-input" name="name" 
            type="text" required placeholder="Digite seu nome..." 
            value={seatInfo.nome} onChange={(e) => setSeatInfo({...seatInfo, nome: e.target.value})}
            />


            <label htmlFor="cpf">CPF do Comprador:</label>

            <input data-identifier="buyer-cpf-input" name="cpf" 
            pattern="\d{3}\.?\d{3}\.?\d{3}-?\d{2}" required placeholder="Digite seu cpf..." 
            value={seatInfo.cpf} onChange={(e) => setSeatInfo({...seatInfo, cpf: e.target.value})}
            />
        </div>
    )
}

const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    
    div{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: flex-start;
        width: 95%;
        max-width: 600px;

        label{
            margin: 8px;
            font-size: 18px;
            font-weight: 400;
        }

        input{
            width: 100%;
            padding: 10px;
            border-radius: 3px;
            outline: none;
            border:1px solid #D4D4D4;

            
            font-size: 18px;
            font-weight: 400;
            line-height: 21px;
            letter-spacing: 0em;
            text-align: left;

            &::placeholder{
                font-size: 18px;
                font-style: italic;
                font-weight: 400;
                color: #7A7A7A;
            }

        }
    }

    button{
        margin-top: 50px;
        width: 225px;
        height: 42px;

        background-color: #E8833A;
        color: #ffffff;
        border-radius: 3px;
        margin-right: 8px;
        font-size: 18px;
        font-weight: 400;

        cursor: pointer;

    }   

  
`