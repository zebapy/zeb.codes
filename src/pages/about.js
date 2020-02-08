import React, { useState } from 'react';
import dayjs from 'dayjs';
import cx from 'clsx';

import PageHead from '../components/page-head';
import PageActions from '../components/page-actions';
import SEO from '../components/seo';

import resume from '../../content/resume.yml';

import focuses from '../../content/focuses.yml';

const YEARS_XP = new Date().getFullYear() - 2013;

export default () => {
  const title = 'A bit about me';

  return (
    <>
      <SEO title={title} />

      <PageHead
        media={
          <figure className="mb-4">
            <img
              src={resume.basics.picture}
              alt="Zeb looking like he knows something."
              className="w-24 md:w-32 lg:w-48 rounded-full grayscale animated fadeInDown"
            />
          </figure>
        }
        title={title}
        text={`Web developer with ${YEARS_XP}+ years of experience with a penchant for UI/UX design, born and raised in rural Vermont.`}
      />

      <div className="markdown lg:w-2/3 mb-32">
        <p>
          I'm first and foremost a front-end (whoa) developer with a penchant
          for UI design, born and raised in rural Vermont, US. I am primarily
          self-taught with 7 combined years of freelance and professional
          experience. I have a passion for writing code and tweaking pixels. I'm
          always hungry to code and learn more.
        </p>

        <p>
          I am currently employed at Middlebury College as a web developer where
          I collaborate with my team to build micro sites, Wordpress themes,
          create frontend design systems for numerous Drupal sites, and develop
          custom HTML emails. I enjoy working on tooling and finding ways to
          improve workflows.
        </p>

        <p>
          I am also the creator/maintainer of a project called Fateseal which
          has consumed a lot of my free time. Check it out in my projects.
        </p>
      </div>

      <section className="mb-24">
        <h2 class="h2">Skills</h2>

        <div className="skills">
          <Skills items={resume.skills[0].keywords} />
        </div>
      </section>

      <section className="mb-24">
        <h2 className="h2">Where I've worked</h2>
        <Jobs work={resume.work} />
      </section>

      <section className="mb-24">
        <h2 className="h2">Focuses</h2>
        <p className="text-xl mb-8">
          There are many aspects that build up a successful website. These are
          just a handful of what I focus on.
        </p>
        <Focuses items={focuses} />
      </section>

      <PageActions work contact />
    </>
  );
};

const ToggleBox = ({ children }) => {
  const [open, setOpen] = useState(false);
  const toggle = event => setOpen(open => !open);

  return (
    <div className={cx('togglebox', open && 'togglebox--open')}>
      <div className="togglebox-content">{children}</div>
      <div>
        <button className="togglebox-btn" onClick={toggle} aria-expanded={open}>
          {open ? <span>Show less &uarr;</span> : <span>Show more &darr;</span>}
        </button>
      </div>
    </div>
  );
};

const Jobs = ({ work }) => {
  return (
    <div className="jobs">
      <ul className="">
        {work.map(item => (
          <li key={item.company} className="mt-5">
            <h3 className="h3">
              {item.position}{' '}
              <a href={item.website} className="link">
                @{item.company}
              </a>
            </h3>
            <p className="mb-3 text-lg">
              <time dateTime={item.startDate}>
                {dayjs(item.startDate).format('MMMM YYYY')}
              </time>
              &ndash;
              {item.endDate ? (
                <time dateTime={item.endDate}>
                  {dayjs(item.endDate).format('MMMM YYYY')}
                </time>
              ) : (
                'Present'
              )}
            </p>
            <ToggleBox label="More info">
              <p>{item.summary}</p>
              <ul className="list-square pl-4">
                {item.highlights.map((text, i) => (
                  <li key={i} className="mb-2 text-md text-primary">
                    <span className="text-black">{text}</span>
                  </li>
                ))}
              </ul>
            </ToggleBox>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Skills = ({ items }) => {
  return (
    <ul className="text-gradient font-bold flex flex-wrap">
      {items.map(item => (
        <li key={item} className="w-1/2 md:w-1/3 mb-2">
          {item}
        </li>
      ))}
    </ul>
  );
};

const Focuses = ({ items = [] }) => {
  return (
    <ul className="md:flex flex-wrap">
      {items.map(({ title, text }) => (
        <li key={title} className="mb-8">
          {/* dangerously set sine we use abbr in the seo focus */}
          <h3 dangerouslySetInnerHTML={{ __html: title }} className="h3" />
          <p className="">{text}</p>
        </li>
      ))}
    </ul>
  );
};
