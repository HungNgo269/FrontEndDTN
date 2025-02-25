import { Item } from '~/model/Item'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
interface CounterCardProps {
  data?: Item
}

const CounterCard: React.FC<CounterCardProps> = ({ data }) => {
  return (
    <div className='flex flex-row p-8 cursor-pointer '>
      <img className='w-24 h-24' src={data?.image} alt={data?.title} />
      <div className='flex flex-col '>
        <div className='flex flex-row justify-items-start '>
          <CheckCircleIcon className='text-green-500 font-bold'></CheckCircleIcon>
          <span>
            Rating: {data?.rating.rate} ({data?.rating?.count} reviews)
          </span>
        </div>
        <div className='flex flex-row justify-items-start'>
          <CheckCircleIcon className='text-green-500 font-bold'></CheckCircleIcon>
          <span>
            Rating: {data?.rating.rate} ({data?.rating?.count} reviews)
          </span>
        </div>
      </div>
    </div>
  )
}

export default CounterCard
