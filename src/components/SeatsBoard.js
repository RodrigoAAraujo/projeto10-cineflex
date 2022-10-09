import { useState } from "react"
import styled from "styled-components"

export default function SeatsBoard({seats,allSeats, select}){
    return (
        <SeatsBoardStyle>
            {seats.map((s,index)=> <Seat seat={s} key={index} allSeats={allSeats} select={select}/>)}
        </SeatsBoardStyle>
    )
}

function Seat({seat, allSeats, select}){
    const {id, name, isAvailable} = seat

    const [selected, setSelected] = useState(isAvailable)

    function toggleSelection(){
        if (selected === false || selected === true){
            setSelected("selected")
            select([...allSeats, id])
            console.log(allSeats)
        }else{
            setSelected(isAvailable)
            select(allSeats.filter((s) => s !== id))
            console.log(allSeats)
        }
    }

    return(
        <SeatStyle onClick={() => toggleSelection()}>
            {name}
        </SeatStyle>
    )

}

const SeatsBoardStyle = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
`
const SeatStyle = styled.button`
    width: 26px;
    height: 26px;
    border-radius: 50%;
    margin: 10px 6px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 11px;
    font-weight: 400;
    color: #000000;
`