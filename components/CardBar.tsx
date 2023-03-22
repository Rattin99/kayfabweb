

type props = {
    ucount : number,
    comments: number
}

const CardBar = ({ucount,comments}:props) => {
    return ( 
        <div className="flex px-3 bg-dark-xxl pb-2">
           <div className="flex">
                <div className="mx-2 pt-1 cursor-pointer">
                    <svg width="14" height="14" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.499 14V13.5H7.999H1.20705L13.999 0.70712L26.7919 13.5H19.999H19.499V14V27.5H8.499V14Z" stroke="white"/>
                    </svg>
                </div>
                <div className="cursor-default">
                    <p className="text-white text-sm">{ucount}</p>
                </div>
           </div>

            <div className="mx-2 pt-1 cursor-pointer">
                <svg width="14" height="14" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.499 14V14.5H7.999H1.20705L13.999 27.2929L26.7919 14.5H19.999H19.499V14V0.5H8.499V14Z" stroke="white"/>
                </svg>
            </div>
            <div className="flex">
                <div className="mx-2 pt-1 cursor-pointer">
                    <svg enable-background="new 0 0 48 48" height="14" version="1.1" viewBox="0 0 48 48" width="14"  xmlns="http://www.w3.org/2000/svg"><g stroke="#fff" id="Expanded"><g><g><path d="M6,45.414V36H3c-1.654,0-3-1.346-3-3V7c0-1.654,1.346-3,3-3h42c1.654,0,3,1.346,3,3v26c0,1.654-1.346,3-3,3H15.414     L6,45.414z M3,6C2.448,6,2,6.448,2,7v26c0,0.552,0.448,1,1,1h5v6.586L14.586,34H45c0.552,0,1-0.448,1-1V7c0-0.552-0.448-1-1-1H3z     "/></g><g><circle cx="16" cy="20" r="2"/></g><g><circle cx="32" cy="20" r="2"/></g><g><circle cx="24" cy="20" r="2"/></g></g></g></svg>
                </div>
                <div className="cursor-default">
                    <p className="text-white text-sm">{comments}</p>
                </div>
            </div>
        </div>
    );
}
 
export default CardBar;