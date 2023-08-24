import { TeamMember, ITeamMember } from '@/app/components/TeamMember/TeamMember';
import React, { FC } from 'react';



const teamMembers = [
  {
    image: 'olga.jpeg',
    name: 'Olga Svarga',
    desc: 'Leader, conductor, second alto',
    instagram: 'olisvarga',
  },
  {
    image: 'masha.jpeg',
    name: 'Mariia Malytska',
    desc: 'First soprano',
    instagram: 'm.malytska',
  },
  {
    image: 'anastasia.jpeg',
    name: 'Anastasia Maievska',
    desc: 'First soprano',
    instagram: 'maievskaanastasia',
  },
  {
    image: 'sasha.jpeg',
    name: 'Sashko Kulykova',
    desc: 'First soprano',
    instagram: 'kuleksander',
  },
  {
    image: 'maria.jpeg',
    name: 'Maria Prosviryakova-Katzir',
    desc: 'Second soprano',
    instagram: 'mariaprosvira',
  },
  {
    image: 'julia.jpeg',
    name: 'Julie',
    desc: 'Second soprano',
    instagram: 'julievanrhoads',
  },
  {
    image: 'kristina.jpeg',
    name: 'Kristina Petrushevskaya',
    desc: 'First alto',
    instagram: 'modernfairylifestyle',
  },
  {
    image: 'liubov.jpeg',
    name: 'Liubov Kononenko',
    desc: 'First alto',
    instagram: 'liubov_kononenko',
  },
  {
    image: 'kateryna.jpeg',
    name: 'Kateryna Po',
    desc: 'First alto',
    instagram: 'kate.po.li',
  },
  {
    image: 'marichka.jpeg',
    name: 'Maria Rozhchuk',
    desc: 'Second alto',
    instagram: 'rozmaire42',
  },
  {
    image: 'iryna.jpeg',
    name: 'Iryna',
    desc: 'Second soprano',
    instagram: '',
  },
]
export const Team: FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
      {teamMembers.map((member: ITeamMember, index: number) => (
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