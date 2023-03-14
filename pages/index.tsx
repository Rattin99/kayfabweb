
import Reviewer from '@/components/cards/MatchCard/Reviewer';
import MatchCard from '../components/cards/MatchCard/index'


export default function Home() {

  const t:string = `Roman Reigns vs Sami Zayn`;
  const r:number = 4;
  const s: string = 'pin falls or submissions'
  const d: string = '11 DEC 2020'
  const sh: string = 'Elimenation Chamber'
  const username = "Rattin Sadman"
  const snippet = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, maiores?"

  return (
    <>
      <div className='bg-black flex items-center justify-center align-middle h-screen '>
      <Reviewer userName={username} rating = {r} snippet ={snippet}  title ={t} show = {sh} />
      </div>
    </>
  )
}
