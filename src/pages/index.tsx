import Head from "next/head";
import Image from "next/image";
import site from "../data/site.json";

import { allProjects, allWorks, Project, Work } from "contentlayer/generated";
import Link from "next/link";
import { Section } from "../components/Section";

type FolioItem = Work | Project;

function FolioList({ items }: { items: FolioItem[] }) {
  return (
    <ul>
      {items.slice(0, 3).map((item) => {
        return (
          <div key={item._id}>
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

function LinkButton({ href, children }) {
  return (
    <Link href={href}>
      <a className="btn">{children}</a>
    </Link>
  );
}

export default function Home() {
  return (
    <div>
      <h1 className="h1">Hello, I'm Zeb 👋</h1>
      <p className="text-intro">{site.description}</p>

      <p className="text-intro">
        Currently, I'm a frontend engineer, currently working at{" "}
        <a href="https://faraday.ai">Faraday.ai</a>, working on our web app
        which enables businesses to create no-code predictions from their
        consumer data.
      </p>

      <Section title="Work" intro="What I've built throughout my career">
        <FolioList items={allWorks} />
        <LinkButton href="/work">All work</LinkButton>
      </Section>
      <Section title="Projects" intro="Sometimes I build a few hobby app ideas">
        <FolioList items={allProjects} />
        <LinkButton href="/projects">All projects</LinkButton>
      </Section>
      <Section title="Connect with me elsewhere">
        GitHub, Linkedin, or Twitter
      </Section>
    </div>
  );
}
