
import MatchCard from '../components/cards/MatchCard/index'


export default function Home() {

  const t:string = `Roman Reigns vs Sami Zayn`;
  const r:number = 4;
  const s: string = 'pin falls or submissions'
  const d: string = '11 DEC 2020'
  const sh: string = 'Elimenation Chamber'
  const username = "Rattin Sadman"
  const snippet = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor vero molestiae alias enim quidem pariatur quas tempora aliquid, asperiores in?"
  const avg = 3.85

  const hvu = 'https://firebasestorage.googleapis.com/v0/b/rather-cec85.appspot.com/o/hvsu.jpg?alt=media&token=96811517-7e59-4414-9924-5a2447c9144b';
  
  const rvss = 'https://firebasestorage.googleapis.com/v0/b/rather-cec85.appspot.com/o/maxresdefault.jpg?alt=media&token=ffbf5cb4-23b7-435a-9ea3-450910d9c174';

  const data2 = {
    title : 'Undertaker vs HHH',
    rating : 3,
    username : 'Rattin Sadman',
    snippet : 'adklnaskdn askfnasfnfn asdknas;dnas;dl;alsda;sd apqweojwqpe pqoejpqowjepqwoej asdnqpwoje qpweojqwpej',
    show: 'Wrestlemania',
    ucount: 132,
    comments: 3,
    avg : 3.32,
  }

  const data3 = {
    title : 'John Cena vs CM Punk',
    rating : 5,
    username : 'Rattin Sadman',
    snippet : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quos repellendus aliquid excepturi quo illo quisquam nihil! Quas?",
    show: 'Money In The Bank',
    ucount: 156,
    comments: 12,
    avg : 4.04,
    img_url: 'https://firebasestorage.googleapis.com/v0/b/rather-cec85.appspot.com/o/jvsc.jpg?alt=media&token=c51ec3f8-2c17-4bf1-9db6-53600d744b6a'
  }

  return (
    <>
      <div className='bg-black h-full flex flex-col items-center justify-center align-middle '>
        <MatchCard title={t} show = {sh} userName ={username} snippet ={snippet} rating = {r} avg= {avg} ucount = {412} comments = {17} imgUrl = {rvss}/>
        <MatchCard title={data2.title} show ={ data2.show } userName = {data2.username} snippet = {data2.snippet} rating = {data2.rating} 
        avg ={data2.avg} ucount = {data2.ucount} comments = {data2.comments} imgUrl = {hvu}/>
        <MatchCard title={data3.title} show ={ data3.show } userName = {data3.username} snippet = {data3.snippet} rating = {data3.rating} 
        avg ={data3.avg} ucount = {data3.ucount} comments = {data3.comments} imgUrl = {data3.img_url}/>
        
       
      </div>
    </>
  )
}
