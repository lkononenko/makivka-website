import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

export const Header: FC = () => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center">
      <Link href="/">
        <Image
          src="/makivka-logo.png"
          alt="Makivka"
          width={250}
          height={70}
          priority
        />
      </Link>
      <div className="flex items-center gap-2">
        <ul className="menu menu-horizontal px-1 md:text-lg text-primary font-light">
          <li><a href="#about-us" className="px-2 md:px-4">About Us</a></li>
          <li><a href="#agenda" className="px-2 md:px-4">Agenda</a></li>
          <li><a href="#team" className="px-2 md:px-4">Team</a></li>
          <li><a href="#contact-us" className="px-2 md:px-4">Contact Us</a></li>
        </ul>
        {/* <a className="btn btn-secondary" href="https://www.instagram.com/makivka_amsterdam/" target='_blank'>Instagram</a> */}
        <a href="https://www.instagram.com/makivka_amsterdam/" target='_blank' className='hidden sm:inline-block'>
          <Image
            src={`/icons/instagram-color.svg`}
            alt="Instagram"
            width="30"
            height="30"
          />
        </a>
      </div>
    </header>
  );
};