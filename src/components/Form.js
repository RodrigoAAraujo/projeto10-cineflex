

export default function FormSeats({postInfo, seatsSelected}){
    return(
        <form onSubmit={() =>postInfo()}>  
            {seatsSelected.map(()=> <FormInfo/>)}

            <button type="submit">Reservar assento(s)</button>
        </form>
    )
}



function FormInfo(){

}