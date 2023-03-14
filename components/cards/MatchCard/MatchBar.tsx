import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar,faCircleDown, faCircleUp } from "@fortawesome/free-regular-svg-icons";



const MatchBar = () => {
    return (
        <div className="flex text-white text-lg">
            <FontAwesomeIcon className="text-white m-2" icon={faCircleUp} />
            <FontAwesomeIcon className="text-white m-2" icon={faCircleDown} />
            <h4 className="text-white m-1 ">comment</h4>
        </div>
    );
}
 
export default MatchBar