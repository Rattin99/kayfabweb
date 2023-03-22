import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import CardBar from "../CardBar";

type props = {
    userName : string,
    snippet : string,
    rating : number,
    ucount: number,
    comments: number,
}

const Review = ({userName,snippet,rating,ucount,comments}: props) => {
    return (  
      <div>
        <div className="px-5 py-3 bg-dark-xxl ">
            <div className="bg-dark-xxl  h-1/2 text-white text-md w-full">
                <div>
                    <div className="flex">
                        <div className="w-6 h-6 object-cover overflow-hidden rounded-full ">
                            <img src="dp.jpg" />
                        </div>
                        <div className="px-2  text-md">
                            <h2>{userName}</h2>
                        </div>
                    </div>
                    <div className="text-md mb-2">
                        {
                            [...Array(rating)].map((value,index) => (
                                <FontAwesomeIcon icon={faStar} key={index}/>
                            ))
                        }
                    </div>
                    <div className="text-sm ">
                        <p>{snippet}</p>
                    </div>
                </div>
            </div>
        </div> 
     <CardBar  ucount={ucount} comments={comments}/>
    </div>
    
    );
}
 
export default Review;