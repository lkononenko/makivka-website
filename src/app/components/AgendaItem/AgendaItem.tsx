import Image from 'next/image'
import React from 'react';

export interface IAgendaItem {
  date: string;
  month: string;
  title: string;
  location: string;
  time?: string;
  infoLink?: string;
}

export const AgendaItem = ({
  date,
  month,
  title,
  location,
  time,
  infoLink
}: IAgendaItem): JSX.Element => {

  return (
    <div className="max-w-screen-md mx-auto flex flex-col sm:flex-row items-center gap-4 justify-between py-10 border-b border-accent border-solid last:border-b-0">
      <div className="text-center font-thin flex sm:flex-col items-end sm:items-center sm:basis-1/4">
        <span className="text-4xl md:text-6xl text-primary mr-3 sm:mr-0">{ date }</span>
        <span className="text-2xl md:text-lg text-white mb-[2px]">{ month }</span>
      </div>
      <div className="text-white text-center sm:text-left font-thin sm:basis-1/2">
        <p className="text-lg font-light">{ title }</p>
        <div className="flex items-center gap-2 mb-2 sm:mb-4 justify-center sm:justify-normal">
          <Image
            src={`/icons/location.svg`}
            alt="Instagram"
            width="25"
            height="25"
          />
          <span>{ location }</span>
        </div>
        {
          time && <span>{ time }</span>
        }
      </div>
      <div className="sm:basis-1/4">
        {
          infoLink && 
            <a
              href={ infoLink }
              className="btn btn-primary h-10 min-h-0"
              target="_blank"
            >Learn More</a>
        }
      </div>
    </div>
  );
};