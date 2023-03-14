
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import MatchCard from ".";
import MatchBar from "./MatchBar";


type props = {
    title: string,
    show: string,
    userName: string,
    snippet:string,
    rating: number
}

const Reviewer = ({title,show,snippet,userName,rating}: props) => {
    return ( 
        <div className="max-w-lg">
           <div className="flex">
                <div className="h-12">
                        <div className="w-12 h-12 rounded-full my-5 mx-auto object-cover border-white border-2 overflow-hidden">
                            <img className="" src = "dp.jpg" />
                        </div>  
                </div>
                <div>
                        <div>
                           <div>
                                <h2 className="text-white text-lg mt-5 mx-5">{userName}</h2>
                           </div>
                           <div className="mx-5">
                                {
                                    [...Array(rating)].map((value,index) => (<FontAwesomeIcon className="text-white" icon={faStar} key ={index}/>))
                                }
                           </div>
                            <div>
                                <p className="text-white px-5">{snippet}</p>
                            </div>
                        </div>
                </div>
                
           </div>            
            <MatchCard title={title} show ={show} />
            <MatchBar />
        </div>
    );
}
 
export default Reviewer;
