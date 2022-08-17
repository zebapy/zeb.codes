import { allWorks, Work } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import { PageHeader } from "src/components/PageHeader";

export async function getStaticPaths() {
  const paths: string[] = allWorks.map((p) => p.url);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const work: Work = allWorks.find(
    (p) => p._raw.flattenedPath === "work/" + params.slug
  );

  return {
    props: {
      work,
    },
  };
}

export default function ProjectLayout({
  work,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <article>
      <PageHeader title={work.title} />
      <div dangerouslySetInnerHTML={{ __html: work.body.html }} />
    </article>
  );
}
