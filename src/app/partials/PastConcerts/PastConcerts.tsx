'use client';

import { AgendaItem, IAgendaItem } from '@/app/components/AgendaItem/AgendaItem';
import React, { FC } from 'react';

const pastConcerts = [
  {
    date: '30',
    month: 'November',
    title: 'Spiritual performance at the exhibition "Bezielende Ontmoetingen"',
    location: 'Haarlem, St.-Bavokerk',
    time: 'Start: 15.00 and 16.00',
    desc: '',
    infoLink: 'https://www.matthijs-wils.nl'
  },
  {
    date: '24',
    month: 'November',
    title: 'Ukrainian Christmas',
    location: 'Spaarndam, Oude Kerk (Kerkplein 1)',
    time: 'Start: 16.00, Open Doors: 15.30',
    desc: '',
    infoLink: 'https://www.vriendenoudekerk.nl/events/makivka-oekraiens-vrouwen-acapella-koor/'
  },
  {
    date: '2',
    month: 'November',
    title: 'Spiritual performance at the exhibition "Bezielende Ontmoetingen"',
    location: 'Haarlem, St.-Bavokerk',
    time: '15.00 and 16.00',
    desc: '',
    infoLink: 'https://www.matthijs-wils.nl'
  },
  {
    date: '22',
    month: 'September',
    title: 'Exhibition "The House of Polina Rayko. Disappearing"',
    location: 'Amsterdam, Zaventemweg 81',
    time: 'Start: 16.00',
    desc: '',
    infoLink: 'https://www.instagram.com/p/C-c7IddM3O9/?igsh=MXdzY3JseHJ0NmxsMg=='
  },
  {
    date: '15',
    month: 'September',
    title: 'Korenlint',
    location: 'Haarlem',
    time: '13.20 - 13.40 - PHIL - Kleine Zaal (Lange Begijnestraat 11)',
    desc: '16.10 - 16.30 - Stedelijk Gymnasium (Jacobijnestraat 24)',
    infoLink: 'https://www.korenlint.nl/profiel/makivka'
  },
  {
    date: '1',
    month: 'June',
    title: 'Korendag Schalkwijk Centrum',
    location: 'Haarlem, Winkelcentrum Schalkwijk (Floridaplein 13)',
    time: '12.00 - 12.20',
    desc: 'Free entrance',
    infoLink: 'https://centrumschalkwijk.nl/evenementen/korendag/'
  },
  {
    date: '5',
    month: 'May',
    title: 'Vrije lente - Вільна весна',
    location: 'Amsterdam, Keizersgrachtkerk (Keizersgracht 566)',
    time: 'Start: 16.00',
    desc: 'Free entrance',
    infoLink: 'https://www.keizersgrachtkerk.nl/vrijheidsmaaltijd2024'
  },
  {
    date: '6',
    month: 'April',
    title: 'Bewonersbijeenkomst - Oekraïne opvang EtBuut',
    location: 'Zaandam (Parkstraat 72)',
    time: 'Start: 16.30',
    desc: '',
    infoLink: ''
  },
  {
    date: '1',
    month: 'April',
    title: 'Oekraïense Passen',
    location: 'Spaarndam, Oude Kerk (Kerkplein 1)',
    time: 'Start: 16.00, Open Doors: 15.30',
    infoLink: 'https://www.vriendenoudekerk.nl/events/paasconcert-makivka-oekraiens-amsterdams-volksensemble/'
  },
  {
    date: '24',
    month: 'February',
    title: 'Stand with Ukraine',
    location: 'Zaandam, Oekraïense Club (Rozengracht 6-8)',
    time: 'Time: 18:00',
    infoLink: 'https://www.instagram.com/p/C3KNtSftpWC/'
  },
  {
    date: '14',
    month: 'January 2024',
    title: 'Malanka',
    location: 'Amsterdam, Oranjekerk',
    time: '17:00 - 22:00',
    infoLink: 'https://www.instagram.com/p/C1Rb2UJtkyJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
  },
  {
    date: '7',
    month: 'January 2024',
    title: 'Oekraïense Kerst met Makivka',
    location: 'Spaarndam, Oudekerk (Kerkplein 2)',
    time: 'Start: 16.00 (Open Doors: 15.30)',
    infoLink: 'https://www.vriendenoudekerk.nl/events/makivka-oekraiens-amsterdams-volksensemble/'
  },
  {
    date: '17',
    month: 'December 2023',
    title: 'Ukrainian Christmas',
    location: 'Nijmegen',
  },
  {
    date: '7',
    month: 'December 2023',
    title: 'Ministry of Justice and Security',
    location: 'Internal event',
  },
  {
    date: '3',
    month: 'December 2023',
    title: 'Christmas with Makivka',
    location: 'Amsterdam, Zuiderkerk',
    time: 'Start: 13.00 (Open Doors: 12.30)',
    infoLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfY2ZOmUiqKJVHIgHN2XiHYIhLMS3I1qpV8Xddj-gOrUfCeQQ/viewform'
  },
  {
    date: '10',
    month: 'September 2023',
    title: 'Korenlint',
    location: 'Haarlem',
    infoLink: 'https://www.korenlint.nl/profiel/makivka'
  },
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
  const [showMore, setShowMore] = React.useState<boolean>(false);
  const concerts = showMore ? pastConcerts : pastConcerts.slice(0, 3);

  return (
    <>
      <div className="opacity-60">
        {concerts.map((concert: IAgendaItem, index: number) => (
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
      </div>
      <button className="btn btn-accent mb-6" onClick={() => setShowMore(!showMore)}>
        <svg
          className={`w-4 h-4 text-white ${showMore ? 'rotate-180' : ''}`}
          aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 8"
        >
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
        </svg>
        {showMore ? 'Show less' : 'Show more'}
      </button>
    </>
  );
};