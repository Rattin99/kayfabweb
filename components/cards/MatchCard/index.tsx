import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardBar from "@/components/CardBar";
import Review from "../Review";


type props = {
    title: string,
    show: string,
    userName: string,
    rating: number,
    snippet: string,
    avg: number,
    ucount: number,
    comments: number,
    imgUrl: string,
}

const MatchCard = ({title,show,userName,snippet,rating,avg,ucount,comments,imgUrl}:props) => {


    return(
       <div className="border-b-2 bg-dark-xxl border-gray-700 ">
         <div className="max-w-md   relative">
           <div>
                <div className="overflow-hidden p-2">
                    <div className="max-w-lg rounded-lg object-cover  overflow-hidden m-auto">
                        <img className="" alt="balsal" src={imgUrl}/>         
                    </div>
                </div>
                <div className="absolute rounded-md top-4 text-white text-sm bg-dark-xxl p-1  right-4">
                    <h5>Match</h5>
                </div>
                <div className="absolute rounded-md top-4 text-white text-sm bg-dark-xxl p-1 pl-2  left-4 flex">
                    <h5>{avg}</h5>
                    <FontAwesomeIcon className="my-auto m-1" icon={faStar} />
                </div>

                <div className="px-5 text-lg bg-dark-xxl text-white">
                            <h2>{title}, {show}</h2>
                </div>
           </div>
            
           <Review userName={userName} snippet ={snippet} rating = {rating} ucount = {ucount} comments = {comments} />
        </div>
       </div>
    )
}



export default MatchCard;