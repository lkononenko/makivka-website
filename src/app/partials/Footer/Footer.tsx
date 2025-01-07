import Image from 'next/image';
import React, { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className="footer footer-center p-8 text-base-content gap-y-5">
      <Image
        src="/makivka-icon.jpeg"
        alt="Makivka"
        width={60}
        height={60}
      />
      <div className="grid grid-flow-col gap-4">
        <a className="link link-hover" href="#about-us">About us</a> 
        <a className="link link-hover" href="#contact-us">Contacts</a> 
        <a className="link link-hover" href="#agenda">Agenda</a> 
        <a className="link link-hover" href="#team">Team</a>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.youtube.com/@makivka_amsterdam" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
          </a> 
          <a href="https://www.instagram.com/makivka_amsterdam/" target='_blank'>
            <Image
              src={`/icons/instagram.svg`}
              alt="Instagram"
              width="25"
              height="25"
            />
          </a>
          <a href="mailto:makivka.amsterdam@gmail.com">
            <Image
              src={`/icons/gmail.svg`}
              alt="Gmail"
              width="25"
              height="25"
            />
          </a>
        </div>
      </div>
      <div>
        <p className="font-light">All right reserved by Makivka &copy; 2025</p>
      </div>
    </footer>
  );
};