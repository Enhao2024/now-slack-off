import { Coordinate } from '@/types/common';
import React from 'react'

interface Props {
  lunch: string,
  coordinate: Coordinate,
}

const Map = ({ lunch, coordinate }: Props) => {

  const API_KEY = process.env.GOOGLE_API_KEY;

  if (!API_KEY) return null;

  return (
    <>
      <div className='hidden lg:block'>
        <iframe width="700" height="500" loading="lazy"
          src={`https://www.google.com/maps/embed/v1/search?zoom=13&center=${coordinate.lat},${coordinate.lng}&q=${lunch}&key=${API_KEY}`}>
        </iframe>
      </div>
      <div className='lg:hidden'>
        <iframe width="360" height="500" loading="lazy"
          src={`https://www.google.com/maps/embed/v1/search?zoom=13&center=${coordinate.lat},${coordinate.lng}&q=${lunch}&key=${API_KEY}`}>
        </iframe>
      </div>
    </>
  )
}

export default Map