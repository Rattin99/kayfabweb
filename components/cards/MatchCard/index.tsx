

type props = {
    title: string,
    show: string,
   
}


const MatchCard = ({title,show}:props) => {


    return(
        <div className="max-w-lg relative">
            <div className="max-w-lg relative border border-x-stone-900 rounded-lg">
                <img className="" src="maxresdefault.jpg"/>         
            </div>
            <div className="bg-black text-white text-lg w-full z-10 bottom-1 absolute rounded-sm">
                <h2>{title}, {show}</h2>
            </div>
        </div>
    )
}



export default MatchCard;