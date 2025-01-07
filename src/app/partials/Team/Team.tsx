import { TeamMember, TeamItem } from '@/app/components/TeamMember/TeamMember';
import React, { FC } from 'react';

const teamMembers = [
  {
    image: 'olga.jpeg',
    name: 'Olga Svarga',
    desc: 'Leader, conductor, contralto',
    instagram: 'olisvarga',
  },
  {
    image: 'masha.jpeg',
    name: 'Mariia Malytska',
    desc: 'Soprano',
    instagram: 'm.malytska',
  },
  {
    image: 'sasha.jpeg',
    name: 'Sashko Kulykova',
    desc: 'Soprano',
    instagram: 'kuleksander',
  },
  {
    image: 'vika.jpeg',
    name: 'Viktoriia Khomenko',
    desc: 'Soprano',
    instagram: '_cherry____pie_',
  },
  {
    image: 'maria.jpeg',
    name: 'Maria Prosviryakova-Katzir',
    desc: 'Mezzo-soprano',
    instagram: 'mariaprosvira',
  },
  {
    image: 'julia.jpeg',
    name: 'Yuliia Rozhnyova',
    desc: 'Mezzo-soprano',
    instagram: 'julievanrhoads',
  },
  {
    image: 'kristina.jpeg',
    name: 'Kristina Petrushevska',
    desc: 'Alto',
    instagram: 'modernfairylifestyle',
  },
  {
    image: 'kateryna.jpeg',
    name: 'Kateryna Polishchuk',
    desc: 'Alto',
    instagram: 'kate.po.li',
  },
  {
    image: 'marichka.jpeg',
    name: 'Marichka Rozhchuk',
    desc: 'Contralto',
    instagram: 'rozmaire42',
  },
  {
    image: 'iryna.jpeg',
    name: 'Iryna Garkushyna',
    desc: 'Mezzo-soprano',
    instagram: '',
  },
]
export const Team: FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
      {teamMembers.map((member: TeamItem, index: number) => (
        <TeamMember
          key={index}
          image={member.image}
          name={member.name}
          desc={member.desc}
          instagram={member.instagram}
        />
      ))}
    </div>
  );
};