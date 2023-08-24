import Image from 'next/image'
import React from 'react';

export interface ITeamMember {
  name: string;
  image: string;
  desc: string;
  instagram: string;
}

export const TeamMember = ({
  image,
  name,
  desc,
  instagram
}: ITeamMember): JSX.Element => {

  return (
    <div className="text-center text-white">
       <Image
          src={`/images/team/${image}`}
          alt={name}
          width={200}
          height={200}
          className="rounded-full inline-block"
        />
        <p className="font-light mt-2 mb-1 text-lg">{name}</p>
        <p>{desc}</p>
    </div>
  );
};