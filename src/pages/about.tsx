import { NextSeo } from 'next-seo';

import TechIcons from '@/components/TechIcons';
import { TechListType } from '@/components/TechIcons';
import TechStack from '@/components/TechStack';

export default function AboutPage() {
  const customMetadata = {
    title: 'About',
    canonical: 'https://sergiobarria.com/about',
    openGraph: {
      url: 'https://sergiobarria.com/about',
    },
  };

  return (
    <>
      <NextSeo {...customMetadata} />
      <div className='layout'>
        <section className='section'>
          <h1>About me</h1>
          <article className='my-8 prose dark:prose-invert max-w-none'>
            <p>
              Hello! I'm Sergio. I'm a Civil Engineer - Web Developer from
              Panama.
            </p>
            <p>
              I first had my first try at software development a few years back
              in college. Although I liked it, I kept focus on my career so I
              couldn't keep practicing.
            </p>
            <p>
              Because of the pandemic, there was not much to do during
              quarantine, so I started looking for some new hobbies. By the end
              of 2020 I got the curiosity again of learning about software
              development, this time focusing on the web. There is so much
              technologies to learn for both front and back end development,
              that I quickly fell in love with programming.
            </p>
            <p>
              I created this website for two main reasons. The first one is to
              showcase and share all the things I've learned during my journey,
              and who knows?, maybe help others, that like me are learning. The
              second reason, is I always like to learn new things. So, I wanted
              this website to be the place where I can put in practice all the
              new things I learn.
            </p>
            <p>
              If you want to contact me, go ahead and send me a message through
              the contact form on the contact page. I'll be happy to receive
              your feedback.
            </p>
          </article>
        </section>

        <section className='section'>
          <div className='my-8 space-y-3'>
            {/* <h2>Developer Stack</h2> */}
            <div className='mb-16 space-y-3'>
              <h3>Current Favorite Tech Stack</h3>
              <p className='text-long'>
                This is my current favorite stack to work with
              </p>
              <TechStack />
            </div>

            <div className='space-y-3'>
              <h3>Other Tech</h3>
              <p className='text-long'>
                This is some of the other technologies that I know and have work
                with
              </p>
              <TechIcons
                className='text-gray-500'
                techs={
                  'vue,django,mongodb,mysql,postgresql,firebase,sass,gatsby'.split(
                    ','
                  ) as Array<TechListType>
                }
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
