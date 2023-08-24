import React, { useRef } from 'react';

export const Section = ({
  children,
  bgColor,
  id,
}: {
  children: React.ReactNode;
  bgColor?: string;
  id?: string;
}): JSX.Element => {

  return (
    <section className={bgColor} id={id}>
      <div className="mx-auto max-w-screen-2xl p-4 md:p-8">
        {children}
      </div>
    </section>
  );
};

