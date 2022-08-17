import Head from "next/head";
import Image from "next/image";
import site from "../data/site.json";

import { ArrowRightIcon } from "@heroicons/react/solid";

import { allProjects, allWorks, Project, Work } from "contentlayer/generated";
import Link from "next/link";
import { Section } from "../components/Section";
import { PageHeader } from "src/components/PageHeader";
import React from "react";

type FolioItem = Work | Project;

export function FolioList({ items }: { items: FolioItem[] }) {
  return (
    <ul className="grid grid-cols-4 gap-4">
      {items.slice(0, 3).map((item) => {
        return (
          <div key={item._id} className="bg-gray-800 p-8 rounded-xl">
            <h3 className="text-2xl font-bold">
              <Link href={item.url}>{item.title}</Link>
            </h3>
            <p className="text-lg">{item.intro}</p>
          </div>
        );
      })}
    </ul>
  );
}

function LinkButton({
  href,
  children,
  icon,
}: {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactElement;
}) {
  return (
    <Link href={href}>
      <a className="btn">
        {children}
        {icon && React.cloneElement(icon, { className: "w-4 h-4" })}
      </a>
    </Link>
  );
}

export default function Home() {
  const job = site.career[0];

  return (
    <div>
      <Head>
        <title>
          {site.name} - {site.description}
        </title>
      </Head>
      <h1 className="h1">Hello, I'm Zeb 👋</h1>

      <p className="text-intro">{site.description}</p>

      <div className="my-12"></div>

      <Section
        title="Work"
        intro="What I've built throughout my career"
        footer={<LinkButton href="/work">All work</LinkButton>}
      >
        <FolioList items={allWorks} />
      </Section>
      <Section
        title="Projects"
        intro="Sometimes I build a few hobby app ideas"
        footer={<LinkButton href="/projects">All projects</LinkButton>}
      >
        <FolioList items={allProjects} />
      </Section>
      <Section title="Connect with me elsewhere">
        GitHub, Linkedin, or Twitter
      </Section>

      {/* TODO: maybe use careers[0] to make a little teaser card  */}
      <Section
        title="Currently building"
        footer={
          <LinkButton href="/about" icon={<ArrowRightIcon />}>
            More about me
          </LinkButton>
        }
      >
        <div className="p-4 rounded-lg bg-gray-800">
          <p>{job.start_year}</p>
          <p>{job.company}</p>
          <p>{job.role}</p>
          <p className="text-intro">{job.company_blurb}</p>
        </div>
      </Section>
    </div>
  );
}
