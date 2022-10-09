import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Session({daySessions}){

    const {date,id,showtimes,weekday} = daySessions

    return (
        <SessionStyle>
            <h3>{weekday} - {date}</h3>
            <div>
                {showtimes.map((s) => <SessionButton id={s.id} time={s.name}/>)}
            </div>
        </SessionStyle>
    )
}

function SessionButton({id, time}){
    return(
        <Link to={`/assentos/${id}`}>
            <button>{time}</button>
        </Link>
    )
}


const SessionStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0px 30px;

    h3{
        font-size: 20px;
        font-weight: 400;
        line-height: 23px;
        text-align: left;
        margin: 23px 0px;
        letter-spacing: 0.02em;
    }

    button{
        width: 82px;
        height: 43px;
        background-color: #E8833A;
        color: #ffffff;
        border-radius: 3px;
        margin-right: 8px;
    
        font-size: 18px;
        cursor: pointer;
        font-weight: 400;
    }

    div{
        flex-direction: row;
    }


`