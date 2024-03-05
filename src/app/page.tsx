import Image from 'next/image'
import { Header } from './partials/Header/Header'
import { Hero } from './components/Hero/Hero'
import { AnimatedTitle } from './components/AnimatedTitle/AnimatedTitle'
import { Section } from './components/Section/Section'
import { Team } from './partials/Team/Team'
import { AgendaItem, IAgendaItem } from './components/AgendaItem/AgendaItem'
import { PastConcerts } from './partials/PastConcerts/PastConcerts'

const upcomingConcerts = [
  {
    date: '1',
    month: 'April',
    title: 'Oekraïense Passen',
    location: 'Spaarndam, Oude Kerk (Kerkplein 1)',
    time: 'Start: 16.00, Open Doors: 15.30',
    desc: 'Tickets: SOON',
    infoLink: ''
  },
  {
    date: '5',
    month: 'May',
    title: 'Ukrainian Easter with Makivka',
    location: 'Amsterdam, Zuiderkerk (Zuiderkerkhof 72)',
    time: 'Start: 14.00, Open Doors: 13.30',
    desc: 'Tickets: SOON',
    infoLink: ''
  },
];

export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8 py-2">
        <Header />
        <Hero />
      </div>
      <main className="text-center">
        <Section bgColor="bg-primary" id="about-us">
          <AnimatedTitle>About us</AnimatedTitle>
            <div className="py-2 md:pb-6 text-base-100 flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
              <div className="w-full md:basis-1/2">
                <Image
                  src="/images/about-us.JPG"
                  alt="Concert of Makivka"
                  width={612}
                  height={375}
                  sizes="100vw"
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                  priority
                  className="rounded-lg"
                />
              </div>
              <div className="w-full sm:text-lg lg:text-xl text-left font-light md:basis-1/2">
                <p>
                  Makivka is a young folk ensemble from Amsterdam that brings traditional Ukrainian polyphony to the Netherlands. The repertoire of our ensemble is extensive - traditional carol songs, spring, summer and harvest chants, lyric and spiritual compositions of Ukrainian composers.
                </p>
                <p>
                  Makivka opens the door for you to the rich Ukrainian culture. With our performances we are also committed to help Ukraine - our profits proceed to cover the needs of Ukrainian refugees and army to make our contribution in bringing peace to our land. 
                </p>
              </div>
            </div>
        </Section>
        <Section bgColor="bg-secondary" id="agenda">
          <AnimatedTitle>Upcoming Concerts</AnimatedTitle>
          <div className='mb-12'>
            {upcomingConcerts.map((concert: IAgendaItem, index: number) => (
              <AgendaItem
                key={index}
                date={concert.date}
                month={concert.month}
                title={concert.title}
                location={concert.location}
                time={concert.time}
                desc={concert.desc}
                infoLink={concert.infoLink ? concert.infoLink : undefined}
              />
            ))}
          </div>
          <AnimatedTitle>Past Concerts</AnimatedTitle>
          <PastConcerts />
        </Section>
        <Section bgColor="bg-accent" id="team">
          <AnimatedTitle>Our Team</AnimatedTitle>
          <Team />
        </Section>
        <Section bgColor="bg-secondary" id="contact-us">
          <AnimatedTitle>Contact Us</AnimatedTitle>
          <div className="text-white">
            {/* <Image
              src={`/icons/gmail.svg`}
              alt="Gmail"
              width="25"
              height="25"
            /> */}
            <p><span className="text-primary font-light">Email:</span> <a href="mailto:makivka.amsterdam@gmail.com" target="_blank">makivka.amsterdam@gmail.com</a></p>
            <p><span className="text-primary font-light">Instagram:</span> <a href="https://www.instagram.com/makivka_amsterdam/" target='_blank'>makivka_amsterdam</a></p>
          </div>
        </Section>
        {/* <Section bgColor="bg-accent">
          <button className="btn">Button</button>
          <button className="btn btn-neutral">Neutral</button>
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-secondary">Secondary</button>
          <button className="btn btn-accent">Accent</button>
          <button className="btn btn-ghost">Ghost</button>
          <button className="btn btn-link">Link</button>
        </Section> */}
      </main>
    </>
  )
}
