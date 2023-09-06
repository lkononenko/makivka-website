import Image from 'next/image'
import { Header } from './partials/Header/Header'
import { Hero } from './components/Hero/Hero'
import { AnimatedTitle } from './components/AnimatedTitle/AnimatedTitle'
import { Section } from './components/Section/Section'
import { Team } from './partials/Team/Team'
import { PastConcerts } from './partials/PastConcerts/PastConcerts'

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
            <div className="py-2 md:pb-6 text-base-100 flex flex-col md:flex-row gap-8 md:gap-16 items-center">
              <div className="w-full md:basis-1/2">
                <Image
                  src="/images/about-us.jpeg"
                  alt="Concert of Makivka"
                  width={480}
                  height={368}
                  // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
          <div className="max-w-screen-md mx-auto flex flex-col sm:flex-row items-center gap-4 justify-between my-10">
            <div className="text-center font-thin flex sm:flex-col items-end sm:items-center sm:basis-1/4">
              <span className="text-4xl md:text-6xl text-primary mr-3 sm:mr-0">10</span>
              <span className="text-2xl md:text-lg text-white mb-[2px]">September</span>
            </div>
            <div className="text-white text-center sm:text-left font-thin sm:basis-1/2">
              <p className="text-lg font-light">Korenlint</p>
              <div className="flex items-center gap-2 mb-2 sm:mb-4 justify-center sm:justify-normal">
                <Image
                  src={`/icons/location.svg`}
                  alt="Instagram"
                  width="25"
                  height="25"
                />
                <span>Haarlem</span>
              </div>
              <div>
                <span className="pr-2">14:00 - 14:20</span> <span>Waalse Kerk - Begijnhof 30</span>
              </div>
              <div>
                <span className="pr-2">15:15 - 15:45</span> <span>RASOM - Gierstraat 5 (HEMA kelder)</span>
              </div>
            </div>
            <div className="sm:basis-1/4">
              <a
                href="https://www.korenlint.nl/profiel/makivka"
                className="btn btn-primary h-10 min-h-0"
                target="_blank"
              >Learn More</a>
            </div>
          </div>
          <h3>Past Concerts</h3>
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
