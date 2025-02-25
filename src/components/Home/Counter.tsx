import { useEffect, useState } from 'react'
import CounterCard from './CounterCard'
import TestApi from '~/api/TestApi'
import { Item } from '~/model/Item'

const Counter: React.FC<Item> = ({ propName }) => {
  const [data, setData] = useState<Item[] | null>(null)
  useEffect(() => {
    const getData = async (type: string) => {
      const res = await TestApi.GetData(type)
      setData(res)
    }
    getData('jewelery')
  }, [])

  return (
    <div
      className=' px-4 md:px-16 lg:px-24 m-auto md:w-3/4 lg:w-3/4 z-10 bottom-15
     relative'
    >
      <div className='flex flex-row items-start shadow h-fit bg-white  rounded-[64.8px] justify-around gap-6'>
        {data?.map((item) => <CounterCard key={item.id} data={item} />)}
      </div>
    </div>
  )
}

export default Counter
