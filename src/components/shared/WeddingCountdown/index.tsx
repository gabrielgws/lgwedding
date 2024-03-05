'use client'

import { useEffect, useState } from "react";
import moment from "moment";
import { Skeleton } from "../../ui/skeleton";

const targetTime = moment("2025-04-20");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function WeddingCountdown () {
  const [currentTime, setCurrentTime] = useState(moment());
  const timeBetween = moment.duration(targetTime.diff(currentTime));
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    setIsClient(true)
    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(timeBetween.asDays());

  return (
    <div>
      {isClient ? (
        <p className="text-sm md:text-xl">
          <span>{days} dias, </span>
          <span>{timeBetween.hours()} horas, </span>
          <span>{timeBetween.minutes()} minutos, </span>
          <span>{timeBetween.seconds()} segundos</span>
        </p>
      ) : (
        <Skeleton className="w-[300px] h-[20px]" />
      ) }
    </div>
  )
}