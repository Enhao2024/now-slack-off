'use client'
import { useEffect, useState } from "react";
import Map from "./Map";
import { Coordinate } from "@/types/common";
import { FOOD_TYPES } from "@/constants/FoodTypes";

const initLocation: Coordinate =  {
  lat: -36.850507,
  lng:  174.764289,
}

const SlotMachine = () => {

  const SPIN_TIMES: number = 20;

  let count = 0;

  const [item, setItem] = useState<string>(FOOD_TYPES[0]);
  const [location, setLocation] = useState<Coordinate>(initLocation);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        error => {
          console.error('Error fetching location:', error);
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }, []);

  const getItem = () => {
    const randomIndex = Math.floor(Math.random() * FOOD_TYPES.length);
    return FOOD_TYPES[randomIndex];
  }

  const updateItem = () => {
    const intervalId = setInterval(() => {
      if (count === SPIN_TIMES) {
        clearInterval(intervalId);
      }
      const myItem = getItem();
      setItem(myItem);
      count += 1;
    }, 50)
  }

  return (
    <div className='flex flex-col space-y-8 items-center'>
      <div className="join input-bordered input-primary">
        <button className="btn btn-primary join-item rounded-r-full w-40" onClick={() => updateItem()}>Grab A ... What?</button>
        <input className="input input-bordered input-primary join-item font-medium w-48" placeholder="Find My Lunch!" value={item} readOnly/>
      </div>
      <div className="p-4">
        <Map lunch={item} coordinate={location}/>
      </div>
    </div>
  )
}

export default SlotMachine