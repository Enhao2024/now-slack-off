'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react';

interface Props {
  title: string
}

const Calculator = ({ title }: Props) => {

  const router = useRouter()

  const [hourlyRate, setHourlyRate] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);

  const calculate = () => {
    const result = (hourlyRate * hours).toFixed(2);
    router.push(`/calculator/result?result=${result}`);
  }

  return (
    <div className='mx-4 flex flex-col justify-center items-center space-y-8'>
      <p className='text-4xl font-semibold text-center'>{title}</p>
      <div className='flex flex-row justify-between items-center'>
        <span className="label-text text-nowrap text-lg font-bold mr-4">Hourly Rate</span>
        <input type="number" placeholder="Hourly Rate" className="input input-bordered w-full max-w-xs no-spin w-32"
          onChange={(e) => {
            const value = e.target.value
            setHourlyRate(parseFloat(value));
          }}
          min={0}
          value={hourlyRate}
        />
      </div>
      <div className='flex flex-row justify-between items-center'>
        <span className="label-text  text-nowrap text-lg font-bold mr-4">Slack-Off Hours</span>
        <input type="number" placeholder="Slack-Off Hours" className="input input-bordered w-full max-w-xs no-spin w-32"
          onChange={(e) => {
            const value = e.target.value
            setHours(parseFloat(value));
          }}
          min={0}
          value={hours}
        />
      </div>
      <div className='flex flex-row justify-center items-center'>
        <button className='btn btn-accent font-bold' onClick={() => calculate()} >See How Much <del className='text-gray-500'>Mooched</del> Earned</button>
      </div>

    </div>
  )
}

export default Calculator