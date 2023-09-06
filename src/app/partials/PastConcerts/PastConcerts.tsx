import { AgendaItem, IAgendaItem } from '@/app/components/AgendaItem/AgendaItem';
import React, { FC } from 'react';

const pastConcerts = [
  {
    date: '24',
    month: 'August 2023',
    title: 'Manifestation on Independence Day of Ukraine',
    location: 'Amsterdam, Dam Square',
    infoLink: 'https://www.instagram.com/p/CwAuPXWtUkw/'
  },
  {
    date: '4',
    month: 'June 2023',
    title: 'Green Week SVOI, Ukrainian summer festival',
    location: 'Amsterdam, Oranjekerk',
    infoLink: 'https://www.instagram.com/p/Csoc2getuEM/'
  },
  {
    date: '16',
    month: 'April 2023',
    title: 'Ukrainian Easter with Makivka',
    location: 'Amsterdam, Zuiderkerk',
  },
  {
    date: '3',
    month: 'March 2023',
    title: 'Maria Vashchuk exhibition opening',
    location: 'Haarlem, Verwey Museum',
  },
  {
    date: '24',
    month: 'February 2023',
    title: 'One year of war',
    location: 'Haarlem, RASOM',
  },
  {
    date: '21',
    month: 'January 2023',
    title: 'Ukrainian Winter celebrations with Makivka',
    location: 'Amsterdam, Tolhuistuin',
  },
  {
    date: '14',
    month: 'January 2023',
    title: 'Malanka festival',
    location: 'Amsterdam, Oranjekerk',
  },
  {
    date: '7',
    month: 'January 2023',
    title: 'Ukrainian Christmas, Haarlem4Ukraine',
    location: 'Haarlem, Kerk van Nazarener',
  },
  {
    date: '26',
    month: 'December 2022',
    title: 'Ukrainian New Year',
    location: 'Amsterdam Central',
  },
  {
    date: '11',
    month: 'December 2022',
    title: 'Christmas with SingForUkraine',
    location: 'Amsterdam, Zuiderkerk',
  },
]
export const PastConcerts: FC = () => {
  return (
    <>
      {pastConcerts.map((concert: IAgendaItem, index: number) => (
        <AgendaItem
          key={index}
          date={concert.date}
          month={concert.month}
          title={concert.title}
          location={concert.location}
          time={concert.time}
          infoLink={concert.infoLink ? concert.infoLink : undefined}
        />
      ))}
    </>
  );
};