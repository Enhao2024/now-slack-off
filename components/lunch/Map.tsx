import { Coordinate } from '@/types/common';
import React from 'react';

interface Props {
  lunch: string,
  coordinate: Coordinate,
}

function Map({ lunch, coordinate }: Props) {
  const API_KEY = process.env.GOOGLE_API_KEY;

  if (!API_KEY) return null;

  return (
    <>
      <div className="hidden lg:block">
        <iframe
          title="Slacker Map"
          width="700"
          height="500"
          loading="lazy"
          src={`https://www.google.com/maps/embed/v1/search?zoom=13&center=${coordinate.lat},${coordinate.lng}&q=${lunch}&key=${API_KEY}`}
        />
      </div>
      <div className="lg:hidden">
        <iframe
          title="Slacker Map"
          width="320"
          height="500"
          loading="lazy"
          src={`https://www.google.com/maps/embed/v1/search?zoom=13&center=${coordinate.lat},${coordinate.lng}&q=${lunch}&key=${API_KEY}`}
        />
      </div>
    </>
  );
}

export default Map;
